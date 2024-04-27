// import { add } from "./App";

const add = jest.fn(() => 3); // mock function for mocking add. used when we dont have accsss / to willing to use to that function but need it to test integrated functions

test("Fake Test", () => {
  expect(true).toBe(true); //assert true and except it to be true;
});
test("check sum of two number", () => {
  expect(add(1, 2)).toBeGreaterThan(2);
  expect(add).toHaveBeenCalledWith(1, 2);
  expect(add(4, 2)).toBe(6);
  expect(add).toHaveBeenCalledTimes(2);
});
