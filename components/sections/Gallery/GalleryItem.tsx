import { Card, CardFooter, Image } from "@heroui/react";
import Link from "next/link";

import { IGalleryItem } from "@/types";
import { IMAGES_ROOT_DIR } from "@/lib/constants";

export type GalleryItemProps = {
  item: IGalleryItem;
};

export const GalleryItem = ({ item }: GalleryItemProps) => {
  return (
    <Link passHref href={item.url}>
      <Card className="relative cursor-pointer group" radius="none" shadow="lg">
        <Image
          alt={item.alt}
          className="object-cover h-[150px] lg:h-[380px] transition-transform duration-300 group-hover:scale-105"
          classNames={{ wrapper: "bg-top bg-cover" }}
          fallbackSrc={`${IMAGES_ROOT_DIR}default-fallback-image.png`}
          radius="none"
          src={`${IMAGES_ROOT_DIR}${item.image}`}
          width="100%"
        />
        <CardFooter className="absolute text-center bottom-0 w-full h-2/3 z-10 flex flex-col justify-end items-center text-white pb-3 lg:pb-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <div className="line-clamp-1">
            <p className="text-sm lg:text-2xl lg:uppercase font-semibold leading-9">
              {item.title}
            </p>
          </div>
          <div className="line-clamp-1">
            <p className="hidden lg:block text-sm lg:text-lg leading-snug">
              {item.subtitle}
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
