import availabilityData from './availability.json';

export type AvailabilityStatus = 'available' | 'limited' | 'booked';

export function getDateStatus(dateStr: string): AvailabilityStatus {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);

  if (date < today) {
    return 'booked';
  }

  const status = (availabilityData.dates as Record<string, string>)[dateStr];
  if (status === 'booked' || status === 'limited') {
    return status;
  }

  return 'available';
}
