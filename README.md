# AUM — Where Science Ends, Sanātana Continues

Cinematic 3D homepage MVP. React + TypeScript + React Three Fiber + Drei + Tailwind, bundled with Vite.

## What's here

A full-screen 3D scene (glowing AUM core + 7-segment "knowledge mandala" +
starfield/particles) with a text overlay on top: logo, tagline, hero copy,
two CTAs, and a Reduce Motion / 2D Mode toggle. Clicking a mandala segment
opens a "coming soon" tooltip for that section (Scriptures, Temples, Epics,
Concepts, Practices, Kids, AUM Verify).

Accessibility: respects `prefers-reduced-motion` automatically, and the
in-UI toggle overrides it either way (persisted in localStorage). If WebGL
isn't available, a static cosmic background with the same nav/text renders
instead — nothing depends on the 3D canvas to be usable.

## Install

```bash
npm install
```

## Run the dev server

```bash
npm run dev
```

Opens on `http://localhost:5173` by default.

## Build for production

```bash
npm run build
npm run preview   # optional: serve the build locally to sanity-check
```

Output goes to `dist/`.

## File structure

```
src/
  main.tsx                 — React root
  App.tsx                  — wires 3D scene + overlay + motion/webgl state
  index.css                — Tailwind + a few hand-written utility classes
  components/
    AUMUniverse.tsx         — the 3D scene: AUM core, mandala, particles, camera rig
    Navbar.tsx               — logo + reduce-motion toggle
    HeroOverlay.tsx           — hero text, CTAs, pathway tooltip
    StaticFallback.tsx        — no-WebGL / static fallback UI
  hooks/
    useReducedMotion.ts      — combines OS preference + manual override
    useWebGLSupport.ts       — feature-detects WebGL
  data/
    pathways.ts             — the 7 mandala sections (label, Sanskrit, description, color)
```

## Notes for extending

- The 7 pathways live in `src/data/pathways.ts`. Add a `route` field there
  once real destination pages exist, and swap the tooltip's "Coming soon"
  for a link in `HeroOverlay.tsx`.
- All 3D geometry is procedural (spheres, toruses, rounded boxes) — no
  external model assets, so there's nothing to load or license.
- `enterSignal` in `App.tsx` is a simple counter passed to the camera rig;
  wire it to scroll position instead of the button if you want scroll-driven
  camera movement later.
