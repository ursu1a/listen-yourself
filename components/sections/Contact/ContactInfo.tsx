import { subtitle } from "../../shared/primitives";

import { siteConfig } from "@/config/site";

export const ContactInfo = () => {
  return (
    <div className="lg:mt-10 text-sm">
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
