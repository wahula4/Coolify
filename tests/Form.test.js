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

test('welcomes the user to React', function () {
  const wrapper = shallow(<Form />)
  expect(wrapper.text()).toContain('Say What?')
})

// test('simulates click events', () => {
//   const onButtonClick = sinon.spy();
//   const wrapper = shallow(<Form onButtonClick={onButtonClick} />);
//   wrapper.find('button').simulate('click');
//   expect(onButtonClick.calledOnce).toBe(true);
// });

describe('When visiting the homepage', function () {
  test('it welcomes the user', async function () {
    let page = nightmare().goto('http://localhost:8080/main')
    let text = await page.evaluate(() => document.body.textContent).end()
    expect(text).toContain('Say What?')
  });
});
