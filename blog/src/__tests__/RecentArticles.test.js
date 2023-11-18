import React from 'react';
import { screen } from '@testing-library/react';
import RecentArticles from '../components/RecentArticles/RecentArticles';
import { renderWithProviders } from '../utils/wrappertesting';
import App from '../App';
import { renderWithProvidersOnly } from '../utils/wrapProviderOnly';

describe('Unit tests for RecentArticle Components -------', () => {
  it('Snapshot test for Recent Article component', () => {
    const { asFragment } = renderWithProviders(<RecentArticles />);
    expect(asFragment()).toMatchSnapshot();
  });

  //commenting integration test
  // it('Number of Articles should be 3', async () => {
  //   renderWithProviders(<RecentArticles />);
  //   renderWithProvidersOnly(<App />);
  //   const tagElements = screen.findAllByTestId('article');
  //   expect(tagElements.length).toBe(3);
  // });

  it('View All Button', () => {
    renderWithProviders(<RecentArticles />);
    const searchbtn = screen.getByText('View all');
    expect(searchbtn).toBeInTheDocument();
  });
});
