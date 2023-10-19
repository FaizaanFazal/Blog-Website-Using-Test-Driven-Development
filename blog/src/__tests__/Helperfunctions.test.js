import { isProperEmail, isProperImageURL, isProperPass } from '../utils/helperfunctions';

describe('Tests for isProperImageURL functions', () => {
  test('isProperImageURL-> returns false for incorrect URL', () => {
    expect(isProperImageURL('example.com')).toBeFalsy();
  });

  test('isProperImageURL-> returns true for correct URL', () => {
    expect(isProperImageURL('https://example.com/image.jpg')).toBeTruthy();
  });
});

describe('Tests for isProperEmail function', () => {
  test('isProperEmail-> returns true for correct email', () => {
    expect(isProperEmail('faizaan@gmail.com')).toBeTruthy();
  });
  test('isProperEmail-> returns false for in-correct email', () => {
    expect(isProperEmail('faizaan@gmailcom')).toBeFalsy();
  });
});

describe('Tests for isProperPass function', () => {
  test('isProperPass-> returns true for correct password', () => {
    expect(isProperPass('K@1qwert')).toBeTruthy();
  });
  test('isProperPass-> returns false for in-correct password', () => {
    expect(isProperPass('K@qwertyu')).toBeFalsy(); // missing digit
    expect(isProperPass('K1qwertyu')).toBeFalsy(); // missing special character
    expect(isProperPass('1@qwertyu')).toBeFalsy(); // misssing capital letter
    expect(isProperPass('K@1qwe')).toBeFalsy(); // min length should be 8
  });
});
