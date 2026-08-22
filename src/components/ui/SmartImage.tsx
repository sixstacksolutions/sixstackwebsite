"use client";

import { useState } from "react";
import { WorkArt, type WorkKind } from "./WorkArt";

/**
 * Shows a real photo when one exists at `src`; if the file is missing or fails
 * to load, it falls back to an on-brand themed illustration for the work kind
 * (never a broken image). Drop a photo at the given path to replace the art.
 */
export function SmartImage({
  src,
  alt,
  kind = "web",
  label,
  className = "",
}: {
  src?: string;
  alt: string;
  kind?: WorkKind;
  label?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <WorkArt kind={kind} label={label} className={className} />;
  }

  // scripts/optimize-images.mjs writes a .webp beside every source file, so the
  // WebP path is derived rather than passed in — callers keep referring to the
  // .jpg and the smaller file is preferred automatically. The <source> is
  // skipped silently by anything that cannot decode WebP, which falls through
  // to the original, and only a genuinely missing file reaches onError.
  const webp = src.replace(/\.(jpe?g|png)$/i, ".webp");

  return (
    <picture>
      {webp !== src && <source srcSet={webp} type="image/webp" />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${className}`}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    </picture>
  );
}
