/* eslint-disable no-console */
"use client";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DateValue } from "@heroui/react";
import { add, isAfter, isBefore, isPast } from "date-fns";

import axios from "@/lib/axios";
import * as validators from "@/utils/validators";
import { ApiResponse, IPlan, IUserForm } from "@/types";
import { siteConfig as strings } from "@/config/site";
import { deleteOldBookings, handleBooking } from "@/lib/plans";

const schema = () =>
  yup.object({
    name: yup.string().required("name_required"),
    email: yup
      .string()
      .required("email_required")
      .matches(validators.emailValidator, "email_format"),
  });

export const usePricingForm = () => {
  const schemaInstance = schema();
  const [loading, setLoading] = useState(false);
  const [googleApi, setGoogleApi] = useState<any>();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<IUserForm>({
    resolver: yupResolver(schemaInstance),
  });

  const loadGoogleApi = async () => {
    if (typeof window !== "undefined") {
      const googleApi = await import("@/lib/googleApi");

      setGoogleApi(googleApi.default);
    }
  };

  useEffect(() => {
    deleteOldBookings();
    loadGoogleApi();
  }, []);

  const checkDateUnavailable = (date: DateValue): boolean => {
    const jsDate = (date as any).toDate();

    if (jsDate) {
      return isPast(jsDate);
    }

    return false;
  };

  const validateDateTime = (date: DateValue): string | null => {
    const { validators } = strings.pricing.form;

    if (date) {
      const jsDate = (date as any).toDate();

      if (jsDate) {
        const startFrom = new Date(jsDate);
        const endTo = new Date(jsDate);

        startFrom.setHours(10, 0, 0);
        endTo.setHours(21, 0, 0);

        if (isBefore(jsDate, startFrom) || isAfter(jsDate, endTo)) {
          return validators["time_slot_wrong"];
        }

        const tomorrowDate = add(Date.now(), { days: 1 }).setHours(9, 59, 59);

        if (isBefore(jsDate, tomorrowDate)) {
          return validators["date_earlier_tomorrow"];
        }

        const plus3MonthDate = add(Date.now(), { months: 3 });

        if (isAfter(jsDate, plus3MonthDate)) {
          return validators["date_3months_ahead"];
        }
      }
    }

    return null;
  };

  const doSubmit = async (): Promise<ApiResponse> => {
    setLoading(true);
    const userData = getValues();

    try {
      const result = await handleBooking(userData);

      return result;
    } catch (error: any) {
      return {
        success: false,
        message: error.message,
      };
    } finally {
      setLoading(false);
    }
  };

  const sendEmailConfirmation = async (
    userData: IUserForm,
    plan: IPlan,
    eventLink: string
  ): Promise<ApiResponse> => {
    try {
      const requestData = {
        name: userData.name,
        email: userData.email,
        plan: plan.name,
        link: eventLink,
      };

      const response = await axios.post("/api/confirm-booking", requestData);

      return {
        success: response.data.success,
        message: strings.pricing.form.responses.email_confirm_success,
      };
    } catch (err) {
      console.error(err);

      return {
        success: false,
        message: strings.pricing.form.responses.email_confirm_error,
      };
    }
  };

  return {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    loading,
    errors,
    googleApi,
    doSubmit,
    checkDateUnavailable,
    validateDateTime,
    sendEmailConfirmation,
  };
};
