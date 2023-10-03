import { render, screen, within} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Featured from '../components/Featured/Featured';

import {isProperImageURL,small,greater} from '../utils/helperfunctions'
import CardWide from '../components/Featured/CardWide';


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
    expect(Featuredimage).toHaveAttribute('alt', 'Featured')
  });

  it('Heading is rendered', () => {
    render(<MemoryRouter><Featured/></MemoryRouter>);
    const heading = screen.getByTestId('headingfeatured');
    expect(heading).toBeInTheDocument();
  });

  it('Summary  with greater than 250 chars',async () => {
    render(<MemoryRouter><CardWide blogItemData = { greater} /></MemoryRouter>);
    const summaryG = screen.getByTestId('featureSummary');
    const anchorTagElementsG =  within(summaryG).queryAllByTestId('slugLink');
    expect(anchorTagElementsG.length).toBe(1);
  });

  it('Summary with less than 250 chars', () => {
    render(<MemoryRouter><CardWide blogItemData = { small} /></MemoryRouter>);
    const summarys = screen.getByTestId('featureSummary');
    const anchorTagElements = within(summarys).queryAllByTestId('slugLink');
    expect(anchorTagElements.length).toBe(0);
  });

  it('Date is rendered', () => {
    render(<MemoryRouter><Featured/></MemoryRouter>);
    const featureDate = screen.getByTestId('featureDate');
    expect(featureDate).toBeInTheDocument();
  });

  it('Check view more slug link to be correct', () => {
    render(<MemoryRouter><CardWide blogItemData = { greater} /></MemoryRouter>);
    const slugLink = screen.getByTestId('slugLink');
    expect(slugLink).toHaveAttribute('href', '/blogs/post1')
  });

  test('isProperImageURL-> returns false for incorrect URL', () => {
    expect(isProperImageURL('example.com/image')).toBeFalsy();
  });

  test('isProperImageURL-> returns true for correct URL', () => {
    expect(isProperImageURL('https://example.com/image.jpg')).toBeTruthy();
  });

  
})