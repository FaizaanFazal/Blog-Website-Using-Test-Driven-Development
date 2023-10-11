import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { renderWithProviders } from '../utils/wrappertesting';
import BlogDetails from '../components/BlogDetails/BlogDetails';
import { greater } from '../utils/helperfunctions';

describe('Unit tests for BlogDetails Components', () => {
  it('Snapshot test for BlogDetails component', () => {
    const { asFragment } = renderWithProviders(<BlogDetails />, { route: '/blogdetails/post1' });
    expect(asFragment()).toMatchSnapshot();
  });

  it('Dom test for rendering BlogDetails', () => {
    renderWithProviders(<BlogDetails />, {route: '/blogdetails/post1'});
    const detailseElement = screen.getByTestId('details');
    expect(detailseElement).toBeInTheDocument();
  });

  it('Image renders in BlogDetails component', () => {
    const history = createMemoryHistory()
    history.push('/post1')
    renderWithProviders(<BlogDetails />);
    const image = screen.getByTestId('Image');
    expect(image).toBeInTheDocument();
  });

  it('Image have ALT', () => {
    const history = createMemoryHistory()
    history.push('post1')
    renderWithProviders(<BlogDetails />);
    const img = screen.getByTestId('Image');
    expect(img).toHaveAttribute('alt', greater[0].image.alt);
  });

  it('Correct title is rendered as Heading', () => {
    renderWithProviders(<BlogDetails path="/blogdetails/post1" />, {
      // and pass the parameter value on the route config
      route: '/blogdetails/post1',
    })
    // renderWithProviders(<MemoryRouter><BlogDetails /></MemoryRouter>);
    const titleheading = screen.getByTestId('titleHeading');
    expect(titleheading).toBe(greater[0].title);
  });

  it('Discription is rendered', () => {
    const history = createMemoryHistory()
    history.push('/post1')
    renderWithProviders(<BlogDetails />);
    const discription = screen.getByTestId('discription');
    expect(discription.textContent).toBe(greater[0].content);
  });
});
