import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import MainLayout from "@/components/layout/main-layout";
import { PenLine, Sparkles } from "lucide-react";

export default function HomePage() {
  const allPosts = getPosts();
  const hasPosts = allPosts && allPosts.length > 0;

  const featuredPost = allPosts[0];
  const remainingPosts = allPosts.slice(1);

  return (
    <MainLayout>
      <div className="container max-w-6xl py-12">
        {/* No posts state */}
        {!hasPosts && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="relative mb-8 rounded-full bg-gradient-to-br from-muted/80 to-muted p-8 shadow-md animate-fade-in">
              <div className="absolute inset-0 rounded-full bg-background/50 backdrop-blur-sm animate-pulse-slow"></div>
              <PenLine className="relative h-16 w-16 text-primary animate-float" />
              <div className="absolute -right-2 -top-2">
                <Sparkles className="h-6 w-6 text-primary/70 animate-sparkle" />
              </div>
            </div>
            <h2
              className="mb-3 text-3xl font-bold tracking-tight animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              No articles yet
            </h2>
            <p
              className="mb-10 max-w-md text-muted-foreground animate-slide-up"
              style={{ animationDelay: "300ms" }}
            >
              We&apos;re working on amazing content for you. Check back soon or
              subscribe to be notified when new articles are published.
            </p>
            <div
              className="animate-slide-up"
              style={{ animationDelay: "400ms" }}
            ></div>

            {/* Decorative elements */}
            <div className="pointer-events-none absolute left-1/4 top-1/3 h-32 w-32 rounded-full bg-primary/5 blur-3xl animate-blob"></div>
            <div className="pointer-events-none absolute right-1/4 top-2/3 h-32 w-32 rounded-full bg-primary/5 blur-3xl animate-blob animation-delay-2000"></div>
          </div>
        )}

        {/* Featured post section */}
        {featuredPost && (
          <div className="mb-20">
            <Link href={`/posts/${featuredPost.slug}`} className="group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src={
                      featuredPost.coverImage ||
                      "/placeholder.svg?height=600&width=800"
                    }
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {(featuredPost.series || featuredPost.episode) && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                      <div className="flex justify-between items-center">
                        {featuredPost.series && (
                          <div className="text-sm font-medium">
                            {featuredPost.series}
                          </div>
                        )}
                        {featuredPost.episode && (
                          <div className="text-sm font-medium">
                            Ep {featuredPost.episode}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{formatDate(featuredPost.date)}</span>
                    {featuredPost.author && (
                      <>
                        <span>•</span>
                        <span>{featuredPost.author}</span>
                      </>
                    )}
                    {featuredPost.duration && (
                      <>
                        <span>•</span>
                        <span>{featuredPost.duration}</span>
                      </>
                    )}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight group-hover:underline decoration-2 underline-offset-4 transition-all">
                    {featuredPost.title}
                  </h2>
                  {featuredPost.subtitle && (
                    <p className="text-lg text-muted-foreground">
                      {featuredPost.subtitle}
                    </p>
                  )}
                  <p className="text-muted-foreground line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="pt-2">
                    <span className="text-sm font-medium inline-flex items-center group-hover:underline">
                      Read article
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Section divider */}
        {remainingPosts.length > 0 && (
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-4 text-sm text-muted-foreground">
                Recent Articles
              </span>
            </div>
          </div>
        )}

        {/* Grid of remaining posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingPosts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.slug}`}
              className="group flex flex-col h-full"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg mb-4">
                <Image
                  src={
                    post.coverImage || "/placeholder.svg?height=400&width=600"
                  }
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {(post.series || post.episode) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                    <div className="flex justify-between items-center">
                      {post.series && (
                        <div className="text-xs font-medium">{post.series}</div>
                      )}
                      {post.episode && (
                        <div className="text-xs font-medium">
                          Ep {post.episode}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
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
                <h3 className="text-xl font-semibold mb-2 group-hover:underline decoration-1 underline-offset-2 transition-all">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <span className="text-xs font-medium inline-flex items-center group-hover:underline">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 h-3 w-3"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
