"use client";

import { useEffect } from "react";
import { Button } from "@heroui/react";

import { button, container } from "@/components/shared/primitives";
import { siteConfig as strings } from "@/config/site";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <>
      <title>{strings.common.errors.page_error}</title>
      <div className={container({ className: "pt-8 lg:pt-[100px]" })}>
        <div className="flex flex-col items-center gap-y-4 lg:gap-y-6">
          <p className="text-5xl lg:text-8xl font-bold text-default-500">500</p>
          <div className="text-center">
            <p className="text-lg text-default-500">
              {strings.common.errors.page_error}:
            </p>
            <p className="text-lg">{error.message}</p>
          </div>
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
