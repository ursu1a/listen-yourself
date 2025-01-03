import { useMemo } from "react";

import { container } from "../primitives";

import { GalleryItem } from "./galleryItem";

import { IGalleryItem } from "@/types";

export const Gallery = () => {
  const items: IGalleryItem[] = useMemo(
    () => [
      {
        image: "gallery-1.jpg",
        title: "Gallery Item 1",
        subtitle: "Description of Gallery Item 1",
        alt: "Gallery Item 1",
        url: "/gallery/item-1",
      },
      {
        image: "gallery-2.jpg",
        title: "Gallery Item 2",
        subtitle: "Description of Gallery Item 2",
        alt: "Gallery Item 1",
        url: "/gallery/item-1",
      },
      {
        image: "gallery-3.jpg",
        title: "Gallery Item 3",
        subtitle: "Description of Gallery Item 3",
        alt: "Gallery Item 1",
        url: "/gallery/item-1",
      },
      {
        image: "gallery-4.jpg",
        title: "Gallery Item 4",
        subtitle: "Description of Gallery Item 4",
        alt: "Gallery Item 1",
        url: "/gallery/item-1",
      },
    ],
    [],
  );

  return (
    <section>
      <div className={container()}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
          {items.map((item, index) => (
            <GalleryItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
