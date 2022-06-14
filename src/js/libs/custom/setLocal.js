export function setLocalInit() {
  return {
    setLocal(locale) {
      AlpineI18n.locale = locale;
      localStorage.setItem("locale", locale);
    },
  };
}
