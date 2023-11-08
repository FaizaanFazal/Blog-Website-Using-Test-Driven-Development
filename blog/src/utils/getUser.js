export const getUser = () => {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      return user;
    } else {
      return null;
    }
  };