import { useMemo } from "react";
import { Link } from "@heroui/react";
import clsx from "clsx";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../shared/icons";

import { siteConfig } from "@/config/site";

export const SocialLinks = ({ isFooter = false }: { isFooter?: boolean }) => {
  const socialLinks = useMemo(
    () => [
      {
        icon: FacebookIcon,
        label: "Facebook",
        url: siteConfig.links.facebook,
      },
      {
        icon: TwitterIcon,
        label: "Twitter",
        url: siteConfig.links.twitter,
      },
      {
        icon: LinkedinIcon,
        label: "LinkedIn",
        url: siteConfig.links.linkedin,
      },
      {
        icon: InstagramIcon,
        label: "Insagram",
        url: siteConfig.links.instagram,
      },
    ],
    [],
  );

  return (
    <ul className="flex items-center gap-x-6">
      {socialLinks.map(({ icon: Icon, url, label }) => (
        <li key={label}>
          <Link aria-label={label} className="py-1 text-default-400" href={url}>
            <Icon
              className={clsx(
                isFooter ? "text-default-400" : "text-foreground",
              )}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
