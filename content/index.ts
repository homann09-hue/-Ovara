import { de } from "./de";
import { en } from "./en";

export const defaultLocale = "de" as const;
export const supportedLocales = ["de", "en"] as const;
export const publishedLocales = ["de"] as const;

export type OvaraLocale = (typeof supportedLocales)[number];
export type PublishedLocale = (typeof publishedLocales)[number];

const dictionaries = { de, en } as const;

export function isLocale(value: string): value is OvaraLocale {
  return supportedLocales.includes(value as OvaraLocale);
}

export function getDictionary(locale: OvaraLocale = defaultLocale) {
  return dictionaries[locale];
}

export const content = de;
