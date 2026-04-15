"use client";

import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useEffect, useRef } from "react";

const STORAGE_KEY = "lunaverse_slide_tour_seen";

/** Must match the slide track `id` in PortalHero (Driver.js target). */
export const LUNAVERSE_SLIDE_UNLOCK_ID = "lunaverse-slide-unlock";

export function useSlideUnlockTour(enabled: boolean) {
  const instanceRef = useRef<ReturnType<typeof driver> | null>(null);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") {
      instanceRef.current?.destroy();
      instanceRef.current = null;
      return;
    }

    if (localStorage.getItem(STORAGE_KEY)) {
      return;
    }

    let cancelled = false;
    let rafId = 0;
    let timerId = 0;

    const start = () => {
      if (cancelled) return;
      const el = document.getElementById(LUNAVERSE_SLIDE_UNLOCK_ID);
      if (!el) return;

      const d = driver({
        showProgress: false,
        allowClose: true,
        animate: true,
        disableActiveInteraction: false,
        overlayClickBehavior: "close",
        stagePadding: 10,
        stageRadius: 999,
        popoverOffset: 14,
        steps: [
          {
            element: `#${LUNAVERSE_SLIDE_UNLOCK_ID}`,
            popover: {
              title: "Slide to enter",
              description:
                "Drag the handle to the right — like unlocking a phone — to open the Lunaverse.",
              side: "top",
              align: "center",
            },
          },
        ],
        onDestroyed: () => {
          instanceRef.current = null;
          try {
            localStorage.setItem(STORAGE_KEY, "1");
          } catch {
            /* ignore quota / private mode */
          }
        },
      });

      instanceRef.current = d;
      d.drive();
    };

    rafId = requestAnimationFrame(() => {
      timerId = window.setTimeout(start, 320);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
      instanceRef.current?.destroy();
      instanceRef.current = null;
    };
  }, [enabled]);
}
