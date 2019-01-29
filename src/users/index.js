import { generateId } from '../helpers';

const users = [
  { name: 'Богдан Димитров Христозов', position: 'Разработчик, софтуер' },
  { name: 'Даниел Иванов Кехлибаров', position: 'Разработчик, софтуер' },
  { name: 'Ивелина Златомирова Иванова', position: 'Разработчик, софтуер' },
  { name: 'Ивелина Павлинова Кахчиева', position: 'Програмист стажант софтуерни приложения' },
  { name: 'Йордан Йорданов Даскалов', position: 'Програмист софтуерни приложения' },
  { name: 'Калин Димитров Шекерджиев', position: 'Програмист софтуерни приложения' },
  { name: 'Каталина Максимова Корчева-Григорова', position: 'Организатор работа с клиенти' },
  { name: 'Кристиян Димитров Димитров', position: 'Програмист софтуерни приложения' },
  { name: 'Мария Йорданова Бистрева', position: 'Технически сътрудник' },
  { name: 'Симеон Петров Първанов', position: 'Мениджър софтуерно развитие' },
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