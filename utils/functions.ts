import { format, formatDuration } from "date-fns";

import { emailValidator } from "./validators";

export function getCurrentYear() {
  var currentTime = new Date();

  return currentTime.getFullYear();
}

export function isValidEmail(email: string): boolean {
  return emailValidator.test(email);
}

export function formatReadTime(mins: number): string {
  return formatDuration({ minutes: mins }, { format: ["minutes"] });
}

export function formatDate(date: string): string {
  return format(date, "MMM dd, yyyy");
}

export function calculateReadingTime(content: string): number {
  const words = content.split(/\s+/).length; // Split into words
  const wordsPerMinute = 200; // Middle reading speed

  return Math.ceil(words / wordsPerMinute); // Ceil reading time for minutes
}

export function getErrorMessage(
  messages: Record<string, string>,
  errors: Record<string, any>,
  key: string,
): string {
  return messages[errors[key]?.message] || "";
}
