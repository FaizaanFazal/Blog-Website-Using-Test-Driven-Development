import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecentArticles from '../components/RecentArticles/RecentArticles';
import { renderWithProviders } from '../utils/wrappertesting';


describe('Unit tests for RecentArticle Components', () => {
  it('Snapshot test for Recent Article component', () => {
    const { asFragment } = renderWithProviders(<MemoryRouter><RecentArticles /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Number of Articles should be 3', () => {
    renderWithProviders(<MemoryRouter><RecentArticles /></MemoryRouter>);
    const tagElements = screen.getAllByTestId('artice');
    expect(tagElements.length).toBe(3);
  });

  it('View All Button', () => {
    renderWithProviders(<MemoryRouter><RecentArticles /></MemoryRouter>);
    const searchbtn = screen.getByText('View all');
    expect(searchbtn).toBeInTheDocument();
  });
});
