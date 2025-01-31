import { container, title } from "../shared/primitives";
import { PostImage } from "../ui/PostImage";
import { PostBreadcrumbs } from "../ui/PostBreadcrumbs";
import { ReadTime } from "../ui/ReadTime";
import { CalendarIcon, ViewIcon } from "../shared/icons";

import { IPost } from "@/types";
import { siteConfig as strings } from "@/config/site";
import { formatDate } from "@/utils/functions";
import { IMAGES_ROOT_DIR } from "@/lib/constants";

export type PostDetailsProps = {
  post: IPost;
};
export const PostDetails = async ({ post }: PostDetailsProps) => {
  const postHeader = (post: IPost) => (
    <div className="my-4 lg:my-5">
      <div className="mb-2 lg:mb-4 text-center">
        <h1 className={title({ size: "sm" })}>{post.title}</h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-x-3 gap-y-2 lg:gap-x-5 text-default-500">
        <ReadTime time={post.readTime} />
        <div className="flex items-center gap-x-1">
          <CalendarIcon size={20} />
          <span className="text-small">
            {strings.blog.publishedOn} {formatDate(post.date)}
          </span>
        </div>
        <div className="flex items-center gap-x-1">
          <ViewIcon size={20} />
          <span className="text-small">
            {post.views} {strings.blog.reads}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={container({ className: "pt-2 lg:pt-10 max-w-4xl mx-auto" })}
    >
      <PostBreadcrumbs current={post.title} />
      <article>
        <PostImage
          alt={post.title}
          className="w-full h-[150px] lg:h-[300px] object-cover"
          radius="sm"
          shadow="sm"
          src={`${IMAGES_ROOT_DIR}${post.featuredImage}`}
        />
        {postHeader(post)}
        <div
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
          className="prose prose-gray dark:prose-invert post-content mx-auto pt-3 lg:pt-5 prose-headings:mb-2 prose-headings:font-medium"
        />
      </article>
    </div>
  );
};
