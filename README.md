# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes - AB

Assertions

- these will determine the test pass or fail
  expect(linkElement).toBeInTheDocument();

expect -- jest global method
expect() -- jet will examine
.toBeInTheDocument -- matches comes from jest dom
() - sometime these matches have argument

jest-dom are dom based matcher can be applied to the virtual dom.
(toBeInTheDocument)

- these are dom based matcher can't be applied to node code
  \*/

JEST - an test runner

RTL (react testing library)
-> render component in virtual dom - render()
-> searcging virtual dom - screen()
-> interacting with virtual dom - fireEvent()
-> need a test runner (jest is recommend by rtl)

- https://testing-library.com/docs/queries/about/#priority (for querying test accessibility and finding elements)

- as per testing library guide what priority we should use to find element by virtual dom

- https://www.w3.org/TR/wai-aria/#role_definitions (for role defination)

- https://github.com/testing-library/jest-dom (jest-dom matcher)

- Screen Query method - command[All]ByQueryType
- command - get(expect in DOM), query(expect not in DOM), find (expect elemnet to apper async)
- All - include(for all matches) exclude(for exact match)
- QuertType - Role, AltText, Text, PlaceholderTex, LabelText, DisplayValue

- https://testing-library.com/docs/queries/about/
- https://testing-library.com/docs/react-testing-library/cheatsheet/
- https://testing-library.com/docs/queries/about/#priority

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
