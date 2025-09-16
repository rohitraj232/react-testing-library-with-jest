import Users from "./Users";
import renderer from 'react-test-renderer';

test("Class Component method testing", ()=> {
    const componentData = renderer.create(<Users />).getInstance();
    let a = "test";
    expect(componentData.getUserList(a)).toMatch(a)
});