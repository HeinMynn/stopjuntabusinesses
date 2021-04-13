export const dateToTime = (dates) =>
  dates.toLocaleString("en-GB", {
    hour12: true,
    hour: "2-digit",
    minute: "numeric",
    timeZone: "Asia/Rangoon",
  });

export const FullDate = (dates, day, month, year) =>
  dates.toLocaleString("en-GB", {
    year: year,
    month: month,
    day: day,
  });
