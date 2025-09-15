import React, { useState } from 'react'

const SnapshotTesting = () => {

    const [data, setData] = useState("");

  return (
    <div>
        <h2> Jest Testing </h2>
        <button onClick={() => setData("hello")}> Updata Data </button>
        <h3> {data} </h3>
    </div>
  )
}

export default SnapshotTesting;



/*
    What is Snapshot Testing?
        - Snapshot testing is a way to save the output (rendered UI) of a component and compare it later.
        - If the UI changes, the test will fail → so you know something changed.
        - Think of it like taking a picture of your component and comparing it later.

    
    How It Works
        - The first time you run the test → Jest saves a snapshot file (__snapshots__) with the rendered component.
        - Next time you run the test → Jest compares the current output with the saved snapshot.
        - If they’re different → the test fails.
        - If the change was expected, you update the snapshot.
        - If the change was unexpected, you fix the code.


    When to Use Snapshot Testing
        ✅ Good for:
            - Checking that UI doesn’t change unexpectedly.
            - Small, stable components.

        ❌ Avoid for:
            - Large, dynamic components (snapshots become huge & useless).
            - Components that change often.


    What we should test
        - Testing component rendering
        - Ul elements that we write
        - Functions which we write
        - API testing.
        - Event testing.
        - Props and states
        - UI condition testing | Ul state testing


    Avoid testing for:
        - External Ul library code.
        - No need to test default function of JS and react
        - Sometime we should mock function rather than testing it in details.

*/