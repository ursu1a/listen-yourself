import Image from "next/image";
import { Button, Link } from "@heroui/react";

import { Achievements } from "@/components/sections/Main/Achievements";
import { title, button, container } from "@/components/shared/primitives";
import { siteConfig } from "@/config/site";
import Banner from "@/public/Banner.svg";

export const Main = () => {
  const mainImage = (
    <Image
      alt={siteConfig.main.altBanner}
      className="transform scale-25 animate-zoom-in"
      src={Banner}
    />
  );

  return (
    <section>
      <div className={container({ className: "relative lg:pt-8" })}>
        <div className="flex xl:items-center flex-col gap-y-4 lg:flex-row">
          <div className="lg:hidden -mt-[1.5rem]">{mainImage}</div>
          <div className="lg:w-1/2 xl:pt-24">
            <div className="flex flex-col gap-y-5 lg:gap-y-8 items-start lg:w-11/12">
              <h1 className={title({ size: "lg" })}>{siteConfig.main.title}</h1>
              <p className="font-light mb-4">{siteConfig.main.text}</p>
              <Button
                as={Link}
                className={button({ size: "xl" })}
                color="primary"
                href="#contact"
              >
                {siteConfig.main.contactUs}
              </Button>
            </div>
            <div className="w-full pt-2 mt-3 lg:mt-16">
              <Achievements />
            </div>
          </div>
          <div className="hidden lg:block lg:absolute-0 right-0 top-0 w-full lg:w-1/2 lg:-mt-12 xl:-mt-19 xl:-ml-[6.5625rem]">
            {mainImage}
          </div>
        </div>
      </div>
    </section>
  );
};
