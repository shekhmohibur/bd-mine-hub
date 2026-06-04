export const formatNumber = (number, language = "en") => {
  if (language === "bn") {
    return new Intl.NumberFormat("bn-BD").format(number);
  }

  return new Intl.NumberFormat("en-US").format(number);
};
