export const getFormattedDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (date.toString() === 'Invalid Date') return 'No date info';

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};
