import { title } from "../shared/primitives";

import { siteConfig as strings } from "@/config/site";

export const PostsHeader = () => {
  return (
    <div className="text-center mb-5 lg:mb-8 bg-primary dark:bg-default-100 pt-5 pb-3 lg:py-6">
      <div className="mb-1 lg:mb-2">
        <h1 className={title()}>{strings.blog.title}</h1>
      </div>
      <h2>{strings.blog.description}</h2>
    </div>
  );
};
