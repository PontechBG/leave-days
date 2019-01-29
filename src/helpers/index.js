const replaceAll = (str, find, replace) => {
  return str.replace(new RegExp(find, 'g'), replace);
};

export function generateId(text) {
  return replaceAll(text.toLowerCase(), ' ', '-');
}

export function countDays(fromDate, toDate) {
  const day = 24 * 60 * 60 * 1000;

  return Math.round(Math.abs(fromDate.getTime() - toDate.getTime()) / day);
}

export function formatDate(date) {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();

  dd = dd > 9 ? dd : '0' + dd;
  mm = mm > 9 ? mm : '0' + mm;

  return `${dd}.${mm}.${yyyy}`;
}
