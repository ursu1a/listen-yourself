import Link from "next/link";

import { IPost } from "../../types/index";
import { container, title } from "../shared/primitives";

import { PostCard } from "./PostCard";

import { siteConfig as strings } from "@/config/site";

export type PostsListProps = {
  posts: IPost[] | [];
};

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <>
      <div className="text-center mb-5 lg:mb-8 bg-primary dark:bg-default-100 pt-5 pb-3 lg:py-6">
        <div className="mb-1 lg:mb-2">
          <h1 className={title()}>{strings.blog.title}</h1>
        </div>
        <h2>{strings.blog.description}</h2>
      </div>
      <div className={container()}>
        {posts?.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-y-5 gap-4">
            {posts.map((post) => (
              <li key={post?.slug}>
                <Link href={`/posts/${post?.slug}`}>
                  <PostCard item={post} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center">{strings.blog.no_posts_found}</p>
        )}
      </div>
    </>
  );
};
