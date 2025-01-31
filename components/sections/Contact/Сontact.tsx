import { Image } from "@heroui/react";

import { container } from "../../shared/primitives";

import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

import { IMAGES_ROOT_DIR } from "@/lib/constants";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="bg-default-200 py-10 lg:py-12">
        <div className={container({ tight: true })}>
          <div className="flex flex-col lg:flex-row gap-x-10 gap-y-3">
            <div className="hidden lg:block lg:w-1/4">
              <Image
                alt="Contact Banner"
                className="animate-block-in"
                classNames={{ wrapper: "bg-center bg-cover" }}
                fallbackSrc="/default-fallback-image.png"
                src={`${IMAGES_ROOT_DIR}contact-banner.jpg`}
              />
            </div>
            <div className="border-b-1 border-default-400 lg:border-b-0 pb-6 pb-lg-0 lg:w-1/2">
              <ContactForm />
            </div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};
