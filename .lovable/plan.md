

## Move subtitle & title below the large decorative ring

The decorative rings are absolutely positioned and centered. The subtitle ("SLIDE TO ENTER THE VOID") and title ("LUNAVERSE") need to be repositioned to sit visually below the large ring (the 650px one on desktop, 400px on mobile).

### Changes in `src/components/PortalHero.tsx`

**Wrap the subtitle and title in an absolutely-positioned container** placed below the rings' center point:

- Create a wrapper `div` with `absolute` positioning, anchored below center (e.g., `top-[calc(50%+180px)]` on mobile, `top-[calc(50%+280px)]` on desktop via `sm:` breakpoint) to clear the large ring.
- Move the subtitle (line 54) and title (line 105) into this wrapper.
- Keep the logo and slider in the normal flex flow at center.
- Adjust `mb` spacing between subtitle and title inside the wrapper.

This places both text elements clearly beneath the outermost rotating ring while keeping the logo + slider centered within the rings.

