import React from 'react';
import { screen } from '@testing-library/react';
import Card from '../components/Card/Card';
import { renderWithProviders } from '../utils/wrappertesting';
import { small } from '../utils/helperfunctions';

describe('Unit tests for RecentArticle Components', () => {
  it('Image renders in card component', () => {
    renderWithProviders(<Card />);
    const image = screen.getByTestId('Image');
    expect(image).toBeInTheDocument();
  });

  it('Card link has right slug', () => {
    renderWithProviders(

      <Card blogItemData={small[0]} isCardSm key={small.id} />
      ,
    );
    const slugLink = screen.getByTestId('slugLink');
    expect(slugLink).toHaveAttribute('href', '/blogdetails/post1');
  });

  it('Image have ALT', () => {
    renderWithProviders(<Card blogItemData={small[0]} isCardSm key={small.id} />);
    const img = screen.getByTestId('Image');
    expect(img).toHaveAttribute('alt', small[0].imageAlt);
  });
});
