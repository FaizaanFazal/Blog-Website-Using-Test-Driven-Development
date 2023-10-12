import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/wrappertesting';
import CreatePost from '../components/CreatePost/CreatePost';
import { isProperImageURL } from '../utils/helperfunctions';

describe('Unit tests for CreatePost component', () => {
  it('Dom test for rendering CreatePost', () => {
    renderWithProviders(<CreatePost />);
    const createElement = screen.getByTestId('createpost');
    expect(createElement).toBeInTheDocument();
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

  it('Image renders after inserting url and src is correct', () => {
    renderWithProviders(<CreatePost />);
    const imgInput = screen.getByTestId('imgInput');
    expect(imgInput).toBeInTheDocument();
    fireEvent.change(imgInput, { target: { value: 'https://picsum.photos/id/866/4704/3136' } });
    const img = screen.getByTestId('Image');
    expect(img).toBeInTheDocument();
    const imageSrc = img.src;
    expect(isProperImageURL(imageSrc)).toBe(true);
  });

  it('Updates input value on change in slug', () => {
    renderWithProviders(<CreatePost />);
    const inputslug = screen.getByTestId('inputslug');
    fireEvent.change(inputslug, { target: { value: 'test' } });
    expect(inputslug.value).toBe('test');
  });
});
