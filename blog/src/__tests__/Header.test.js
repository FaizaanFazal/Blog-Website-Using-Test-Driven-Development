import { render, screen} from '@testing-library/react';
import Header from '../components/Header/Header';
import { MemoryRouter } from 'react-router-dom';


describe("Unit tests for Header",()=>{
    
  it('Updates input value on change in search bar', () => {
    const {getByTestId}=render(<MemoryRouter><Header/></MemoryRouter>);
    const inputSearch=getByTestId('inputSearch');

    fireEvent.change(inputTitle,{target:{value:"test"}})
    expect(inputSearch.value).toBe("test")
  
  });

  it('Number of tags should be 3', () => {
    const { getAllByTestId } =render(<MemoryRouter><Header/></MemoryRouter>);
    const tagElements = getAllByTestId('tag');
    expect(tagElements.length).toBe(3);
  });

})