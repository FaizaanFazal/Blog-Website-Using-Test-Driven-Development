import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../utils/wrappertesting';
import BlogDetails from '../components/BlogDetails/BlogDetails';
import { greater } from '../utils/helperfunctions';

describe('Unit tests for BlogDetails Components', () => {
  it('Snapshot test for BlogDetails component', () => {
    const { asFragment } = renderWithProviders(<MemoryRouter><BlogDetails /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Dom test for rendering BlogDetails', () => {
    renderWithProviders(<MemoryRouter><BlogDetails /></MemoryRouter>);
    const detailseElement = screen.getByTestId('details');
    expect(detailseElement).toBeInTheDocument();
  });

  it('Image renders in BlogDetails component', () => {
    renderWithProviders(<MemoryRouter><BlogDetails blogDetails={greater[0]} key={greater.id} /></MemoryRouter>);
    const image = screen.getByTestId('Image');
    expect(image).toBeInTheDocument();
  });

  it('Image have ALT', () => {
    renderWithProviders(<MemoryRouter><BlogDetails blogDetails={greater[0]} key={greater.id} /></MemoryRouter>);
    const img = screen.getByTestId('Image');
    expect(img).toHaveAttribute('alt', greater[0].image.alt);
  });

  it('Correct title is rendered as Heading', () => {
    renderWithProviders(<MemoryRouter><BlogDetails blogDetails={greater[0]} key={greater.id} /></MemoryRouter>);
    const titleheading = screen.getByTestId('titleHeading');
    expect(titleheading).toBe(greater[0].title);
  });

  it('Discription is rendered', () => {
    renderWithProviders(<MemoryRouter><BlogDetails blogDetails={greater[0]} key={greater.id} /></MemoryRouter>);
    const discription = screen.getByTestId('discription');
    expect(discription).toBe(greater[0].content);
  });
});
