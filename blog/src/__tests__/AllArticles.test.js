import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AllArticles from '../components/AllArticles/AllArticles';
import Card from '../components/RecentArticles/Card';
import { renderWithProviders } from '../utils/wrappertesting';
import { small } from '../utils/helperfunctions';

describe('Unit tests for AllArticles Components', () => {
  it('Snapshot test for All Article component', () => {
    const { asFragment } = renderWithProviders(<MemoryRouter><AllArticles /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Number of Articles should be 3', () => {
    renderWithProviders(<MemoryRouter><AllArticles /></MemoryRouter>);
    const tagElements = screen.getAllByTestId('artice');
    expect(tagElements.length).toBe(5);
  });

  it('View All Button', () => {
    renderWithProviders(<MemoryRouter><AllArticles /></MemoryRouter>);
    const searchbtn = screen.getByText('View all');
    expect(searchbtn).toBeInTheDocument();
  });
// we are using same card component of recentArticle in allArticles
// Below unit tests of Card component are already in recentArticles.test.js that will be separated later when i merge it into dev branch
//   'Image renders in card component' 
//   'Card link has right slug'
//   'Image has ALT'
});
