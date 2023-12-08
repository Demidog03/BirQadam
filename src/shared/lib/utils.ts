import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const hexToRGB = (hex_value: string, colorIntensity: number): string => {
  const numericValue = parseInt(hex_value, 16);
  const r = numericValue >> 16 & 0xFF;
  const g = numericValue >> 8 & 0xFF;
  const b = numericValue & 0xFF;
  return `rgb(${colorIntensity * r}, ${colorIntensity * g}, ${colorIntensity * b})`
}