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

it('should end the game if a winner is found', () => {
  let wrapper = mount(<Game /> );
  wrapper.setState({ gameArray: ['x', 'x', 1, 'o', 'o', 1, 1, 1, 1], playerTurn: 'x' })
  wrapper.find('.square').at(2).simulate('click');
  expect(wrapper.state().outCome).toEqual('x');
});

it('should end the game if there is a draw', () => {
  let wrapper = mount(<Game /> );
  wrapper.find('.square').at(0).simulate('click');
  wrapper.find('.square').at(1).simulate('click');
  wrapper.find('.square').at(2).simulate('click');
  wrapper.find('.square').at(6).simulate('click');
  wrapper.find('.square').at(7).simulate('click');
  wrapper.find('.square').at(8).simulate('click');
  wrapper.find('.square').at(3).simulate('click');
  wrapper.find('.square').at(4).simulate('click');
  wrapper.find('.square').at(5).simulate('click');
  expect(wrapper.state().outCome).toEqual('draw');
});

it('should specify horizontal win when a user wins horizontally', () => {
  let wrapper = mount(<Game /> );
  wrapper.find('.square').at(0).simulate('click');
  wrapper.find('.square').at(3).simulate('click');
  wrapper.find('.square').at(1).simulate('click');
  wrapper.find('.square').at(4).simulate('click');
  wrapper.find('.square').at(2).simulate('click');
  expect(wrapper.state().winType).toContain('horizontal');
});

it('should specify vertical win when a user wins vertical', () => {
  let wrapper = mount(<Game /> );
  wrapper.find('.square').at(0).simulate('click');
  wrapper.find('.square').at(1).simulate('click');
  wrapper.find('.square').at(3).simulate('click');
  wrapper.find('.square').at(4).simulate('click');
  wrapper.find('.square').at(6).simulate('click');
  expect(wrapper.state().winType).toContain('vertical');
});

it('should specify diagonal win when a user wins diagonal', () => {
  let wrapper = mount(<Game /> );
  wrapper.find('.square').at(0).simulate('click');
  wrapper.find('.square').at(1).simulate('click');
  wrapper.find('.square').at(4).simulate('click');
  wrapper.find('.square').at(5).simulate('click');
  wrapper.find('.square').at(8).simulate('click');
  expect(wrapper.state().winType).toContain('diagonal');
});
