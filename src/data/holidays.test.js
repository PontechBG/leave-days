import expect from 'expect';
import React from 'react';
import { holidays, yearHasChanged } from './holidays';

describe('Holidays tests', () => {
  it('Dates are passed successfully', () => {
    holidays.map(day => {
      expect(typeof day).toBe('object');
      expect(typeof day.getYear()).toBe('number');
    });
  });

  it('Is using current year', () => {
    const currentYear = new Date();

    expect(yearHasChanged(currentYear)).toBe(false);
  });

  it('Check for year change', () => {
    const currentYear = new Date();
    const nextYear = new Date(currentYear.getFullYear() + 1);
    const prevYear = new Date(currentYear.getFullYear() - 1);

    expect(yearHasChanged(currentYear)).toBe(false);
    expect(yearHasChanged(nextYear)).toBe(true);
    expect(yearHasChanged(prevYear)).toBe(true);
  });
});
