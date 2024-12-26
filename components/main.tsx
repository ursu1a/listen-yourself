import Image from "next/image";
import { Button } from "@nextui-org/button";

import { Achievements } from "./achievements";

import { title, subtitle, button } from "@/components/primitives";
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
    <section className="relative lg:py-2">
      <div className="flex items-center flex-col gap-y-4 lg:flex-row">
        <div className="lg:hidden -mt-[1.5rem]">{mainImage}</div>
        <div className="xl:pt-24 lg:w-1/2">
          <div className="flex flex-col gap-y-5 lg:gap-y-8 items-start lg:w-11/12">
            <h1 className={title({ size: "lg" })}>{siteConfig.main.title}</h1>
            <div>
              <p className={subtitle({ className: "font-light" })}>
                {siteConfig.main.text}
              </p>
            </div>
            <Button className={button({ size: "lg" })} color="primary">
              {siteConfig.main.contactUs}
            </Button>
          </div>
          <div className="w-full pt-2 mt-3 lg:mt-16">
            <Achievements />
          </div>
        </div>
        <div className="hidden lg:block lg:absolute-0 right-0 top-0 w-full lg:w-1/2 xl:-mt-16 xl:-ml-[6.5625rem]">
          {mainImage}
        </div>
      </div>
    </section>
  );
};
