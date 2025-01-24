import { emailValidator } from "./validators";

export function getCurrentYear() {
  var currentTime = new Date();

  return currentTime.getFullYear();
}

export function isValidEmail(email: string): boolean {
  return emailValidator.test(email);
}

export function getErrorMessage(
  messages: Record<string, string>,
  errors: Record<string, any>,
  key: string,
): string {
  return messages[errors[key]?.message] || "";
}
