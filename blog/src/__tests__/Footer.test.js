import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

describe('Unit tests for Footer Component', () => {
  it('Snapshot test for rendering footer', () => {
    const { asFragment } = render(<MemoryRouter><Footer /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Dom test for-> renders the Footer', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    const navbarElement = screen.getByTestId('footer');
    expect(navbarElement).toBeInTheDocument();
  });

  it('Semantic tag name is footer', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    const footerElement = screen.getByTitle('footer');
    expect(footerElement).not.toBeNull();
  });

  it('Number of Socail links 5', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    const tagElements = screen.getAllByTestId('social');
    expect(tagElements.length).toBeGreaterThan(0);
  });

  it('Number of other links to be 18', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    const otherLinks = screen.getAllByTestId('otherLinks');
    expect(otherLinks.length).toBeGreaterThan(0);
  });

  it('renders copyright statement', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    const copyright = screen.getByTestId('copyright');
    expect(copyright.textContent.length).toBeGreaterThan(0);
  });
});
