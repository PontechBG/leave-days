import expect from 'expect';
import React from 'react';
import { generateId, countDays, formatDate, isWorkingDay, isHoliday } from './';

describe('Helpers tests', () => {
  it('Should be able to generate id', () => {
    const name = 'Богдан Димитров Христозов';
    const id = 'богдан-димитров-христозов';
    expect(generateId(name)).toEqual(id);
  });

  it("Should format dates to 'dd.mm.yyyy'", () => {
    let date = new Date('2019/4/6');
    expect(formatDate(date)).toEqual('06.04.2019');
    date = new Date('2019/12/9');
    expect(formatDate(date)).toEqual('09.12.2019');
    date = new Date('2019/2/22');
    expect(formatDate(date)).toEqual('22.02.2019');
    date = new Date('2019/12/12');
    expect(formatDate(date)).toEqual('12.12.2019');
  });

  it('Should check if date is an official holiday', () => {
    let date = new Date('2019/01/01');
    expect(isHoliday(date)).toEqual(true);
    date = new Date('2019/01/25');
    expect(isHoliday(date)).toEqual(false);
  });

  it('Should check if date is working day', () => {
    let date = new Date('2019/01/01');
    expect(isWorkingDay(date)).toEqual(false);
    date = new Date('2019/01/26');
    expect(isWorkingDay(date)).toEqual(false);
    date = new Date('2019/01/25');
    expect(isWorkingDay(date)).toEqual(true);
  });

  it('Should count days between two dates', () => {
    let fromDate = new Date('2019/04/30');
    let toDate = new Date('2019/05/02');
    let days = countDays(fromDate, toDate, true);
    expect(days).toEqual(2);
    days = countDays(fromDate, toDate, false);
    expect(days).toEqual(3);
    days = countDays(fromDate, toDate, false);

    fromDate = new Date('2019/05/03');
    toDate = new Date('2019/05/07');
    days = countDays(fromDate, toDate, true);
    expect(days).toEqual(2);
    days = countDays(fromDate, toDate, false);
    expect(days).toEqual(5);
  });
});
