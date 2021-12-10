import reducer, { increment } from './homeSlice';

const initialState = {
  value: 0,
};

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('should handle an increment', () => {
  expect(reducer(initialState, increment())).toEqual({
    value: 1,
  });
});
