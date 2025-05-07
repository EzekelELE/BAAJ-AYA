"use client"

import { useState } from "react"
import Image from "next/image"

export default function ProductImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="flex flex-col gap-4">
      <div
        className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt="Product image"
          fill
          className="object-cover"
          priority />
      </div>
      <div className="flex gap-4 overflow-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md ${
              selectedImage === index ? "ring-2 ring-black" : "ring-1 ring-gray-200"
            }`}
            onClick={() => setSelectedImage(index)}>
            <Image
              src={image || "/placeholder.svg"}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
