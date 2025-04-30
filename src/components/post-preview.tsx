import Image from "next/image"
import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/data"
import AudioPlayer from "@/components/audio-player"
import ShareMenu from "@/components/share-menu"

interface PostPreviewProps {
  post: Post
}

export default function PostPreview({ post }: PostPreviewProps) {
  return (
    <div className="bg-background rounded-lg overflow-hidden border shadow-sm">
      <div className="container max-w-3xl py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground mb-4">
            <span>{formatDate(post.date)}</span>
            {post.author && (
              <>
                <span className="text-xs">•</span>
                <span>{post.author}</span>
              </>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-2xl mx-auto">{post.title}</h1>

          {post.subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{post.subtitle}</p>}
        </div>

        {post.coverImage && (
          <div className="relative w-full aspect-[16/9] mb-12 rounded-lg overflow-hidden">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />

            {(post.series || post.episode) && (
              <div className="absolute inset-0 flex items-center justify-between p-8 text-white">
                {post.series && <h2 className="text-3xl md:text-4xl font-bold drop-shadow-md">{post.series}</h2>}
                {post.episode && <div className="text-3xl md:text-4xl font-bold drop-shadow-md">Ep {post.episode}</div>}
              </div>
            )}
          </div>
        )}

        {post.duration && (
          <div className="flex justify-between items-center mb-12 border-y py-4">
            <AudioPlayer duration={post.duration || ""} />

            <ShareMenu title={post.title} excerpt={post.excerpt} />
          </div>
        )}

        <div className="prose prose-lg prose-neutral max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  )
}
