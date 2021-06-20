import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // will create and render virtual dom for given JSX element
  // const linkElement = screen.getByText(/learn react/i); // screen helps you to aceess, find element by display text
  const linkElement = screen.getByRole('link', { name: /learn react/i }); // 
  expect(linkElement).toBeInTheDocument(); // assertion - causes tests to pass and fail
});

// implementing in true TDD
test('button has correct initial color ', () => {
  render(<App />);
  // find an element with a role of button and text of 'Change to Blue
  const colorButton = screen.getByRole('button', { name: /Change to Blue/i });

  // when role doesn't exist -- comment it and see. more helpfull commnet in terminal
  // const colorButton = screen.getByRole('butt', { name: /Change to Blue/i });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});


test('button trun blue when clicked ', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /Change to Blue/i });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  //expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to Red');
});

test('intitial condition', () => {
  render(<App />);
  // check that the button start out enable
  const button = screen.getByRole('button', { name: /change to blue/i });
  expect(button).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});


test('button will disbale/enable with checkbook', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { label: /myCheckBox/i });
  const button = screen.getByRole('button', { name: /change to blue/i });

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();
});



