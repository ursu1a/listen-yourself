import { Image, ImageProps } from "@heroui/react";

export const PostImage = (props: ImageProps) => {
  return (
    <Image
      {...props}
      classNames={{ wrapper: "bg-center bg-cover" }}
      fallbackSrc="/default-fallback-image.png"
      title={props.alt}
      width="100%"
    />
  );
};
