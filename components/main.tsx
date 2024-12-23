import Image from "next/image";
import { Button } from "@nextui-org/button";

import { Achievements } from "./achievements";

import { title, subtitle, button } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import Banner from "@/public/Banner.svg";

export const Main = () => {
  return (
    <section className="relative py-2">
      <div className="flex items-center flex-col gap-y-4 lg:flex-row lg:mt-[180px]">
        <div className="lg:pt-20 lg:w-6/12">
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
          <div className="w-full pt-2 mt-6 lg:mt-16">
            <Achievements />
          </div>
        </div>
        <div className="lg:absolute-0 right-0 top-0 w-full lg:w-7/12 lg:-mt-[220px] lg:-ml-[114px]">
          <Image
            alt={siteConfig.main.altBanner}
            className="transform scale-25 animate-zoom-in"
            src={Banner}
          />
        </div>
      </div>
    </section>
  );
};
