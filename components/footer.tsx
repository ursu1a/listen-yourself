import { useMemo } from "react";
import { Link } from "@nextui-org/link";

import { FBIcon, InIcon, InstIcon, TwIcon } from "@/components/icons";
import { subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { getCurrentYear } from "@/utils/functions";

export const Footer = () => {
  const servicesLinks = useMemo(
    () => [
      {
        title: "Individual Consultations",
        url: "/",
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
        url: "/",
      },
    ],
    [],
  );

  const socialLinks = useMemo(
    () => [
      {
        icon: FBIcon,
        url: "/",
      },
      {
        icon: TwIcon,
        url: "/",
      },
      {
        icon: InIcon,
        url: "/",
      },
      {
        icon: InstIcon,
        url: "/",
      },
    ],
    [],
  );

  return (
    <footer className="w-full flex justify-center py-8 mt-10 lg:mt-20">
      <div className="divide-y-1 divide-default-300 w-full">
        <div className="container mx-auto max-w-8xl px-6 flex flex-col lg:flex-row gap-x-6 gap-y-8 justify-center pb-5 lg:pb-8">
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
            <div className="grid grid-cols-1 gap-y-2">
              {servicesLinks.map((service, index) => (
                <Link
                  key={`${service.url}-${index}`}
                  className="text-current"
                  href={service.url}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3">
            <p className={subtitle({ className: "font-semibold mb-4" })}>
              {siteConfig.footer.connect}
            </p>
            <div className="flex items-center gap-x-6">
              {socialLinks.map(({ icon: Icon, url }, index) => (
                <Link key={`${url}-${index}`} className="py-1" href={url}>
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-5 lg:pt-8 px-6 lg:pb-8">
          <p className="text-sm lg:text-lg text-center">
            <span>&copy; {getCurrentYear()}</span>{" "}
            <span>{siteConfig.footer.copyrights}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
