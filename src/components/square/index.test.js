// square/index.test.js
import React from 'react';
import Square from '.';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  mount(<Square gameArray={[1, 1, 1, 1, 1, 1, 1, 1, 1]} idx={0}/>);
});
