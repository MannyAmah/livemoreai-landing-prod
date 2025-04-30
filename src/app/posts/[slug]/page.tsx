"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
// import { Edit, Trash2 } from "lucide-react";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
import ShareMenu from "@/components/share-menu";
import AudioPlayer from "@/components/audio-player";
import { ArrowLeft } from "lucide-react";
import MainLayout from "@/components/layout/main-layout";

export default function PostPage() {
  const params = useParams();
  // const router = useRouter();
  const slug = params.slug as string;
  console.log("Looking for post with slug:", slug);

  const post = getPostBySlug(slug);
  console.log("Post found:", post ? "Yes" : "No");

  if (!post) {
    return (
      <MainLayout>
        <div className="container max-w-4xl py-12">
          <h1 className="text-2xl font-medium mb-4">Post not found</h1>
          <p className="mb-4 text-muted-foreground">
            The post you&apos;re looking for could not be found. It may have
            been deleted or the URL might be incorrect.
          </p>
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  // const handleDelete = () => {
  //   deletePost(post.id);
  //   router.push("/");
  // };

  return (
    <MainLayout>
      <div className="container max-w-3xl py-12">
        {/* <div className="flex justify-between items-center mb-12">
        <Link href="/">
          <Button variant="outline" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </Link>
        <div className="flex gap-2">
          <Link href={`/posts/edit/${post.slug}`}>
            <Button variant="outline" size="sm" className="gap-1">
              <Edit className="h-4 w-4" />
              Edit
            </Button>
          </Link>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1 text-destructive">
                <Trash2 className="h-4 w-4" />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete this post.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div> */}

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

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-2xl mx-auto">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {post.subtitle}
            </p>
          )}
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
                {post.series && (
                  <h2 className="text-3xl md:text-4xl font-bold drop-shadow-md">
                    {post.series}
                  </h2>
                )}
                {post.episode && (
                  <div className="text-3xl md:text-4xl font-bold drop-shadow-md">
                    Ep {post.episode}
                  </div>
                )}
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

        <div
          className="prose prose-lg prose-neutral max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </MainLayout>
  );
}
