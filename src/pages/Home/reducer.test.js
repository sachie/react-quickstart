import reducer from './reducer';

describe('home reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle a test action', () => {
    expect(
      reducer([], {
        type: 'home/some/action',
      }),
    ).toEqual({});
  });
});
