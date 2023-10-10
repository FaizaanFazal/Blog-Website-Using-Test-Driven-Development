import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../utils/wrappertesting';
import BlogDetails from '../components/BlogDetails/BlogDetails';
import {createMemoryHistory} from 'history'
import { greater } from '../utils/helperfunctions';
import { renderWithRouterWrapper } from '../utils/renderwithrouter';

describe('Unit tests for BlogDetails Components', () => {
  it('Snapshot test for BlogDetails component', () => {
    const history = createMemoryHistory()
    history.push('/post1')
    const { asFragment } = renderWithProviders(<MemoryRouter><BlogDetails /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Dom test for rendering BlogDetails', () => {
    const history = createMemoryHistory()
    history.push('/post1')
    renderWithProviders(<MemoryRouter><BlogDetails /></MemoryRouter>);
    screen.debug();
    const detailseElement = screen.getByTestId('details');
    expect(detailseElement).toBeInTheDocument();
  });

  it('Image renders in BlogDetails component', () => {
    const history = createMemoryHistory()
    history.push('/post1')
    renderWithProviders(<MemoryRouter><BlogDetails /></MemoryRouter>);
    const image = screen.getByTestId('Image');
    expect(image).toBeInTheDocument();
  });

  it('Image have ALT', () => {
    const history = createMemoryHistory()
    history.push('post1')
    renderWithProviders(<MemoryRouter><BlogDetails /></MemoryRouter>);
    const img = screen.getByTestId('Image');
    expect(img).toHaveAttribute('alt', greater[0].image.alt);
  });

  it('Correct title is rendered as Heading', () => {
    renderWithRouterWrapper(<MemoryRouter><BlogDetails path="/blogdetails/post1" /></MemoryRouter>, {
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
    renderWithProviders(<MemoryRouter><BlogDetails /></MemoryRouter>);
    const discription = screen.getByTestId('discription');
    expect(discription).toBe(greater[0].content);
  });
});
