// board/index.test.js
import React from 'react';
import Board from '.';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  shallow(<Board />);
});

it('should render tic-tac-toe board lines', () => {
  let wrapper = mount(<Board /> );
  expect(wrapper.exists('.boardContainer')).toEqual(true);
  expect(wrapper.exists('.boardRow1')).toEqual(true);
  expect(wrapper.exists('.boardRow2')).toEqual(true);
  expect(wrapper.exists('.boardRow3')).toEqual(true);
  expect(wrapper.exists('.column')).toEqual(true);
});
