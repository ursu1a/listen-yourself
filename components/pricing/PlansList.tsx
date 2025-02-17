"use client";
import { useState } from "react";
import { useDisclosure } from "@heroui/react";

import { container } from "../shared/primitives";

import { PlansItem } from "./PlansItem";
import { UserForm } from "./UserForm";

import { IPlan } from "@/types";

type PlansListProps = {
  items: IPlan[];
};

export const PlansList = ({ items }: PlansListProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [selectedPlan, setSelectedPlan] = useState<IPlan | null>();

  const onSelectPlan = (plan: IPlan) => {
    setSelectedPlan(plan);
    onOpen();
  };

  return (
    <>
      <div className={container({ tight: true })}>
        <div className="grid lg:grid-cols-4 gap-4 lg:gap-3">
          {items.map((plan) => (
            <PlansItem key={plan.id} item={plan} onSelect={onSelectPlan} />
          ))}
        </div>
      </div>
      {selectedPlan && (
        <UserForm open={isOpen} plan={selectedPlan} onClose={onOpenChange} />
      )}
    </>
  );
};
