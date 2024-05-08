export function formatDate(date: Date, time?: boolean) {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  if (time) {
    options.hour = "2-digit";
    options.minute = "2-digit";
  }

  return date.toLocaleDateString("en-US", options);
}

export function getFullName(firstName: string, lastName?: string) {
  if (lastName) {
    return `${firstName} ${lastName}`;
  }
  return firstName;
}

export function formatCurrency(number: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}
