import { isProperImageURL } from '../utils/helperfunctions';

describe('Tests for isProperImageURL functions', () => {
  test('isProperImageURL-> returns false for incorrect URL', () => {
    expect(isProperImageURL('example.com/image')).toBeFalsy();
  });

  test('isProperImageURL-> returns true for correct URL', () => {
    expect(isProperImageURL('https://example.com/image.jpg')).toBeTruthy();
  });
});
