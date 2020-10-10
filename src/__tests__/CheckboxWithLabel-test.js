// testing library
// import React from 'react';
// import {cleanup, fireEvent, render} from '@testing-library/react';
// import CheckboxWithLabel from '../CheckboxWithLabel';

// // Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// // unmount and cleanup DOM after the test is finished.
// afterEach(cleanup);

// it('CheckboxWithLabel changes the text after click', () => {
//   const {queryByLabelText, getByLabelText} = render(
//     <CheckboxWithLabel labelOn="On" labelOff="Off" />,
//   );

//   expect(queryByLabelText(/off/i)).toBeTruthy();

//   fireEvent.click(getByLabelText(/off/i));

//   expect(queryByLabelText(/on/i)).toBeTruthy();
// });

import React from 'react';
import {shallow} from 'enzyme';
import CheckboxWithLabel from '../CheckboxWithLabel';

test('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});