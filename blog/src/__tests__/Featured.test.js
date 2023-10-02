import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Featured from '../components/Featured/Featured';

import {isProperImageURL} from '../utils/helperfunctions'

describe("Unit tests for Featured component",()=>{
  
  it('Dom test for rendering Featured', () => {
    render(<MemoryRouter><Featured/></MemoryRouter>);
    const featureElement = screen.getByRole('featured');
    expect(featureElement).toBeInTheDocument();
  });

  it('snapshot test to check Featured component', () => {
    const { asFragment } = render(<MemoryRouter><Featured/></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Image renders and src is correct', () => {
    render(<MemoryRouter><Featured/></MemoryRouter>);
    const image = screen.getByTestId('FeaturedImg');
    expect(image).toBeInTheDocument();
    const imageSrc = image.src;
    expect(isProperImageURL(imageSrc)).toBe(true);
  });

  it('Image Alternative (alt) is correct', () => {
    render(<MemoryRouter><Featured/></MemoryRouter>);
    const Featuredimage = screen.getByTestId('FeaturedImg');
    expect(Featuredimage).toHaveAttribute('alt', 'Featured image')
  });

  it('Heading is rendered', () => {
    render(<MemoryRouter><Featured/></MemoryRouter>);
    const heading = screen.getByTestId('headingfeatured');
    expect(heading).toBeInTheDocument();
  });

  it('Summary is limited to a 250 characters', () => {
    render(<MemoryRouter><Featured/></MemoryRouter>);
    const summary = screen.getByTestId('featureSummary');
    expect(summary.textContent.length).toBeLessThanOrEqual(250);
  });

  it('Date is rendered', () => {
    render(<MemoryRouter><Featured/></MemoryRouter>);
    const featureDate = screen.getByTestId('featureDate');
    expect(featureDate).toBeInTheDocument();
  });

  
})