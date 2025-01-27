import { Card, CardBody, CardFooter } from "@heroui/react";

import { subtitle } from "../shared/primitives";
import { PostImage } from "../ui/PostImage";
import { ReadTime } from "../ui/ReadTime";

import { IPost } from "@/types";

export type PostCardProps = {
  item: IPost;
};

export const PostCard = ({ item }: PostCardProps) => {
  return (
    <Card
      className="flex flex-col h-full dark:bg-default-100"
      radius="sm"
      shadow="md"
    >
      <PostImage
        isZoomed
        alt={item?.title}
        className="w-full object-cover h-[160px]"
        radius="none"
        shadow="sm"
        src={item?.featuredImage}
      />
      <CardBody className="flex-grow block pt-4 px-4 pb-0">
        <h3
          className={subtitle({
            className: "mb-2 font-semibold line-clamp-1 text-default-700",
          })}
        >
          {item.title}
        </h3>
        <h4 className="text-base/5 font-light line-clamp-2">{item.excerpt}</h4>
      </CardBody>
      <CardFooter className="px-4 pt-4 pb-4">
        <ReadTime time={item.readTime} />
      </CardFooter>
    </Card>
  );
};
