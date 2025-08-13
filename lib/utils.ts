import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const baseurl =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.NEXT_PUBLIC_BASE_URL}`
    : "http://localhost:3000";
