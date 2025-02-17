/* eslint-disable no-console */
"use client";
import { addHours, parseISO } from "date-fns";
import { gapi } from "gapi-script";

import {
  DAFAULT_TIMEZONE,
  GOOGLE_CALENDAR_ADMIN_EMAIL,
  GOOGLE_CLIENT_ID,
} from "./constants";

import { IPlan, IUserForm } from "@/types";
import { siteConfig as strings } from "@/config/site";

const SCOPE = "https://www.googleapis.com/auth/calendar.events";

const loadGoogleAPI = () => {
  return new Promise((resolve, reject) => {
    gapi.load("client:auth2", async () => {
      try {
        if (!gapi.auth2.getAuthInstance()) {
          await gapi.client.init({
            clientId: GOOGLE_CLIENT_ID,
            scope: SCOPE,
          });

          console.log("Google API loaded");

          resolve(true);
        }
      } catch (error) {
        console.error("Error loading Google API: ", error);
        reject(error);
      }
    });
  });
};

const signInWithGoogle = async () => {
  try {
    if (!gapi.auth2) {
      console.error("Google API not available");
      await loadGoogleAPI();
    }

    const authInstance = gapi.auth2.getAuthInstance();

    if (!authInstance) {
      console.error("Error: Google Auth not initialized.");

      return;
    }

    const user = await authInstance.signIn();

    console.log("User authorized: ", user.getBasicProfile().getEmail());

    return user;
  } catch (error) {
    console.error("Authorization error: ", error);

    return null;
  }
};

const createGoogleCalendarEvent = async (
  { dateTime, email, name }: IUserForm,
  plan: IPlan,
) => {
  if (!dateTime) {
    return;
  }
  const startTime = parseISO(dateTime);
  const endTime = addHours(startTime, 1);

  try {
    // Load the calendar API
    await gapi.client.load("calendar", "v3");

    // Event data
    const event = {
      summary: `${strings.pricing.calendarEvent.title} ${name}`,
      description: `${strings.pricing.calendarEvent.description} "${plan.name}"`,
      start: { dateTime, timeZone: DAFAULT_TIMEZONE },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: DAFAULT_TIMEZONE,
      },
      attendees: [{ email: email }, { email: GOOGLE_CALENDAR_ADMIN_EMAIL }],
      conferenceData: {
        createRequest: {
          requestId: `${Date.now()}`,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 30 },
          { method: "popup", minutes: 10 },
        ],
      },
    };

    // Create event
    const response = await gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: event,
      conferenceDataVersion: 1,
      sendUpdates: "all",
    });

    console.log("Event was created: ", response);

    const eventLink = response.result.htmlLink;

    return eventLink;
  } catch (error) {
    console.error("Event creation errror: ", error);
  }
};

export default { signInWithGoogle, createGoogleCalendarEvent };
