"use client";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import clsx from "clsx";
import ReactStars from "react-stars";

import { button } from "@/components/primitives";
import { ITestimonial } from "@/types/index";
import { siteConfig } from "@/config/site";

type TestimonialProps = {
  item: ITestimonial;
  className: string;
};

export const Testimonial = ({ item, className }: TestimonialProps) => {
  return (
    <div className={clsx(className, "flex flex-col relative")}>
      <div className="-mb-20 z-10 mx-auto">
        <Image
          alt={item.name}
          classNames={{
            wrapper:
              "ring-4 lg:ring-8 ring-white bg-slate-300 dark:bg-default-100",
            img: "testimonial-image object-cover",
          }}
          radius="md"
          shadow="lg"
          src={item.image}
          width="100%"
        />
      </div>
      <div className="flex-1 shadow-xl bg-slate-300 dark:bg-default-100 px-4 lg:px-5 pt-28 lg:pt-32 pb-4 lg:pb-10 rounded-lg flex flex-col text-center">
        <div className="flex-1">
          <p className="text-sm lg:text-lg leading-relaxed line-clamp-3">
            {item.content}
          </p>
        </div>
        <div className="mx-auto min-h-16">
          <ReactStars
            half
            color1="#ffffff"
            color2="#FFDE81"
            edit={false}
            size={40}
            value={item.rating}
          />
        </div>
        <div className="w-1/2 lg:w-3/4 mx-auto">
          <Button
            className={button({ className: "w-full font-semibold" })}
            color="secondary"
          >
            {siteConfig.common.actions.viewMore}
          </Button>
        </div>
      </div>
    </div>
  );
};
