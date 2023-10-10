import { screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Featured from '../components/Featured/Featured';
import { renderWithProviders } from '../utils/wrappertesting';
import { isProperImageURL, small, greater } from '../utils/helperfunctions';
import CardWide from '../components/Featured/CardWide';

describe('Unit tests for Featured component', () => {
  it('Dom test for rendering Featured', () => {
    renderWithProviders(<MemoryRouter><Featured /></MemoryRouter>);
    const featureElement = screen.getByTestId('featured');
    expect(featureElement).toBeInTheDocument();
  });

  it('snapshot test to check Featured component', () => {
    const { asFragment } = renderWithProviders(<MemoryRouter><Featured /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Image renders and src is correct', () => {
    renderWithProviders(<MemoryRouter><Featured /></MemoryRouter>);
    const image = screen.getByTestId('FeaturedImg');
    expect(image).toBeInTheDocument();
    const imageSrc = image.src;
    expect(isProperImageURL(imageSrc)).toBe(true);
  });

  it('Image Alternative (alt) is correct', () => {
    renderWithProviders(<MemoryRouter><CardWide blogItemData={greater[0]} /></MemoryRouter>);
    const Featuredimage = screen.getByTestId('FeaturedImg');
    expect(Featuredimage).toHaveAttribute('alt', greater[0].image.alt);
  });

  it('Heading is rendered', () => {
    renderWithProviders(<MemoryRouter><Featured /></MemoryRouter>);
    const heading = screen.getByTestId('headingfeatured');
    expect(heading).toBeInTheDocument();
  });

  it('Summary  with greater than 250 chars', async () => {
    renderWithProviders(<MemoryRouter><CardWide blogItemData={greater[0]} /></MemoryRouter>);
    const summaryG = screen.getByTestId('featureSummary');
    const anchorTagElementsG = within(summaryG).queryAllByTestId('slugLink');
    expect(anchorTagElementsG.length).toBe(1);
  });

  it('Summary with less than 250 chars', () => {
    renderWithProviders(<MemoryRouter><CardWide blogItemData={small[0]} /></MemoryRouter>);
    const summarys = screen.getByTestId('featureSummary');
    const anchorTagElements = within(summarys).queryAllByTestId('slugLink');
    expect(anchorTagElements.length).toBe(0);
  });

  it('Date is rendered', () => {
    renderWithProviders(<MemoryRouter><Featured /></MemoryRouter>);
    const featureDate = screen.getByTestId('featureDate');
    expect(featureDate).toBeInTheDocument();
  });

  it('Check view more slug link to be correct', () => {
    renderWithProviders(<MemoryRouter><CardWide blogItemData={greater[0]} /></MemoryRouter>);
    const slugLink = screen.getByTestId('slugLink');
    expect(slugLink).toHaveAttribute('href', '/blogdetails/post1');
  });
});
