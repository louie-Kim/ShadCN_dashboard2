import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


// cn : class n name : combine calss names conditionally
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
