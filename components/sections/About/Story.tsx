import { Image } from "@heroui/react";

import { container, subtitle, title } from "@/components/shared/primitives";
import { siteConfig as strings } from "@/config/site";

export const Story = () => {
  return (
    <section className="relative w-full lg:h-[450px] bg-purple-200 bg-[url(/images/story.jpg)] lg:bg-none">
      <div className="lg:absolute z-10 inset-0">
        <div className={container({ className: "flex items-center h-full" })}>
          <div className="flex flex-col-reverse lg:flex-row gap-x-8 gap-y-3 lg:space-y-0 py-8">
            <div className="w-full lg:w-1/2 backdrop-blur-sm bg-white/40 py-6 px-6 space-y-3 text-slate-700">
              <h2 className={subtitle({ className: "text-secondary" })}>
                {strings.about.story.subtitle}
              </h2>
              <h3 className={title({ size: "sm" })}>
                {strings.about.story.title}
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: strings.about.story.text }}
                className="text-sm leading-6 flex flex-col space-y-3"
              />
            </div>
            <div className="w-full lg:w-1/2 backdrop-blur-sm bg-white/40 p-4 flex items-center justify-center">
              <Image
                alt="author"
                className="h-[300px]"
                radius="none"
                src="/images/face-1.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        removeWrapper
        alt="Hero banner"
        className="hidden lg:block z-0 w-full h-full object-cover"
        radius="none"
        src="/images/story.jpg"
      />
    </section>
  );
};
