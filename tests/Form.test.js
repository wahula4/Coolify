import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import nightmare from 'nightmare';
import Form from '../app/components/children/Form';

test('should have 1 panel', () => {
  const wrapper = shallow(<Form />);
  expect(wrapper.find('.panel').length).toBe(1);
});

test('button should have class .btn-primary', () => {
  const wrapper = shallow(<Form />);
  expect(wrapper.find('.btn-primary').type()).toBe('button');
});

test('Form has a title', function () {
  const wrapper = shallow(<Form />)
  expect(wrapper.text()).toContain('Say What?')
})
