import { notFound } from "next/navigation";
import { Metadata } from "next";

import { PostDetails } from "@/components/blog/PostDetails";
import { getAllPosts, getPostBySlug, incrementViews } from "@/lib/posts";
import { IMAGES_ROOT_DIR } from "@/lib/constants";

type PostProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const metaImages = post?.featuredImage
    ? [{ url: `${IMAGES_ROOT_DIR}${post.featuredImage}` }]
    : [];

  return {
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      images: metaImages,
    },
    twitter: {
      images: metaImages,
    },
  };
}

// Static posts pages generation
export async function generateStaicParams() {
  const posts = await getAllPosts();

  return posts ? posts.map((post) => ({ slug: post.slug })) : "";
}

export default async function PostPage({ params }: PostProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }
  await incrementViews(slug);

  return <PostDetails post={post} />;
}
