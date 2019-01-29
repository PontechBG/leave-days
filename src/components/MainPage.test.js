import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import MainPage from './MainPage';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('MainPage tests', () => {
  it('MainPage renders without crashing', () => {
    const page = mount(<MainPage />);
    expect(page.find('main').length).toEqual(2);
  });
});
