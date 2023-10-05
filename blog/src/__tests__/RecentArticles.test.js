import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecentArticles from '../components/RecentArticles/RecentArticles';
import Card from '../components/RecentArticles/Card';
import { renderWithProviders } from '../utils/wrappertesting';
import { small } from '../utils/helperfunctions';

describe('Unit tests for RecentArticle Components', () => {
  it('Snapshot test for Recent Article component', () => {
    const { asFragment } = renderWithProviders(<MemoryRouter><RecentArticles /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Image renders in card component', () => {
    renderWithProviders(<MemoryRouter><Card /></MemoryRouter>);
    const image = screen.getByTestId('Image');
    expect(image).toBeInTheDocument();
  });

  it('Card link has right slug', () => {
    renderWithProviders(
      <MemoryRouter>
        <Card blogItemData={small[0]} isCardSm key={small.id} />
      </MemoryRouter>,
    );
    const slugLink = screen.getByTestId('slugLink');
    expect(slugLink).toHaveAttribute('href', '/blogdetails/post1');
  });

  it('Image have ALT', () => {
    renderWithProviders(<MemoryRouter><Card /></MemoryRouter>);
    const img = screen.getByTestId('Image');
    expect(img).toHaveAttribute('alt', 'Article');
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
