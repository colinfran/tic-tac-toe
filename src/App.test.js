import React from 'react';
import App from './App';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  shallow(<App/>);
});

it('should handle onClick state change to show the game', () => {
  let wrapper = mount(<App /> );
  wrapper.find('.startButton').simulate('click');
  expect(wrapper.state().gameStarted).toEqual(true);
});
