import ParseDate from 'date-fns/parse';

import { DATE_FORMAT } from './song-data';

export const sortDateStrings = (valueA: string, valueB: string): number => {
  if (valueA == null && valueB == null) { return 0; }
  if (valueA == null) { return -1; }
  if (valueB == null) { return 1; }
  const numberA = convertToMilliseconds(valueA);
  const numberB = convertToMilliseconds(valueB);
  return numberA - numberB;
}

export const convertToMilliseconds = (date: string): number => {
  return ParseDate(date, DATE_FORMAT, new Date()).getTime();
}