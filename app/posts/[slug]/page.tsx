import { notFound } from "next/navigation";
import { Metadata } from "next";

import { PostDetails } from "@/components/blog/PostDetails";
import { getPostBySlug, incrementViews } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      images: post?.featuredImage ? [{ url: post.featuredImage }] : [],
    },
    twitter: {
      images: post?.featuredImage ? [{ url: post.featuredImage }] : [],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }
  await incrementViews(slug);

  return <PostDetails post={post} />;
}
