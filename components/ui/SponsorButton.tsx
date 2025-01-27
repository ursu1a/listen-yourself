import { Button, Link } from "@heroui/react";

import { HeartFilledIcon } from "../shared/icons";

import { siteConfig as strings } from "@/config/site";

export const SponsorButton = () => {
  return (
    <Button
      isExternal
      as={Link}
      className="text-sm font-normal text-default-600 bg-default-100"
      href={strings.links.sponsor}
      startContent={<HeartFilledIcon className="text-danger" />}
      variant="flat"
    >
      {strings.common.header.sponsor}
    </Button>
  );
};
