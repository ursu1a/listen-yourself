import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

import { button, container, subtitle, title } from "./primitives";

import { siteConfig } from "@/config/site";

const ContactForm = () => {
  return (
    <div className="lg:mt-5">
      <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8">
        <p className={title({ size: "sm" })}>{siteConfig.contact.title}</p>
        <Input
          placeholder={siteConfig.contact.emailPlaceholder}
          size="lg"
          variant="faded"
        />
        <Button className={button({ size: "lg" })} color="secondary">
          {siteConfig.contact.requestBtn}
        </Button>
      </div>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="lg:mt-10">
      <p
        className={subtitle({
          className: "font-bold mb-3 lg:mb-4 text-center lg:text-start",
        })}
      >
        {siteConfig.contact.contactMe}
      </p>
      <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3">
        <div className="contents">
          <span>{siteConfig.contact.phone}:</span>
          <span>()</span>
        </div>
        <div className="contents">
          <span>{siteConfig.contact.email}:</span>
          <span>email@domain.com</span>
        </div>
        <div className="contents">
          <span>{siteConfig.contact.location}:</span>
          <span>Address</span>
        </div>
      </div>
    </div>
  );
};

export const GetContact = () => {
  return (
    <section>
      <div className="bg-default-200 py-10 lg:py-12">
        <div className={container({ tight: true })}>
          <div className="grid lg:grid-cols-3 items-start gap-x-8 gap-y-8">
            <div className="hidden lg:block">
              <Image alt="Contact Banner" src="/contact-banner.jpg" />
            </div>
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};
