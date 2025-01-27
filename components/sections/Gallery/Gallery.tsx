import { useMemo } from "react";

import { GalleryItem } from "./GalleryItem";

import { container } from "@/components/shared/primitives";
import { IGalleryItem } from "@/types";

export const Gallery = () => {
  const items: IGalleryItem[] = useMemo(
    () => [
      {
        image: "default-image.jpg",
        title: "Gallery Item 1",
        subtitle: "Description of Gallery Item 1",
        alt: "Gallery Item 1",
        url: "#",
      },
      {
        image: "default-image.jpg",
        title: "Gallery Item 2",
        subtitle: "Description of Gallery Item 2",
        alt: "Gallery Item 1",
        url: "#",
      },
      {
        image: "default-image.jpg",
        title: "Gallery Item 3",
        subtitle: "Description of Gallery Item 3",
        alt: "Gallery Item 1",
        url: "#",
      },
      {
        image: "default-image.jpg",
        title: "Gallery Item 4",
        subtitle: "Description of Gallery Item",
        alt: "Gallery Item 1",
        url: "#",
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
