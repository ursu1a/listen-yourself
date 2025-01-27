import { Metadata } from "next";

import { PostsList } from "@/components/blog/PostsList";
import { getAllPosts } from "@/lib/posts";
import { siteConfig as strings } from "@/config/site";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: strings.blog.root,
    description: strings.blog.description,
  };
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  if (!posts || posts.length === 0) {
    throw new Error(strings.blog.no_posts_found);
  }

  return <PostsList posts={posts} />;
}
