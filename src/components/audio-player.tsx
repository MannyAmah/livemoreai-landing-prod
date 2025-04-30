"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

interface AudioPlayerProps {
  duration: string
}

export default function AudioPlayer({ duration }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayback = () => {
    // In a real implementation, this would control actual audio playback
    setIsPlaying(!isPlaying)
  }

  return (
    <Button variant="ghost" size="sm" className="gap-2" onClick={togglePlayback}>
      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      {isPlaying ? "Pause article" : "Listen to article"}
      <span className="ml-2 text-muted-foreground">{duration}</span>
    </Button>
  )
}
