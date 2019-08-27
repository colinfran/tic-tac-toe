// board/index.test.js
import React from 'react';
import Board from '.';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  shallow(<Board gameArray={[1, 1, 1, 1, 1, 1, 1, 1, 1]} playerTurn={"x"}/>);
});

it('should render tic-tac-toe board lines', () => {
  let wrapper = mount(<Board gameArray={[1, 1, 1, 1, 1, 1, 1, 1, 1]} playerTurn={"x"}/> );
  expect(wrapper.exists('.boardContainer')).toEqual(true);
  expect(wrapper.exists('.boardRow1')).toEqual(true);
  expect(wrapper.exists('.boardRow2')).toEqual(true);
  expect(wrapper.exists('.boardRow3')).toEqual(true);
  expect(wrapper.exists('.column')).toEqual(true);
});

it('should render 9 squares inside tic-tac-toe board', () => {
  let wrapper = mount(<Board gameArray={[1, 1, 1, 1, 1, 1, 1, 1, 1]} playerTurn={"x"}/> );
  expect(wrapper.find('.square')).toHaveLength(9);
});
