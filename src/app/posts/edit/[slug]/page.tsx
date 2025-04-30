"use client";

import { useParams } from "next/navigation";
import PostForm from "@/components/post-form";
import { getPostBySlug } from "@/lib/data";
import MainLayout from "@/components/layout/main-layout";

export default function EditPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <MainLayout>
        <div className="container py-12">Post not found</div>
      </MainLayout>
    );
  }

  return <PostForm post={post} isEditing />;
}
