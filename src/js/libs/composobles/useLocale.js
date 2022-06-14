export function useLocale() {
  const locale = localStorage.getItem("locale");

  if (locale) {
    return locale;
  }

  localStorage.setItem("locale", "en");
  return "en";
}
