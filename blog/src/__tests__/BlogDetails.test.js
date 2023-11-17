import React from 'react';
import { screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { renderWithProviders } from '../utils/wrappertesting';
import BlogDetails from '../components/BlogDetails/BlogDetails';

describe('Unit tests for BlogDetails Components', () => {
  it('Snapshot test for BlogDetails component', () => {
    const { asFragment } = renderWithProviders(<BlogDetails />, { route: '/blogdetails/post1' });
    expect(asFragment()).toMatchSnapshot();
  });

  it('Dom test for rendering BlogDetails', () => {
    renderWithProviders(<BlogDetails />, { route: '/blogdetails/post1' });
    const detailseElement = screen.getByTestId('details');
    expect(detailseElement).toBeInTheDocument();
  });

  it('Image renders in BlogDetails component', () => {
    const history = createMemoryHistory();
    history.push('/post1');
    renderWithProviders(<BlogDetails />);
    const image = screen.getByTestId('Image');
    expect(image).toBeInTheDocument();
  });

  it('Image have ALT', () => {
    // const history = createMemoryHistory();
    // history.push('post1');
    // console.log(prettyDOM()); // Can be used to check what is being rendered
    renderWithProviders(<BlogDetails />, { route: '/blogdetails/post1' });
    const img = screen.getByTestId('Image');
    expect(img).toHaveAttribute('alt');
  });

  // it('Correct title is rendered as Heading', () => {
  //   const history = createMemoryHistory({
  //     initialEntries: ['/blogdetails/post1'],
  //     state: { slug: 'post1' },
  //   });
  //   /// / trying Router+provider
  //   renderWithBoth(<BlogDetails history={history} />);
  //   const titleheading = screen.getByTestId('titleHeading');
  //   expect(titleheading.textContent).toBe(greater[0].title);
  // });

  // it('Discription is rendered', () => {
  //   const history = createMemoryHistory();
  //   history.push({ slug: 'post1' });
  //   renderWithProviders(<BlogDetails history={history} />);
  //   const discription = screen.getByTestId('discription');
  //   expect(discription.textContent).toBe(greater[0].content);
  // });
});
