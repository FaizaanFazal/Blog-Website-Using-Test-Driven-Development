
export const isProperImageURL = (url) => {
    const regex = /^https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp|avif)$/;
    return regex.test(url);
  };