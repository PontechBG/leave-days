import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { MainPage } from './MainPage';
import { YearWarningDialog } from './YearWarningDialog';
import { yearHasChanged } from '../data/holidays';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('MainPage tests', () => {
  window.print = () => {};
  let state = {
    yearWarning: yearHasChanged(new Date()),
    isReadyForPrint: false,
    userName: 'Богдан Димитров Христозов',
    fromDate: new Date(),
    toDate: new Date(),
    documentDate: new Date(),
    numberOfDays: 1,
    deputy: 'Даниел Иванов Кехлибаров',
    isPaid: true
  };

  it('Renders without crashing', () => {
    shallow(<MainPage classes={{}} />);
  });

  it('Renders <InputForm> when not ready for print', done => {
    const wrapper = mount(<MainPage classes={{}} />);
    wrapper.setState(state, () => {
      expect(wrapper.find('input').length).toBe(6);
      done();
    });
  });

  it('Renders <PrintForm> when ready for print', done => {
    const wrapper = mount(<MainPage classes={{}} />);
    state.isReadyForPrint = true;
    wrapper.setState(state, () => {
      expect(wrapper.find('input').length).toBe(0);
      done();
    });
  });

  it('Renders <YearWarningDialog>', () => {
    const wrapper = mount(<MainPage classes={{}} />);
    expect(wrapper.find(YearWarningDialog).length).toBe(1);
  });

  it('Does not display year warning dialog when year is changed', () => {
    const wrapper = mount(<MainPage classes={{}} />);
    expect(wrapper.find(YearWarningDialog).prop('open')).toEqual(false);
  });

  it('Displays year warning dialog when year is changed', done => {
    const wrapper = mount(<MainPage classes={{}} />);
    wrapper.setState({ yearWarning: true }, () => {
      expect(wrapper.find(YearWarningDialog).prop('open')).toEqual(true);
      done();
    });
  });
});
