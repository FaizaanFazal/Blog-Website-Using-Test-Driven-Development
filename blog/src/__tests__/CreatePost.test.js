import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/wrappertesting';
import CreatePost from '../components/CreatePost/CreatePost';
import { greater, isProperImageURL } from '../utils/helperfunctions';

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

  it('Image displays/hides after changing url and src is correct', () => {
    renderWithProviders(<CreatePost />);
    const imgInput = screen.getByTestId('imgInput');
    expect(imgInput).toBeInTheDocument();
    fireEvent.change(imgInput, { target: { value: 'https://picsum.photos/id/866/4704/3136' } });
    const img = screen.getByTestId('Image');
    expect(img).toBeInTheDocument();
    const imageSrc = img.src;
    expect(isProperImageURL(imageSrc)).toBe(true);
    fireEvent.change(imgInput, { target: { value: 'picsum.photos/id/866/4704/3136' } });
    expect(img).not.toBeInTheDocument(); // image should not appear if url is incorrect
  });

  it('Updates input value on change in slug', () => {
    renderWithProviders(<CreatePost />);
    const inputslug = screen.getByTestId('inputslug');
    fireEvent.change(inputslug, { target: { value: 'test' } });
    expect(inputslug.value).toBe('test');
  });

  it('Validations Checking on title', () => {
    renderWithProviders(<CreatePost />);
    const inputtitle = screen.getByTestId('inputtitle');
    fireEvent.change(inputtitle, { target: { value: 'Ti' } }); // less than 8 character error shoul be in document
    const errorTitle = screen.getByTestId('errorTitle');
    expect(errorTitle).toBeInTheDocument();
    fireEvent.change(inputtitle, { target: { value: 'Title of the Day' } }); // error should not be there
    expect(errorTitle).not.toBeInTheDocument();
  });

  it('Validations Checking on Content', () => {
    renderWithProviders(<CreatePost />);
    const inputcontent = screen.getByTestId('inputcontent');
    fireEvent.change(inputcontent, { target: { value: 'lest than 100 chars' } }); // less than 100 character error should be in document
    const errorContent = screen.getByTestId('errorContent');
    expect(errorContent).toBeInTheDocument();
    fireEvent.change(inputcontent, { target: { value: greater[0].content } }); // greater than 100 charaters error should not be there
    expect(errorContent).not.toBeInTheDocument();
  });
  it('Validations Checking on slug', () => {
    renderWithProviders(<CreatePost />);
    const inputslug = screen.getByTestId('inputslug');
    fireEvent.change(inputslug, { target: { value: 'abcd' } }); // less than 5 character error should be in document
    const errorSlug = screen.getByTestId('errorSlug');
    expect(errorSlug).toBeInTheDocument();
    fireEvent.change(inputslug, { target: { value: 'abcde' } }); // min 5 charaters error should not be there
    expect(errorSlug).not.toBeInTheDocument();
  });
});
