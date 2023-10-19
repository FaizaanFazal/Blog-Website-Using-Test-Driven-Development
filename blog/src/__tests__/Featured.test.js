import { screen, within } from '@testing-library/react';
import Featured from '../components/Featured/Featured';
import { renderWithProviders } from '../utils/wrappertesting';
import { isProperImageURL, small, greater } from '../utils/helperfunctions';
import CardWide from '../components/Featured/CardWide';

describe('Unit tests for Featured component', () => {
  it('Dom test for rendering Featured', () => {
    renderWithProviders(<Featured />);
    const featureElement = screen.getByTestId('featured');
    expect(featureElement).toBeInTheDocument();
  });

  it('snapshot test to check Featured component', () => {
    const { asFragment } = renderWithProviders(<Featured />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Image renders and src is correct', () => {
    renderWithProviders(<Featured />);
    const image = screen.getByTestId('FeaturedImg');
    expect(image).toBeInTheDocument();
    const imageSrc = image.src;
    expect(isProperImageURL(imageSrc)).toBe(true);
  });

  it('Image Alternative (alt) is correct', () => {
    renderWithProviders(<CardWide blogItemData={greater[0]} />);
    const Featuredimage = screen.getByTestId('FeaturedImg');
    expect(Featuredimage).toHaveAttribute('alt', greater[0].image.alt);
  });

  it('Heading is rendered', () => {
    renderWithProviders(<Featured />);
    const heading = screen.getByTestId('headingfeatured');
    expect(heading).toBeInTheDocument();
  });

  it('Summary  with greater than 250 chars', async () => {
    renderWithProviders(<CardWide blogItemData={greater[0]} />);
    const summaryG = screen.getByTestId('featureSummary');
    const anchorTagElementsG = within(summaryG).queryAllByTestId('slugLink');
    expect(anchorTagElementsG.length).toBe(1);
  });

  it('Summary with less than 250 chars', () => {
    renderWithProviders(<CardWide blogItemData={small[0]} />);
    const summarys = screen.getByTestId('featureSummary');
    const anchorTagElements = within(summarys).queryAllByTestId('slugLink');
    expect(anchorTagElements.length).toBe(0);
  });

  it('Date is rendered', () => {
    renderWithProviders(<Featured />);
    const featureDate = screen.getByTestId('featureDate');
    expect(featureDate).toBeInTheDocument();
  });

  it('Check view more slug link to be correct', () => {
    renderWithProviders(<CardWide blogItemData={greater[0]} />);
    const slugLink = screen.getByTestId('slugLink');
    expect(slugLink).toBeInTheDocument();
  });
});
