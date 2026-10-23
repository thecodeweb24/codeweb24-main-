"use client";

import { useState } from "react";

type ProjectImageProps = {
  src?: string;
  alt: string;
};

export default function ProjectImage({ src, alt }: ProjectImageProps) {
  const [hasError, setHasError] = useState(!src);

  return (
    <>
      {src && !hasError && (
        <img
          src={src}
          alt={alt}
          className="project-visual-image"
          loading="lazy"
          onError={() => setHasError(true)}
        />
      )}
      {hasError && (
        <div className="project-visual-fallback">Image not found</div>
      )}
    </>
  );
}
