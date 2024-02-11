import { clsx } from "clsx"
import { createTwc } from "react-twc"
import { twMerge } from "tailwind-merge"

import type { ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const twc = createTwc({ compose: twMerge })
