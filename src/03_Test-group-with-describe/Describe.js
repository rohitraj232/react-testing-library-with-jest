import React from 'react'

const Describe = () => {
  return (
    <div>

        {/* 03. Describe */}
        <input type='text' placeholder='Enter User Name' name='username' id='userid' />

    </div>
  )
}

export default Describe;


/*

  What is describe in Jest?
    - describe() is used to group related tests together.
    - Helps make tests more organized and readable.
    - Does not run tests by itself—it’s just a wrapper for multiple test() or it() blocks.


  Basic Example:
    describe('Math operations', () => {
      test('adds numbers', () => {
        expect(2 + 3).toBe(5);
      });

      test('subtracts numbers', () => {
        expect(5 - 2).toBe(3);
      });
    });


  Can You Nest describe?
  Yes! You can create groups inside groups.

    describe('Math', () => {
      describe('Addition', () => {
        test('adds positive numbers', () => {
          expect(2 + 2).toBe(4);
        });
      });

      describe('Subtraction', () => {
        test('subtracts positive numbers', () => {
          expect(5 - 2).toBe(3);
        });
      });
    });


  Running only one describe block
  Use .only to focus only on that group:

    describe.only('Addition', () => {
      test('adds numbers', () => {
        expect(2 + 3).toBe(5);
      });
    }); 


  Skipping a describe block
  Use .skip to ignore a group:

    describe.skip('Subtraction', () => {
      test('subtracts numbers', () => {
        expect(5 - 2).toBe(3);
      });
    });


  1. beforeEach & afterEach in Detail
  These are lifecycle hooks in Jest that run code before or after each test case in a describe block (or globally).

    beforeEach
      - Runs before each test inside its scope.
      - Used for setup: resetting variables, rendering a fresh component, mocking data.

    afterEach
      - Runs after each test inside its scope.
      - Used for cleanup: clearing mocks, removing DOM elements, resetting states.

  
  2. Difference between describe and test
    describe() → Used to group related tests together.
      - Think of it as a folder for tests.
      - It does not test anything itself.

    test() / it() → Defines an actual test case.
      - Each test() contains code that checks behavior.


  3. When to Use describe and When Not To
    Use describe when:
      - You have multiple related test cases (e.g., for one component or feature).
      - You want to use beforeEach/afterEach for that group only.
      - You want to make the test report more readable.

    Don’t use describe when:
      - You have only one simple test case. 
      - Grouping would make code more complex than needed.



*/