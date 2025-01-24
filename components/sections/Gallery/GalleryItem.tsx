import { Card, CardFooter } from "@heroui/react";
import { Image } from "@heroui/react";
import Link from "next/link";

import { IGalleryItem } from "@/types";

export type GalleryItemProps = {
  item: IGalleryItem;
};

export const GalleryItem = ({ item }: GalleryItemProps) => {
  return (
    <Link passHref href={item.url}>
      <Card className="relative cursor-pointer group" radius="none" shadow="lg">
        <Image
          alt={item.alt}
          className="gallery-item h-96 object-cover transition-transform duration-300 group-hover:scale-105"
          radius="none"
          src={item.image}
          width="100%"
        />
        <CardFooter className="absolute bottom-0 w-full h-2/3 z-10 flex flex-col justify-end items-center text-white pb-3 lg:pb-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <p className="text-sm lg:text-2xl lg:uppercase font-semibold leading-9 line-clamp-1">
            {item.title}
          </p>
          <p className="hidden lg:block text-sm lg:text-lg leading-snug line-clamp-1">
            {item.subtitle}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};
