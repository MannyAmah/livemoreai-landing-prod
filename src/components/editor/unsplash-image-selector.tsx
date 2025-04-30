"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import Image from "next/image"

interface UnsplashImage {
  id: string
  urls: {
    regular: string
    small: string
  }
  alt_description: string
  user: {
    name: string
  }
}

interface UnsplashImageSelectorProps {
  onSelect: (url: string) => void
  onClose: () => void
}

export default function UnsplashImageSelector({ onSelect, onClose }: UnsplashImageSelectorProps) {
  const [query, setQuery] = useState("")
  const [images, setImages] = useState<UnsplashImage[]>([])
  const [loading, setLoading] = useState(false)

  // In a real app, you would use an API route to proxy requests to Unsplash
  // For this demo, we'll use a mock function that returns sample images
  const searchUnsplash = async (searchQuery: string) => {
    setLoading(true)

    // This is a mock function - in a real app, you would call your API
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Sample images from Unsplash
    const sampleImages: UnsplashImage[] = [
      {
        id: "1",
        urls: {
          regular: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80",
          small: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=400&q=80",
        },
        alt_description: "Minimal workspace with white desk and laptop",
        user: { name: "Unsplash User" },
      },
      {
        id: "2",
        urls: {
          regular: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=800&q=80",
          small: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=400&q=80",
        },
        alt_description: "Minimalist desk setup with plants",
        user: { name: "Unsplash User" },
      },
      {
        id: "3",
        urls: {
          regular: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
          small: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
        },
        alt_description: "Person using augmented reality interface",
        user: { name: "Unsplash User" },
      },
      {
        id: "4",
        urls: {
          regular: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
          small: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
        },
        alt_description: "Close up of typography samples",
        user: { name: "Unsplash User" },
      },
      {
        id: "5",
        urls: {
          regular: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
          small: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80",
        },
        alt_description: "Typography and design elements",
        user: { name: "Unsplash User" },
      },
      {
        id: "6",
        urls: {
          regular: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=800&q=80",
          small: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=400&q=80",
        },
        alt_description: "Futuristic interface design",
        user: { name: "Unsplash User" },
      },
    ]

    // Filter images based on query if provided
    const filteredImages = searchQuery
      ? sampleImages.filter((img) => img.alt_description.toLowerCase().includes(searchQuery.toLowerCase()))
      : sampleImages

    setImages(filteredImages)
    setLoading(false)
  }

  useEffect(() => {
    searchUnsplash("")
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    searchUnsplash(query)
  }

  return (
    <div className="border-t border-b p-4 bg-muted/30">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium">Select an image from Unsplash</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <Input
          type="text"
          placeholder="Search for images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="text-sm"
        />
        <Button type="submit" size="sm" disabled={loading}>
          <Search className="h-4 w-4" />
        </Button>
      </form>

      {loading ? (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => onSelect(image.urls.regular)}
            >
              <Image
                src={image.urls.small || "/placeholder.svg"}
                alt={image.alt_description}
                fill
                className="object-cover rounded-sm"
              />
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-muted-foreground mt-4">
        Images from Unsplash. Please credit photographers in a real application.
      </p>
    </div>
  )
}
