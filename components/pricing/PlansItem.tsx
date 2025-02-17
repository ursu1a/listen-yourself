import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";

import { button, subtitle, title } from "../shared/primitives";

import { IPlan } from "@/types";
import { siteConfig as strings } from "@/config/site";

type PlanProps = {
  item: IPlan;
  onSelect: (p: IPlan) => void;
};
export const PlansItem = ({ item, onSelect }: PlanProps) => {
  const formatPricing = (item: IPlan) => (
    <div className="flex items-end justify-center">
      <span
        className={title({
          size: "sm",
          className: "font-thin text-slate-500 dark:text-default-foreground",
        })}
      >
        ${item.cost}
      </span>
      {item?.period && (
        <span className="text-lg text-default-500 pl-1">{`/ ${item.period}`}</span>
      )}
    </div>
  );

  return (
    <Card
      isHoverable
      classNames={{
        base: "dark:bg-default-100",
        header: "pt-6 lg:pt-8 pb-3 lg:pb-5 px-0",
        body: "lg:px-6",
        footer: "lg:py-8 py-4 px-4",
      }}
      radius="sm"
      shadow="md"
    >
      <CardHeader className="text-center block relative">
        <div className="h-[6px] w-full bg-default-500 -translate-y-6 lg:-translate-y-8" />
        <p className={subtitle({ className: "text-default-500 uppercase" })}>
          {item.name}
        </p>
        {item?.popular && (
          <span className="px-8 py-0.5 bg-primary text-primary-foreground rounded-sm text-xs uppercase absolute top-0 right-0 rotate-45 translate-y-6 translate-x-7">
            {strings.pricing.popular}
          </span>
        )}
      </CardHeader>
      <CardBody>
        <p className="text-sm font-light text-center">{item.description}</p>
      </CardBody>
      <CardFooter>
        <div className="flex flex-grow flex-col items-center gap-y-3 lg:gap-y-5">
          {formatPricing(item)}
          <div className="w-full lg:px-5">
            <Button
              className={button({ className: "w-full font-semibold" })}
              color="secondary"
              onPress={() => onSelect(item)}
            >
              {strings.pricing.choose}
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
