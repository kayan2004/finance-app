export function formatDateString(dateStr) {
  const date = new Date(dateStr);

  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = date
    .toLocaleDateString("en-GB", options)
    .replace(",", "");

  return formattedDate;
}

export function formatDateToMonthly(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDate();
  const suffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const dayWithSuffix = `${day}${suffix(day)}`;
  return `Monthly-${dayWithSuffix}`;
}

export function formatCurrency(amount) {
  const number = Number(amount);
  const isNegative = number < 0;
  const formattedNumber = Math.abs(number)
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace("$", "");
  return (isNegative ? "-" : "+") + "$" + formattedNumber;
}
