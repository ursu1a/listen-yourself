/* eslint-disable no-console */
import {
  addDoc,
  doc,
  collection,
  getDocs,
  orderBy,
  where,
  query,
  getDoc,
  Timestamp,
  deleteDoc,
} from "firebase/firestore";
import { parseISO, subMinutes, addMinutes } from "date-fns";

import { db } from "./firebase";

import { siteConfig as strings } from "@/config/site";
import { ApiResponse, IPlan, IUserForm } from "@/types";

export const fetchPlans = async (): Promise<IPlan[]> => {
  const q = query(collection(db, "plans"), orderBy("order", "asc"));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({
    ...(doc.data() as IPlan),
    ...(strings.pricing.plans.find(({ id }) => doc.id === id) ?? {}),
  }));
};

export const handleBooking = async (
  userData: IUserForm,
): Promise<ApiResponse> => {
  const messages = strings.pricing.form.responses;

  if (!userData.dateTime) {
    return Promise.reject(new Error("Invalid dateTime field"));
  }

  // Check if time slot is unavailable
  const selectedTime = parseISO(userData.dateTime);
  const startTime = subMinutes(selectedTime, 59);
  const endTime = addMinutes(selectedTime, 59);
  const startTimestamp = Timestamp.fromDate(startTime);
  const endTimestamp = Timestamp.fromDate(endTime);

  const queryAvailability = query(
    collection(db, "bookings"),
    where("dateTime", ">=", startTimestamp),
    where("dateTime", "<=", endTimestamp),
  );

  const snapshotAvailability = await getDocs(queryAvailability);

  if (!snapshotAvailability.empty) {
    return {
      success: false,
      message: messages.time_slot_unavailable_error,
    };
  }

  if (!userData.planId) return Promise.reject(new Error("Invalid plan field"));

  // Get a plan by planId
  const planRef = doc(db, "plans", userData.planId);
  const planSnap = await getDoc(planRef);

  if (!planSnap.exists()) {
    return { success: false, message: messages.plan_not_found_error };
  }

  const plan = planSnap.data() as IPlan;

  // Check if user has reached booking limit for plan
  const queryLimit = query(
    collection(db, "bookings"),
    where("userEmail", "==", userData.email),
    where("planId", "==", userData.planId),
  );
  const snapshotLimit = await getDocs(queryLimit);

  if (snapshotLimit.size > (plan?.maxSessions ?? 1)) {
    return {
      success: false,
      message: messages.max_sessions_limit_error,
    };
  }

  await addDoc(collection(db, "bookings"), {
    userEmail: userData.email,
    planId: userData.planId,
    dateTime: Timestamp.fromDate(new Date(userData.dateTime)),
  });

  return {
    success: true,
    message: messages.booking_success,
  };
};

export const deleteOldBookings = async () => {
  try {
    console.log("Deleting old bookings");
    const now = new Date();

    const q = query(collection(db, "bookings"), where("dateTime", "<", now));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return;
    }

    const deletePromises = snapshot.docs.map((doc) => deleteDoc(doc.ref));

    await Promise.all(deletePromises);

    console.log(`Removed ${snapshot.size} old booking records.`);
  } catch (error) {
    console.error("Removing old booking records error: ", error);
  }
};
