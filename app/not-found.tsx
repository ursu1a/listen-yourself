import { Button } from "@heroui/react";

import { button, container } from "@/components/shared/primitives";
import { siteConfig as strings } from "@/config/site";

export default function NotFoundPage() {
  return (
    <>
      <title>{strings.common.errors.page_not_found}</title>
      <div className={container({ className: "pt-8 lg:pt-[100px]" })}>
        <div className="flex flex-col items-center gap-y-4 lg:gap-y-6">
          <p className="text-5xl lg:text-8xl font-bold text-default-500">404</p>
          <p className="text-lg">{strings.common.errors.page_not_found}</p>
          <Button
            as="a"
            className={button({ size: "lg" })}
            color="primary"
            href="/"
          >
            {strings.common.back_home}
          </Button>
        </div>
      </div>
    </>
  );
}
