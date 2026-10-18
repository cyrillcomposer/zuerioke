import availabilityData from './availability.json';

// false: the calendar is a plain date picker (no green/amber/red, no legend, booked
// days stay selectable so we can decline or suggest another date). Closures always show.
// true: show availability colours and block booked days.
export const SHOW_AVAILABILITY = false;

export type AvailabilityStatus = 'available' | 'limited' | 'booked' | 'closed';

// Date strings are YYYY-MM-DD, so plain string comparison orders them correctly.
export function isClosed(dateStr: string): boolean {
  return availabilityData.closures.some((c) => dateStr >= c.from && dateStr <= c.to);
}

export function getDateStatus(dateStr: string): AvailabilityStatus {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);

  if (date < today) {
    return 'booked';
  }

  if (isClosed(dateStr)) {
    return 'closed';
  }

  const status = (availabilityData.dates as Record<string, string>)[dateStr];
  if (status === 'booked' || status === 'limited') {
    return status;
  }

  return 'available';
}

export function isSelectable(dateStr: string): boolean {
  const status = getDateStatus(dateStr);
  if (status === 'closed') return false;
  const [year, month, day] = dateStr.split('-').map(Number);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (new Date(year, month - 1, day) < today) return false;
  return SHOW_AVAILABILITY ? status !== 'booked' : true;
}
