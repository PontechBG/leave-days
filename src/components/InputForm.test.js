import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import InputForm from './InputForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('InputForm tests', () => {
  it('InputForm renders without crashing', () => {
    const page = mount(<InputForm onReady={() => {}} />);
    expect(page.find('main').length).toEqual(1);
  });
});
