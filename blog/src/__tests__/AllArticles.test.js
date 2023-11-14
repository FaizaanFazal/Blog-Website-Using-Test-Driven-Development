import { screen,waitFor,waitForNextUpdate } from '@testing-library/react';
import AllArticles from '../components/AllArticles/AllArticles';
import { renderWithProviders } from '../utils/wrappertesting';

describe('Unit tests for AllArticles Components', () => {
  it('Snapshot test for All Article component', ( ) => {
    const { asFragment } = renderWithProviders(<AllArticles />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Number of Articles should be 3', async () => {
    renderWithProviders(<AllArticles />);
    await waitFor(() => {
      const tagElements = screen.getAllByTestId('article');
      expect(tagElements.length).toBeGreaterThan(0);
    });
   
  });

  it('View All Button', () => {
    renderWithProviders(<AllArticles />);
    const searchbtn = screen.getByText('View all');
    expect(searchbtn).toBeInTheDocument();
  });
// we are using same card component of recentArticle in allArticles
// Below unit tests of Card component are already in recentArticles.test.js
// that will be separated later when i merge it into dev branch
//   'Image renders in card component'
//   'Card link has right slug'
//   'Image has ALT'
});
