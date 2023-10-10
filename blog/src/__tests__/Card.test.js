import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from '../components/Card/Card';
import { renderWithProviders } from '../utils/wrappertesting';
import { small } from '../utils/helperfunctions';

describe('Unit tests for RecentArticle Components', () => {
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
    renderWithProviders(<MemoryRouter><Card blogItemData={small[0]} isCardSm key={small.id} /></MemoryRouter>);
    const img = screen.getByTestId('Image');
    expect(img).toHaveAttribute('alt', small[0].image.alt);
  });
});
