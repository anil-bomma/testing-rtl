import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // will create and render virtual dom for given JSX element
  // const linkElement = screen.getByText(/learn react/i); // screen helps you to aceess, find element by display text
  const linkElement = screen.getByRole('link', { name: /learn react/i }); // 
  expect(linkElement).toBeInTheDocument(); // assertion - causes tests to pass and fail
});


/* 
Assertions
- these will determine the test pass or fail 
expect(linkElement).toBeInTheDocument();

expect -- jest global method
expect() -- jet will examine
.toBeInTheDocument -- matches comes from jest dom
() - sometime these matches have argument
*/



/*
jest-dom are dom based matcher can be applied to the virtual dom.
(toBeInTheDocument)
- these are dom based matcher can't be applied to node code
*/

/*

JEST - an test runner

RTL (react testing library)
-> render component in virtual dom - render()
-> searcging virtual dom - screen()
-> interacting with virtual dom - fireEvent()
-> need a test runner (jest is recommend by rtl)

*/
