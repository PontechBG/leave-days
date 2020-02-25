// 1 януари 2019 – Нова година.
// 3 март – Ден на Освобождението на България от османско робство.
// 28 април – Великден – християнската религия отбелязва Възкресение Христово.
// 1 май – Ден на труда и на международната работническа солидарност.
// 6 май – Гергьовден, Ден на храбростта и Българската армия.
// 24 май – Денят на българската просвета и култура и на славянската писменост.
// 6 септември – Съединението на България.
// 22 септември – Ден на независимостта на България.
// 24, 25, 26 декември – Коледа.

// 1 януари 2020 – Нова година.
// 3 март – Ден на Освобождението на България от османско робство.
// 19 април 2020 – Великден – християнската религия отбелязва Възкресение Христово.
// 1 май – Ден на труда и на международната работническа солидарност.
// 6 май – Гергьовден, Ден на храбростта и Българската армия.
// 24 май – Денят на българската просвета и култура и на славянската писменост.
// 6 септември – Съединението на България.
// 22 септември – Ден на независимостта на България.
// 24, 25, 26 декември – Коледа.

const currentYear = 2020;

const yearHasChanged = date => {
  return date.getFullYear() !== currentYear;
};

const holidays = [
  '2019/01/01',
  '2019/03/03',
  '2019/03/04',
  '2019/04/26',
  '2019/04/29',
  '2019/05/01',
  '2019/05/06',
  '2019/05/24',
  '2019/09/06',
  '2019/09/22',
  '2019/09/23',
  '2019/12/24',
  '2019/12/25',
  '2019/12/26',
  '2020/01/01',
  '2020/03/03',
  '2020/04/17',
  '2020/04/19',
  '2020/04/20',
  '2020/05/01',
  '2020/05/06',
  '2020/05/24',
  '2020/05/25',
  '2020/09/06',
  '2020/09/07',
  '2020/09/22',
  '2020/12/24',
  '2020/12/25',
  '2020/12/26',
  '2020/12/28'
];

for (let i = 0; i < holidays.length; i++) {
  holidays[i] = new Date(holidays[i]);
}

export { holidays, yearHasChanged };
