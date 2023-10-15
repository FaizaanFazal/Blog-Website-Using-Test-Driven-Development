import { fireEvent } from '@testing-library/react';
import images from './images';

export const isProperImageURL = (url) => {
  /* eslint-disable-next-line no-useless-escape */
  const regex = /^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
  return regex.test(url);
};
export const isProperEmail = (email) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};
export const isProperPass = (pass) => {
  const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return passregex.test(pass);
};
export function backspace(element) {
  let actuallyTyped = element.value;

  const backspaceKey = {
    key: 'Backspace',
    code: 8,
    inputType: 'deleteContentBackward',
  };

  const sharedEventConfig = {
    key: backspaceKey.key,
    charCode: backspaceKey.code,
    keyCode: backspaceKey.code,
    which: backspaceKey.code,
    modifier: backspaceKey.modifier,
  };
  const downEvent = fireEvent.keyDown(element, sharedEventConfig);

  if (downEvent) {
    actuallyTyped = actuallyTyped.slice(0, -1);

    fireEvent.input(element, {
      target: { value: actuallyTyped },
      inputType: backspaceKey.inputType,
      bubbles: true,
      cancelable: true,
    });
  }

  fireEvent.keyUp(element, sharedEventConfig);
}

export const small = [
  {
    id: 1,
    title: '10 Tips for Budget-Friendly Travel',
    author: 'Elena Rodriguez',
    authorImage: { src: images.author1, alt: 'Elena Rodriguez' },
    date: '15 August',
    image: { src: images.blogImg1, alt: '10 Tips for Budget-Friendly Travel Blog Header Image' },
    verified: true,
    slug: 'post1',
    content: "test Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.",
  },
];
export const greater = [
  {
    id: 1,
    title: '10 Tips for Budget-Friendly Travel',
    author: 'Elena Rodriguez',
    authorImage: { src: images.author1, alt: ' Elena' },
    date: '15 August',
    image: { src: images.blogImg1, alt: '10 Tips for Budget-Friendly Travel Blog Header Image' },
    slug: 'post1',
    verified: true,
    content: "Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank. \n \n Traveling on a budget doesnt have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank. \n \n Traveling on a budget doesnt have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank. \n",
  }];
