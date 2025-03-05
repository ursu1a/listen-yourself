import { useMemo } from "react";
import { Link } from "@heroui/react";

import { SocialLinks } from "../ui/SocialLinks";

import { container, subtitle } from "@/components/shared/primitives";
import { siteConfig } from "@/config/site";
import { getCurrentYear } from "@/utils/functions";

export const Footer = () => {
  const servicesLinks = useMemo(
    () => [
      {
        title: "Individual Consultations",
        url: "/#contact",
      },
      {
        title: "Workshops",
        url: "/",
      },
      {
        title: "Online Courses",
        url: "/",
      },
      {
        title: "Resources",
        url: "/about",
      },
    ],
    [],
  );

  return (
    <footer>
      <div className="divide-y-1 divide-default-300 py-8 mt-16 lg:mt-32">
        <div className={container()}>
          <div className="flex flex-col lg:flex-row gap-x-6 gap-y-8 justify-center pb-5 lg:pb-8">
            <div className="lg:w-1/3">
              <p className={subtitle({ className: "font-semibold mb-4" })}>
                {siteConfig.footer.aboutTitle}
              </p>
              <p>{siteConfig.footer.aboutText}</p>
            </div>
            <div className="lg:w-1/3">
              <p className={subtitle({ className: "font-semibold mb-4" })}>
                {siteConfig.footer.services}
              </p>
              <ul className="flex flex-col gap-y-2">
                {servicesLinks.map((service, index) => (
                  <li key={`services-${index}`}>
                    <Link className="text-current" href={service.url}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/3">
              <p className={subtitle({ className: "font-semibold mb-4" })}>
                {siteConfig.footer.connect}
              </p>
              <SocialLinks isFooter />
            </div>
          </div>
        </div>
        <div className="pt-5 lg:pt-8 px-6">
          <p className="text-sm lg:text-lg text-center">
            <span>&copy; {getCurrentYear()}</span>{" "}
            <span>{siteConfig.footer.copyrights}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
