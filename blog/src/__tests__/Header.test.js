import { render,fireEvent, screen} from '@testing-library/react';
import Header from '../components/Header/Header';
import { MemoryRouter } from 'react-router-dom';


describe("Unit tests for Header",()=>{
    
  it('Updates input value on change in search bar', () => {
   render(<MemoryRouter><Header/></MemoryRouter>);
    const inputSearch=screen.getByTestId('inputSearch');
    fireEvent.change(inputSearch,{target:{value:"test"}})
    expect(inputSearch.value).toBe("test")
  
  });

  it('Number of tags should be 3', () => {
    render(<MemoryRouter><Header/></MemoryRouter>);
    const tagElements = screen.getAllByTestId('tag');
    expect(tagElements.length).toBe(3);
  });

})