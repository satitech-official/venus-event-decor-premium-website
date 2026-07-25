"use client";

import { fallbackImage } from "../data";

export default function SafeImage({ src, alt, loading = "lazy", className = "", ...props }) {
  const handleError = (event) => {
    const image = event.currentTarget;
    if (image.src === fallbackImage) return;
    image.src = fallbackImage;
    image.classList.add("image-fallback");
  };

  return (
    <img
      {...props}
      className={className}
      src={src || fallbackImage}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={handleError}
    />
  );
}
