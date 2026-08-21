import { de, type OvaraLocale } from "./de";

export const defaultLocale: OvaraLocale = "de";
export const supportedLocales: readonly OvaraLocale[] = ["de"];

export function getContent(locale: OvaraLocale = defaultLocale) {
  switch (locale) {
    case "de":
      return de;
    default:
      return de;
  }
}
