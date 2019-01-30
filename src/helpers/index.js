import { holidays } from '../data/holidays';

const replaceAll = (str, find, replace) => {
  return str.replace(new RegExp(find, 'g'), replace);
};

export function generateId(text) {
  return replaceAll(text.toLowerCase(), ' ', '-');
}

export function countDays(fromDate, toDate, workingDaysOnly = true) {
  fromDate.setHours(0, 0, 0, 0);
  toDate.setHours(0, 0, 0, 0);
  let count = 0;
  let curDate = new Date(fromDate);

  while (curDate <= toDate) {
    count += workingDaysOnly ? (isWorkingDay(curDate) ? 1 : 0) : 1;
    // add one day
    curDate = new Date(curDate);
    curDate.setDate(curDate.getDate() + 1);
  }

  return count;
}

export function formatDate(date) {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();

  dd = dd > 9 ? dd : '0' + dd;
  mm = mm > 9 ? mm : '0' + mm;

  return `${dd}.${mm}.${yyyy}`;
}

export function isWorkingDay(date) {
  return [0, 6].includes(date.getDay()) === false && isHoliday(date) === false;
}

export function isHoliday(date) {
  return holidays.findIndex(d => d.toDateString() === date.toDateString()) !== -1;
}
