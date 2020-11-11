import { generateId } from '../helpers';

const users = [
  { name: 'Ангел Николаев Малаков', position: 'Ръководител ИТ проекти' },
  { name: 'Богдан Димитров Христозов', position: 'Разработчик, софтуер' },
  { name: 'Борис Кирилов Атанасов', position: 'Мениджър бизнес услуги' },
  { name: 'Величка Динева Динева', position: 'Ръководител ИТ проекти' },
  { name: 'Даниел Иванов Кехлибаров', position: 'Разработчик, софтуер' },
  { name: 'Ивелина Павлинова Кахчиева', position: 'Програмист софтуерни приложения' },
  { name: 'Йордан Йорданов Даскалов', position: 'Програмист софтуерни приложения' },
  { name: 'Калин Димитров Шекерджиев', position: 'Програмист софтуерни приложения' },
  { name: 'Каталина Максимова Корчева-Григорова', position: 'Ръководител бизнес услуги' },
  { name: 'Кристиян Димитров Димитров', position: 'Програмист софтуерни приложения' },
  { name: 'Мария Йорданова Бистрева', position: 'Технически сътрудник' },
  { name: 'Ради Василев Костенаров', position: 'Разработчик, софтуер' },
  { name: 'Христо Петров Христов', position: 'Ръководител/Началник/Мениджър отдел/SAP/' }
];

users.forEach(user => {
  user.id = generateId(user.name);
});

export function getUser(name) {
  return users.filter(user => user.name === name)[0];
}
export function getUsers() {
  return users;
}

export function getDeputiesFor(name) {
  return name ? users.filter(user => user.name !== name) : users;
}
