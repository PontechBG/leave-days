// 1 януари 2019 – Нова година.
// 3 март – Ден на Освобождението на България от османско робство.
// 28 април – Великден – християнската религия отбелязва Възкресение Христово.
// 1 май – Ден на труда и на международната работническа солидарност.
// 6 май – Гергьовден, Ден на храбростта и Българската армия.
// 24 май – Денят на българската просвета и култура и на славянската писменост.
// 6 септември – Съединението на България.
// 22 септември – Ден на независимостта на България.
// 24, 25, 26 декември – Коледа.

let year = 2019;

let holidays = [
  'YYYY/01/01',
  'YYYY/03/03',
  'YYYY/05/01',
  'YYYY/05/06',
  'YYYY/05/24',
  'YYYY/09/06',
  'YYYY/09/22',
  'YYYY/12/24',
  'YYYY/12/25',
  'YYYY/12/26'
];

holidays = holidays.map(day => new Date(day.replace('YYYY', year)));

export { holidays };

export function yearHasChanged(date) {
  return date.getFullYear() !== year;
}
