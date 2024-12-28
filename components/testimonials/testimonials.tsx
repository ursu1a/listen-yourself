import { useMemo } from "react";

import { Testimonial } from "./testimonial";

import { ITestimonial } from "@/types";

export const Testimonials = () => {
  const items: ITestimonial[] = useMemo(
    () => [
      {
        name: "Rober Frederic",
        image: "/portrait.webp",
        content:
          "Lorem Ipsum dolor sit amet consectetur adip eu fugiat nulla pariatur eu fugiat nulla",
        rating: 5,
      },
      {
        name: "Victory Story",
        image: "/face-1.jpg",
        content: "Testimonial content",
        rating: 4.5,
      },
      {
        name: "Roger Digest",
        image: "/portrait.webp",
        content:
          "Lorem Ipsum dolor sit amet consectetur adip eu fugiat nulla pari pari fugiat nulla content content content content content content content content content content content content content content content content",
        rating: 5,
      },
    ],
    [],
  );

  return (
    <section className="px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-stretch lg:flex-row gap-y-6 gap-x-10">
        {items.map((item, index) => (
          <Testimonial key={index} className="lg:w-1/3" item={item} />
        ))}
      </div>
    </section>
  );
};
