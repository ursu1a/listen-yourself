import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { button, title } from "@/components/shared/primitives";

import { siteConfig } from "@/config/site";

export const ContactForm = () => {
  return (
    <div className="lg:mt-5">
      <div className="flex flex-col items-start gap-y-3">
        <h2 className={title({ size: "sm", className: "mb-2" })}>
          {siteConfig.contact.title}
        </h2>
        <Input
          placeholder={siteConfig.contact.placeholders.name}
          size="lg"
          variant="faded"
        />
        <Input
          placeholder={siteConfig.contact.placeholders.email}
          size="lg"
          variant="faded"
        />
        <Textarea
          maxRows={8}
          minRows={4}
          placeholder={siteConfig.contact.placeholders.message}
          size="lg"
          variant="faded"
        />
        <Button className={button({ size: "lg" })} color="primary">
          {siteConfig.contact.requestBtn}
        </Button>
      </div>
    </div>
  );
};
