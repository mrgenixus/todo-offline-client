import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('emulates localStorage', () => {
  global.localStorage.setItem('test', 'hello');
  expect(global.localStorage.getItem('test')).toEqual('hello');
});
