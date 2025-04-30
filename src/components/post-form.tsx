"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { type Post, addPost, updatePost } from "@/lib/data"
import Link from "next/link"
import { ArrowLeft, Eye, Pencil } from "lucide-react"
import TiptapEditor from "./editor/tiptap-editor"
import CoverImageSelector from "./editor/cover-image-selector"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PostPreview from "./post-preview"

interface PostFormProps {
  post?: Post
  isEditing?: boolean
}

export default function PostForm({ post, isEditing = false }: PostFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: post?.title || "",
    subtitle: post?.subtitle || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    coverImage: post?.coverImage || "",
    date: post?.date || new Date().toISOString(),
    author: post?.author || "",
    duration: post?.duration || "",
    series: post?.series || "",
    episode: post?.episode || "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleEditorChange = (content: string) => {
    setFormData((prev) => ({ ...prev, content }))
  }

  const handleCoverImageChange = (url: string) => {
    setFormData((prev) => ({ ...prev, coverImage: url }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Form submitted with data:", formData)

    // Ensure all required fields are filled
    if (!formData.title.trim() || !formData.excerpt.trim() || !formData.content.trim()) {
      alert("Please fill in all required fields")
      return
    }

    if (isEditing && post) {
      updatePost(post.id, {
        ...formData,
      })
      router.push(`/posts/${post.slug}`)
    } else {
      // Create a new post with the form data
      const newPostSlug = addPost({
        ...formData,
        date: new Date().toISOString(),
      })
      console.log("Created new post with slug:", newPostSlug)

      // Use router.refresh() to ensure data is updated before navigation
      router.refresh()

      // Navigate to the new post using the slug
      router.push(`/posts/${newPostSlug}`)
    }
  }

  // Create a preview post object that represents the current state
  const previewPost: Post = {
    id: post?.id || "preview",
    slug: post?.slug || "preview-post",
    title: formData.title || "Untitled Post",
    subtitle: formData.subtitle || "",
    excerpt: formData.excerpt || "",
    content: formData.content || "",
    date: formData.date,
    coverImage: formData.coverImage,
    author: formData.author || "",
    duration: formData.duration || "",
    series: formData.series || "",
    episode: formData.episode || "",
  }

  return (
    <div className="container max-w-4xl py-12">
      <Link href={isEditing && post ? `/posts/${post.slug}` : "/"}>
        <Button variant="outline" size="sm" className="gap-1 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </Link>

      <h1 className="text-3xl font-medium tracking-tight mb-8">{isEditing ? "Edit Post" : "Create New Post"}</h1>

      <Tabs defaultValue="edit" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="edit" className="flex items-center gap-2">
            <Pencil className="h-4 w-4" />
            Edit
          </TabsTrigger>
          <TabsTrigger value="preview" className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Preview
          </TabsTrigger>
        </TabsList>

        <TabsContent value="edit">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subtitle">Subtitle</Label>
              <Input
                id="subtitle"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
                className="text-lg"
                placeholder="Optional subtitle or description"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                required
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Optional author name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (e.g., &quot;4:30&quot;)</Label>
                <Input
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="Optional reading time"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="series">Series Name</Label>
                <Input
                  id="series"
                  name="series"
                  value={formData.series}
                  onChange={handleChange}
                  placeholder="Optional series name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="episode">Episode Number</Label>
                <Input
                  id="episode"
                  name="episode"
                  value={formData.episode}
                  onChange={handleChange}
                  placeholder="Optional episode number"
                />
              </div>
            </div>

            <CoverImageSelector value={formData.coverImage} onChange={handleCoverImageChange} />

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <TiptapEditor content={formData.content} onChange={handleEditorChange} />
            </div>

            <div className="flex justify-end">
              <Button type="submit" className="px-8">
                {isEditing ? "Update" : "Publish"}
              </Button>
            </div>
          </form>
        </TabsContent>

        <TabsContent value="preview" className="relative">
          <div className="absolute top-4 right-4 z-10">
            <Button type="button" onClick={handleSubmit} className="px-8">
              {isEditing ? "Update" : "Publish"}
            </Button>
          </div>
          <PostPreview post={previewPost} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
