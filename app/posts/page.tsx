import { Metadata } from "next";
import { Suspense } from "react";

import { PostsSkeleton } from "@/components/blog/PostsSkeleton";
import { PostsList } from "@/components/blog/PostsList";
import { getAllPosts } from "@/lib/posts";
import { siteConfig as strings } from "@/config/site";
import { PostsHeader } from "@/components/blog/PostsHeader";
import { container } from "@/components/shared/primitives";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: strings.blog.root,
    description: strings.blog.description,
  };
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  if (!posts) {
    throw new Error(strings.blog.no_posts_found);
  }

  return (
    <>
      <PostsHeader />
      <div className={container()}>
        {posts?.length === 0 ? (
          <p className="text-center">{strings.blog.no_posts_found}</p>
        ) : (
          <Suspense fallback={<PostsSkeleton />}>
            <PostsList posts={posts} />
          </Suspense>
        )}
      </div>
    </>
  );
}
