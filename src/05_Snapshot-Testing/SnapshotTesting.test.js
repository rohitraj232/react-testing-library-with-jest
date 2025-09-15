import { render } from "@testing-library/react";
import SnapshotTesting from "./SnapshotTesting";

test("snapshot for react component", () => {
  const { asFragment } = render(<SnapshotTesting />);
  expect(asFragment()).toMatchSnapshot();
});
