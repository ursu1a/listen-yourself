"use client";
import { useEffect, useState, useMemo } from "react";
import {
  Button,
  DatePicker,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { formatISO } from "date-fns";
import { useSnackbar } from "notistack";

import { PlanDetails } from "./PlanDetails";

import { siteConfig as strings } from "@/config/site";
import { IPlan } from "@/types";
import { usePricingForm } from "@/hooks/usePricingForm";
import { getErrorMessage } from "@/utils/functions";
import { useIsMobile } from "@/hooks/useIsMobile";

type UserFormProps = {
  open: boolean;
  plan: IPlan;
  onClose: () => void;
};

export const UserForm = ({ open, plan, onClose }: UserFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    doSubmit,
    errors,
    checkDateUnavailable,
    googleApi,
    loading,
    sendEmailConfirmation,
    validateDateTime,
  } = usePricingForm();

  const { validators } = strings.pricing.form;
  const [isUserSubmitted, setIsUserSubmitted] = useState(false);
  const [date, setDate] = useState<any>();
  const isMobile = useIsMobile();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    reset();
    setDate(null);
    setIsUserSubmitted(false);
  }, [open, plan.id]);

  const dateError = useMemo(() => validateDateTime(date), [date]);

  const onNextClick = async () => {
    const result = await googleApi.signInWithGoogle();

    if (result.success) {
      setIsUserSubmitted(true);
    }
    enqueueSnackbar(result.message, {
      variant: result.success ? "success" : "error",
    });
  };

  const onSubmit = async () => {
    if (!date) return;

    setValue("planId", plan.id);
    setValue("dateTime", formatISO(date.toDate()));
    const result = await doSubmit();

    enqueueSnackbar(result.message, {
      variant: result.success ? "success" : "error",
    });

    if (result.success) {
      onClose();
      await doSendEmail();
    }
  };

  const doSendEmail = async () => {
    const userData = getValues();
    const link = await googleApi.createGoogleCalendarEvent(userData, plan);

    const result = await sendEmailConfirmation(userData, plan, link);

    enqueueSnackbar(result.message, {
      variant: result.success ? "success" : "error",
    });
  };

  return (
    <Modal
      hideCloseButton
      classNames={{
        base: "dark:bg-default-100",
        header: "py-6",
        body: "pt-0 pb-6",
        footer: "gap-4 py-6 justify-between lg:justify-end",
      }}
      isDismissable={false}
      isOpen={open}
      size={isMobile ? "5xl" : "4xl"}
      onOpenChange={onClose}
    >
      <ModalContent>
        {isUserSubmitted ? (
          <>
            <ModalHeader>{strings.pricing.selectDate.title}</ModalHeader>
            <ModalBody>
              <div className="flex flex-col items-stretch lg:items-start lg:flex-row gap-4 lg:gap-x-5">
                <PlanDetails plan={plan} />
                <div className="space-y-4 lg:w-3/5">
                  <p>
                    <span>{strings.common.actions.welcome}</span>
                    {", "}
                    <span>{`${getValues("name")} <${getValues("email")}>`}</span>
                  </p>
                  <DatePicker
                    shouldForceLeadingZeros
                    showMonthAndYearPickers
                    classNames={{ helperWrapper: "" }}
                    description={strings.pricing.selectDate.hint}
                    errorMessage={dateError}
                    granularity="minute"
                    hourCycle={24}
                    isDateUnavailable={checkDateUnavailable}
                    isInvalid={!!dateError}
                    label={strings.pricing.selectDate.label}
                    size="lg"
                    variant="bordered"
                    onChange={setDate}
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                className="w-full lg:w-auto"
                size="lg"
                onPress={() => setIsUserSubmitted(false)}
              >
                {strings.common.actions.back}
              </Button>
              <Button
                className="w-full lg:w-auto"
                color="secondary"
                isDisabled={!!dateError || !date}
                isLoading={loading}
                size="lg"
                onPress={onSubmit}
              >
                {strings.common.actions.submit}
              </Button>
            </ModalFooter>
          </>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit(onNextClick)}>
            <ModalHeader>{strings.pricing.form.title}</ModalHeader>
            <ModalBody>
              <div className="flex flex-col items-stretch lg:items-start lg:flex-row gap-4 lg:gap-x-5">
                <PlanDetails plan={plan} />
                <div className="lg:w-3/5 space-y-4">
                  <Input
                    {...register("name")}
                    errorMessage={getErrorMessage(validators, errors, "name")}
                    isInvalid={!!errors.name}
                    label={strings.pricing.form.name}
                    size="lg"
                    variant="faded"
                  />
                  <Input
                    {...register("email")}
                    description={strings.pricing.form.email_hint}
                    errorMessage={getErrorMessage(validators, errors, "email")}
                    isInvalid={!!errors.email}
                    label={strings.pricing.form.email}
                    size="lg"
                    variant="faded"
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button className="w-full lg:w-auto" size="lg" onPress={onClose}>
                {strings.common.actions.cancel}
              </Button>
              <Button
                className="w-full lg:w-auto"
                color="secondary"
                size="lg"
                type="submit"
              >
                {strings.pricing.form.next}
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
};
