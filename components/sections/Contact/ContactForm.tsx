"use client";
import { Input, Textarea } from "@heroui/react";
import { Button } from "@heroui/react";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";

import { button, title } from "@/components/shared/primitives";
import { siteConfig as strings } from "@/config/site";
import { IContactForm } from "@/types";
import { useContactForm } from "@/hooks/useContactForm";
import { getErrorMessage } from "@/utils/functions";

export const ContactForm = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { register, reset, handleSubmit, errors, loading, doSubmit } =
    useContactForm();
  const { validators } = strings.contact;

  const onSubmit = async (data: IContactForm) => {
    const result = await doSubmit(data);

    enqueueSnackbar(result.message, {
      variant: result.success ? "success" : "error",
    });
    if (result.success) {
      router.push("/");
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="lg:mt-4 flex flex-col items-start gap-y-3">
        <h2 className={title({ size: "sm", className: "mb-2" })}>
          {strings.contact.title}
        </h2>
        <Input
          {...register("name")}
          errorMessage={getErrorMessage(validators, errors, "name")}
          isInvalid={!!errors.name}
          placeholder={strings.contact.placeholders.name}
          size="lg"
          variant="faded"
        />
        <Input
          {...register("email")}
          errorMessage={getErrorMessage(validators, errors, "email")}
          isInvalid={!!errors.email}
          placeholder={strings.contact.placeholders.email}
          size="lg"
          variant="faded"
        />
        <Textarea
          {...register("message")}
          errorMessage={getErrorMessage(validators, errors, "message")}
          isInvalid={!!errors.message}
          maxRows={8}
          minRows={4}
          placeholder={strings.contact.placeholders.message}
          size="lg"
          variant="faded"
        />
        <Button
          className={button({ size: "lg" })}
          color="primary"
          isLoading={loading}
          type="submit"
        >
          {strings.contact.requestBtn}
        </Button>
      </div>
    </form>
  );
};
