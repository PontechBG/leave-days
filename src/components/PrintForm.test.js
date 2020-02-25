import expect from 'expect';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { mount, shallow } from 'enzyme';
import { PrintForm } from './PrintForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('MainPage tests', () => {
  window.print = () => {};
  let props = {
    classes: {},
    userName: 'Богдан Димитров Христозов',
    deputy: 'Даниел Иванов Кехлибаров',
    fromDate: new Date(),
    documentDate: new Date(),
    numberOfDays: 1,
    toDate: new Date(),
    isPaid: true
  };

  it('Renders without crashing', () => {
    shallow(<PrintForm {...props} />);
  });

  it('Renders only texts and not inputs', () => {
    const wrapper = shallow(<PrintForm {...props} />);
    expect(wrapper.find(Typography).length).toBeGreaterThan(0);
    expect(wrapper.find('input').length).toBe(0);
  });

  it("Should update based on 'isPaid' property", () => {
    let wrapper = shallow(<PrintForm {...props} />);
    let element = wrapper.find(Typography).get(6);
    expect(element.props.children.indexOf('платен')).toEqual(5);
    expect(element.props.children.indexOf('неплатен')).toEqual(-1);

    props.isPaid = false;
    wrapper = shallow(<PrintForm {...props} />);
    element = wrapper.find(Typography).get(6);
    expect(element.props.children.indexOf('платен')).toEqual(-1);
    expect(element.props.children.indexOf('неплатен')).toEqual(5);
  });
});
