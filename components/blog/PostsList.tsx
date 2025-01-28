import Link from "next/link";

import { IPost } from "../../types/index";

import { PostCard } from "./PostCard";

export type PostsListProps = {
  posts: IPost[] | [];
};

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-y-5 gap-4">
      {posts.map((post) => (
        <li key={post?.slug}>
          <Link href={`/posts/${post?.slug}`}>
            <PostCard item={post} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
