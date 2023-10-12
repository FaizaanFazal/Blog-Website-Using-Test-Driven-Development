import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/wrappertesting';
import CreatePost from "../components/CreatePost/CreatePost"

describe('Unit tests for CreatePost component', () => {
  it('Dom test for rendering CreatePost', () => {
    renderWithProviders(<CreatePost />);
    const featureElement = screen.getByTestId('createpost');
    expect(featureElement).toBeInTheDocument();
  });

  it('snapshot test to check CreatePost component', () => {
    const { asFragment } = renderWithProviders(<CreatePost />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Updates input value on change in title', () => {
    renderWithProviders(<CreatePost />);
    const inputTitle = screen.getByTestId('inputtitle');
    fireEvent.change(inputTitle, { target: { value: 'test' } });
    expect(inputTitle.value).toBe('test');
  });

  it('Updates input value on change in Content', () => {
    renderWithProviders(<CreatePost />);
    const inputcontent = screen.getByTestId('inputcontent');
    fireEvent.change(inputcontent, { target: { value: 'test' } });
    expect(inputcontent.value).toBe('test');
  });

  it('Submit button is rendered', () => {
    renderWithProviders(<CreatePost />);
    const Submitbtn = screen.getByTestId('submitbtn');
    expect(Submitbtn).toBeInTheDocument();
  });

});
