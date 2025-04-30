import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        {post.coverImage && (
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />

            {(post.series || post.episode) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <div className="flex justify-between items-center">
                  {post.series && <div className="text-sm font-medium">{post.series}</div>}
                  {post.episode && <div className="text-sm font-medium">Ep {post.episode}</div>}
                </div>
              </div>
            )}
          </div>
        )}
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{formatDate(post.date)}</span>
            {post.author && (
              <>
                <span>•</span>
                <span>{post.author}</span>
              </>
            )}
            {post.duration && (
              <>
                <span>•</span>
                <span>{post.duration}</span>
              </>
            )}
          </div>
          <CardTitle className="text-2xl font-medium tracking-tight group flex items-center gap-2">
            {post.title}
            <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </CardTitle>
          {post.subtitle && <CardDescription className="text-base mt-1">{post.subtitle}</CardDescription>}
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
