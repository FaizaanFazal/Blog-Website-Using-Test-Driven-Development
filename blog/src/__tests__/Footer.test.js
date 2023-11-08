import { screen } from '@testing-library/react';
import Footer from '../components/Footer/Footer';
import { renderWithProviders } from '../utils/wrappertesting';

describe('Unit tests for Footer Component', () => {
  it('Snapshot test for rendering footer', () => {
    const { asFragment } = renderWithProviders(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Dom test for-> renders the Footer', () => {
    renderWithProviders(<Footer />);
    const navbarElement = screen.getByTestId('footer');
    expect(navbarElement).toBeInTheDocument();
  });

  it('Semantic tag name is footer', () => {
    renderWithProviders(<Footer />);
    const footerElement = screen.getByTitle('footer');
    expect(footerElement).not.toBeNull();
  });

  it('Number of Socail links 5', () => {
    renderWithProviders(<Footer />);
    const tagElements = screen.getAllByTestId('social');
    expect(tagElements.length).toBeGreaterThan(0);
  });

  it('Number of other links to be 18', () => {
    renderWithProviders(<Footer />);
    const otherLinks = screen.getAllByTestId('otherLinks');
    expect(otherLinks.length).toBeGreaterThan(0);
  });

  it('renders copyright statement', () => {
    renderWithProviders(<Footer />);
    const copyright = screen.getByTestId('copyright');
    expect(copyright.textContent.length).toBeGreaterThan(0);
  });
});
