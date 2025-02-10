import { Button, Image, Link } from "@heroui/react";

import { button, container, title } from "@/components/shared/primitives";
import { siteConfig as strings } from "@/config/site";

export const Banner = () => {
  return (
    <section className="relative w-full h-[400px] bg-slate-400">
      <div className="absolute z-10 inset-0">
        <div className={container({ className: "flex items-center h-full" })}>
          <div className="flex flex-col space-y-4 text-white text-center lg:text-start lg:w-1/2 lg:ml-auto py-4">
            <h1 className={title({ className: "lg:mb-4" })}>
              {strings.about.banner.title} 👋
            </h1>
            <p className="lg:text-lg lg:leading-8 text-shadow">
              {strings.about.banner.text}
            </p>
            <div>
              <Button
                as={Link}
                className={button({ size: "lg" })}
                color="secondary"
                href="/posts"
              >
                {strings.about.banner.read_blog}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Image
        removeWrapper
        alt="Hero banner"
        className="z-0 w-full h-full object-cover"
        radius="none"
        src="/images/wallpaper.jpg"
      />
    </section>
  );
};
