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

export const convertFileToBase64 = (
  file: File,
  cb: (result: { image: string; base64: string } | { error: string }) => void
) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    if (typeof reader.result === 'string') {
      cb({
        image: reader.result,
        base64: reader.result.split(',')[1]
      });
    }
  };
  reader.onerror = function () {
    cb({
      error: 'Ошибка при обработки файла'
    });
  };
};

export const isFileTypeSupported = (fileType: string, supportedTypes: string[]): boolean => {
  return supportedTypes.includes(fileType);
};