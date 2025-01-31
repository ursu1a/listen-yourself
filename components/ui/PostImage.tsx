import { Image, ImageProps } from "@heroui/react";

import { IMAGES_ROOT_DIR } from "@/lib/constants";

export const PostImage = (props: ImageProps) => {
  return (
    <Image
      {...props}
      classNames={{ wrapper: "bg-center bg-cover" }}
      fallbackSrc={`${IMAGES_ROOT_DIR}default-fallback-image.png`}
      title={props.alt}
      width="100%"
    />
  );
};
