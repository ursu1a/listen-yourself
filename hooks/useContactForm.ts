import { useState } from "react";
import { AxiosError } from "axios";
import sanitizeHtml from "sanitize-html";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "@/lib/axios";
import { ApiResponse, IContactForm } from "@/types";
import { isValidEmail } from "@/utils/functions";
import { siteConfig as strings } from "@/config/site";
import * as validators from "@/utils/validators";

const schema = () =>
  yup.object({
    name: yup.string().required("name_required"),
    email: yup
      .string()
      .required("email_required")
      .matches(validators.emailValidator, "email_format"),
    message: yup
      .string()
      .required("message_required")
      .min(10, "message_min_len")
      .max(500, "message_max_len"),
  });

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const schemaInstance = schema();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactForm>({
    resolver: yupResolver(schemaInstance),
  });

  const doSubmit = async (formData: IContactForm): Promise<ApiResponse> => {
    setLoading(true);

    try {
      if (!isValidEmail(formData.email)) {
        throw new Error("Invalid email");
      }

      if (formData.message.length > 500) {
        throw new Error("Message too long");
      }

      const preparedData = {
        name: sanitizeHtml(formData.name),
        email: sanitizeHtml(formData.email),
        message: sanitizeHtml(formData.message),
      };

      const response = await axios.post("/api/contact-us", preparedData);

      return {
        success: response.data.success,
        message: strings.contact.responses.success,
      };
    } catch (error) {
      return {
        success: false,
        message: `${strings.contact.responses.error}: ${(error as AxiosError).response?.statusText}`,
      };
    } finally {
      setLoading(false);
    }
  };

  return { register, handleSubmit, reset, errors, loading, doSubmit };
};
