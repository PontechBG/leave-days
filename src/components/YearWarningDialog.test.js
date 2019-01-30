import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { YearWarningDialog } from './YearWarningDialog';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('YearWarningDialog tests', () => {
  it('Renders without crashing', () => {
    shallow(<YearWarningDialog />);
  });

  it('Is shown when year is changed', () => {
    const wrapper = mount(<YearWarningDialog open={true} />);
    expect(wrapper.props().open).toEqual(true);
  });

  it('Is hidden when year is not changed', () => {
    const wrapper = mount(<YearWarningDialog open={false} />);
    expect(wrapper.props().open).toEqual(false);
  });
});
