import React from 'react';
import Featured from '../components/Featured/Featured';
import RecentArticles from '../components/RecentArticles/RecentArticles';
import AllArticles from '../components/AllArticles/AllArticles';

export default function Main() {
  return (
    <>
      <Featured />
      <RecentArticles />
      <br />
      <AllArticles />
      <br />
    </>
  );
}
