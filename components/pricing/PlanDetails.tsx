"use client";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Tooltip,
} from "@heroui/react";

import { InfoIcon } from "../shared/icons";

import { IPlan } from "@/types";
import { siteConfig as strings } from "@/config/site";

export const PlanDetails = ({ plan }: { plan: IPlan }) => {
  const [tooltipIsOpened, setTooltipIsOpened] = useState(false);

  return (
    <Card
      classNames={{
        base: "flex-1 dark:bg-default-200",
        header: "pt-5 px-4",
        body: "pb-5 px-4",
      }}
      radius="sm"
    >
      <CardHeader>{strings.pricing.form.selectedPlanLabel}</CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-2 gap-y-2 gap-x-1">
          <div className="flex gap-2">
            <span className="text-xl font-semibold">{plan.name}</span>
            <Tooltip
              classNames={{ base: "w-72", content: "p-3" }}
              content={plan.description}
              isOpen={tooltipIsOpened}
              offset={0}
              placement="bottom"
              radius="sm"
            >
              <Button
                disableAnimation
                isIconOnly
                className="p-1.5 -mx-2.5 -my-1.5 rounded-full"
                variant="light"
                onPress={() => setTooltipIsOpened(!tooltipIsOpened)}
              >
                <InfoIcon size={18} />
              </Button>
            </Tooltip>
          </div>
          <div className="text-end">
            <p className="text-3xl font-semibold tracking-wider text-default-600">
              ${plan.cost}
            </p>
            {plan?.period && (
              <p className="text-sm text-default-500">{`(${plan.period})`}</p>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
