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

export function getSnippet(
  content: string,
  query: string,
  length: number = 200,
) {
  const index = content.toLowerCase().indexOf(query.toLowerCase());

  if (index === -1) return content.slice(0, length) + "...";

  const start = Math.max(0, index - 30); // Get 30 symbols before word
  const end = Math.min(content.length, index + length);

  return "..." + content.slice(start, end) + "...";
}

export function highlightMatch(text: string, query: string) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");

  return text.replace(regex, `<mark>$1</mark>`);
}

export function getErrorMessage(
  messages: Record<string, string>,
  errors: Record<string, any>,
  key: string,
): string {
  return messages[errors[key]?.message] || "";
}
