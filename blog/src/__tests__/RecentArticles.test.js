import { screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecentArticles from '../components/RecentArticles/RecentArticles';
import Card from '../components/RecentArticles/Card';
import images from '../utils/images';
import { renderWithProviders }  from '../utils/wrappertesting';

const small = [ //will be in utils folder later
    {
        id: 1,
        title: "10 Tips for Budget-Friendly Travel",
        author: "Elena Rodriguez",
        authorImage: images.author1,
        date: "15 August",
        image: images.blogImg1,
        verified:true,    
        slug:'post1', 
        content: "test Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank."
    }
]

describe("Unit tests for RecentArticle Components",()=>{

  it('Snapshot test for Recent Article component',()=>{
    const { asFragment } = renderWithProviders(<MemoryRouter><RecentArticles/></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  })

  it('Image renders in card component', () => {
    renderWithProviders(<MemoryRouter><Card/></MemoryRouter>);
    const image = screen.getByTestId('Image');
    expect(image).toBeInTheDocument();

  });

  it('Card link has right slug', () => {
    renderWithProviders(<MemoryRouter><Card blogItemData = {small[0]} isCardSm = { true } key = {small.id}/></MemoryRouter>);
    const slugLink = screen.getByTestId('slugLink');
    expect(slugLink).toHaveAttribute('href', '/blogs/post1')

  });
    
  it('Image have ALT', () => {
    renderWithProviders(<MemoryRouter><Card/></MemoryRouter>);
    const img= screen.getByTestId('Image');
    expect(img).toHaveAttribute('alt', 'Article')
  });

  it('Number of Articles should be 3', () => {
    renderWithProviders(<MemoryRouter><RecentArticles/></MemoryRouter>);
    const tagElements = screen.getAllByTestId('artice');
    expect(tagElements.length).toBe(3);
  });

  it('View All Button',()=>{
    renderWithProviders(<MemoryRouter><RecentArticles/></MemoryRouter>);
    const searchbtn = screen.getByText('View all');
    expect(searchbtn).toBeInTheDocument();
  })
})