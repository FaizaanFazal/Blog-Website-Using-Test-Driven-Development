import images from './images';

export const isProperImageURL = (url) => {
  const regex = /^https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp|avif)$/;
  return regex.test(url);
};

export const small = [
  {
    id: 1,
    title: '10 Tips for Budget-Friendly Travel',
    author: 'Elena Rodriguez',
    authorImage: {src: images.author1, alt: "Elena Rodriguez"},
    date: '15 August',
    image: images.blogImg1,
    image:{src: images.blogImg1, alt: "10 Tips for Budget-Friendly Travel Blog Header Image"},
    verified: true,
    slug: 'post1',
    content: "test Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.",
  },
];
export const greater = [
  {
    id: 2,
    title: '10 Tips for Budget-Friendly Travel',
    author: 'Elena Rodriguez',
    authorImage: {src: images.author1, alt: "Elena Rodriguez"},
    date: '15 August',
    image:{src: images.blogImg1, alt: "10 Tips for Budget-Friendly Travel Blog Header Image"},
    verified: true,
    slug: 'post1',
    content: "test Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank ",
  }];
