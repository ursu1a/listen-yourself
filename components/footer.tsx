import { useMemo } from "react";
import { Link } from "@nextui-org/link";
import { subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { getCurrentYear } from "@/utils/functions";
import { FBIcon, InIcon, InstIcon, TwIcon } from "./icons";

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
    []
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
    []
  );

  return (
    <footer className="w-full flex justify-center py-8 mt-10 lg:mt-20">
      <div className="container divide-y-1 divide-default-300 max-w-8xl px-6 pb-8">
        <div className="flex flex-col lg:flex-row gap-x-6 gap-y-8 justify-center pb-8">
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
                  href={service.url}
                  className="text-current"
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
              {socialLinks.map(({icon: Icon, url}, index) => (
                <Link key={`${url}-${index}`} href={url} className="py-1">
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8">
          <p className="text-lg text-center">
            <span>&copy; {getCurrentYear()}</span>{" "}
            <span>{siteConfig.footer.copyrights}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
