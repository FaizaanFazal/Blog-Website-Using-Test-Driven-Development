import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecentArticles from '../components/RecentArticles/RecentArticles';
import Card from '../components/RecentArticles/Card';


describe("Unit tests for RecentArticle Components",()=>{

  it('Snapshot test for Recent Article component',()=>{
    const { asFragment } = render(<MemoryRouter><RecentArticles/></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  })

  it('Image renders in card component', () => {
    render(<MemoryRouter><Card/></MemoryRouter>);
    const image = screen.getByTestId('Image');
    expect(image).toBeInTheDocument();

  });
    
  it('Image have ALT', () => {
   render(<MemoryRouter><Card/></MemoryRouter>);
    const img= screen.getByTestId('Image');
    expect(img).toHaveAttribute('alt', 'Article')
  });

  it('Number of Articles should be 3', () => {
    render(<MemoryRouter><RecentArticles/></MemoryRouter>);
    const tagElements = screen.getAllByTestId('artice');
    expect(tagElements.length).toBe(3);
  });

  it('View All Button',()=>{
    render(<MemoryRouter><RecentArticles/></MemoryRouter>);
    const searchbtn = screen.getByText('View all');
    expect(searchbtn).toBeInTheDocument();
  })
})