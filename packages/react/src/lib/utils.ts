import { type ClassValue, clsx } from "clsx";
import { twMerge } from "../../tailwind.config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
