import React, { useState } from 'react'

const EventFire = () => {

  const[inputData, setInputData] = useState("");
  const [data, setData] = useState("");

  return (
    <div>
      
        {/* 04. Test on change event */}
        <h2> Test1: Test OnChange Event with Input Text </h2>
        <input type='text' value={inputData} onChange={(e) => setInputData(e.target.value+"test")} />

        <br />
        <br />

        {/* Click event test case with button  */}
        <h3> Test2: Test Click Event with Button </h3>
        <button onClick={() => setData("updated data")}> Update Data </button>
        <h4> {data} </h4>

    </div>
  )
}

export default EventFire;


/*

  1. beforeAll
    - Runs once before all tests in a file or describe block.
    - Good for one-time setup (e.g., connect to database, create test data).

    ✅ Example:

    beforeAll(() => {
      console.log('Run once before all tests');
    });

    test('Test 1', () => {
      expect(2 + 2).toBe(4);
    });

    test('Test 2', () => {
      expect(3 + 3).toBe(6);
    });
    👉 The message runs only once before Test 1 starts.



  2. beforeEach
    - Runs before every single test case.
    - Good for resetting variables, rendering fresh components, or mocks.

    ✅ Example:

    let count;

    beforeEach(() => {
      count = 0; // reset before each test
    });

    test('increments count', () => {
      count++;
      expect(count).toBe(1);
    });

    test('decrements count', () => {
      count--;
      expect(count).toBe(-1);
    });
    👉 count resets to 0 before each test.



    3. afterEach
      - Runs after every single test case.
      - Good for cleaning up after a test (like clearing DOM, resetting mocks, closing connections).

      ✅ Example:

      afterEach(() => {
        console.log('Cleaning up after test');
      });

      test('first test', () => {
        expect(true).toBeTruthy();
      });

      test('second test', () => {
        expect(false).toBeFalsy();
      });
      👉 The message prints after each test.



      4. afterAll
        - Runs once after all tests in a file or block.
        - Good for final cleanup (e.g., closing database connection, deleting test data).

        ✅ Example:

        afterAll(() => {
          console.log('Run once after all tests');
        });

        test('test A', () => {
          expect(10).toBe(10);
        });

        test('test B', () => {
          expect(20).toBe(20);
        });
        👉 Message runs once after everything is finished.



        📌 Quick Summary

          - beforeAll → Run once before all tests.
          - beforeEach → Run before every test.
          - afterEach → Run after every test.
          - afterAll → Run once after all tests.

*/
