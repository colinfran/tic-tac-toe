// game/index.test.js
import React from 'react';
import Game from '.';
import {mount, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<Game />);
});

it('should update array on square click', () => {
  let wrapper = mount(<Game /> );
  wrapper.find('.square').first().simulate('click');
  expect(wrapper.state().gameArray).toEqual(['x', 1, 1, 1, 1, 1, 1, 1, 1]);
});

it('should not update array on square that was already clicked', () => {
  let wrapper = mount(<Game /> );
  wrapper.setState({ gameArray: ['o', 1, 1, 1, 1, 1, 1, 1, 1], playerTurn: 'x' })
  wrapper.find('.square').first().simulate('click');
  expect(wrapper.state().gameArray).toEqual(['o', 1, 1, 1, 1, 1, 1, 1, 1]);
});

it('should restart game when restart button is clicked', () => {
  let wrapper = mount(<Game /> );
  wrapper.find('#restartGame').first().simulate('click');
  expect(wrapper.state().gameArray).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1]);
  expect(wrapper.state().playerTurn).toEqual('x');
});

it('should move back a step when step back button is clicked', () => {
  let wrapper = mount(<Game /> );
  wrapper.setState({ gameArray: ['x', 'o', 'x', 'o', 1, 1, 1, 1, 1], playerTurn: 'x', recordedMoves:[{record: ['x', 1, 1, 1, 1, 1, 1, 1, 1]},{record: ['x', 'o', 1, 1, 1, 1, 1, 1, 1]},{record: ['x', 'o', 'x', 1, 1, 1, 1, 1, 1]},{record: ['x', 'o', 'x', 'o', 1, 1, 1, 1, 1]}], recordedMovesIndex: 3 })
  wrapper.find('#stepBack').first().simulate('click');
  expect(wrapper.state().gameArray).toEqual(['x', 'o', 'x', 1, 1, 1, 1, 1, 1]);
  wrapper.find('#stepBack').first().simulate('click');
  expect(wrapper.state().gameArray).toEqual(['x', 'o', 1, 1, 1, 1, 1, 1, 1]);
});
