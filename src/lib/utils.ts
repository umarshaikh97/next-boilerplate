import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getDirectionFromLocale = (locale: string) => {
  switch (locale) {
    case 'ar':
      return 'rtl';
    default:
      return 'ltr';
  }
};
