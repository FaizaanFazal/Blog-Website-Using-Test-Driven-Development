import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Featured from '../components/Featured/Featured';

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
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.png');
  });

  it('Image Alternative (alt) is correct', () => {
    render(<MemoryRouter><Featured/></MemoryRouter>);
    const image = screen.getByAltText('Featured Image');
    expect(image).toBeInTheDocument();
  });

  it('Heading is rendered', () => {
    render(<MemoryRouter><Featured/></MemoryRouter>);
    const heading = screen.getByText('10 Tips for budget friendly travel');
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