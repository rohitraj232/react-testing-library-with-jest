import React from 'react'

const ReactBasic = () => {
  return (
    <div>
      {/* 02. Write First React Test Case */}
      <p>First React Test case</p>

      <input type='text' placeholder='Enter User Name' name='username' id='userid' />

    </div>
  )
}

export default ReactBasic;


/*

Watch Mode Options Explained

a → Run all tests
    Runs every test file in your project, even if nothing has changed.

f → Run only failed tests
    If some tests failed in the last run, this will re-run just those.

q → Quit watch mode
    Exits the watch mode and returns to the terminal.

p → Filter by filename
    Lets you type part of a file name to run only those tests.
    Example: Type Counter → It will run Counter.test.js.

t → Filter by test name
    Lets you type part of the test case name (inside test() or it()).
    Example: Type increments → Runs only tests with "increments" in their name.

Enter → Trigger a test run
    Just runs tests again without changing filters.

*/
