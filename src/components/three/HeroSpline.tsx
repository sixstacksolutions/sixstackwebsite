"use client";

import { HeroVisual } from "./HeroVisual";

/**
 * Spline was removed from the hero (the home hero is now a full-width dark
 * section). This component is kept only for backward compatibility and simply
 * renders the built-in animated graphic, no external 3D dependency.
 */
export function HeroSpline(_props: { scene?: string }) {
  return <HeroVisual />;
}
