import expect from 'expect';
import { holidays, yearHasChanged } from './holidays';

describe('Holidays tests', () => {
  it('Dates are passed successfully', () => {
    holidays.forEach(day => {
      expect(typeof day).toBe('object');
      expect(typeof day.getYear()).toBe('number');
    });
  });

  it('Is using current year', () => {
    expect(yearHasChanged(new Date())).toBe(false);
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
