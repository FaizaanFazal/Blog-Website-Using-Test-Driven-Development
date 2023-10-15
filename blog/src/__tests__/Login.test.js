import React from 'react';
import { fireEvent, screen,userEvent } from '@testing-library/react';
import { renderWithProviders } from '../utils/wrappertesting';
import Login from '../components/Login/Login';
import { backspace } from '../utils/helperfunctions';
import { debug } from 'console';

describe('Unit tests for Login Components', () => {
  it('Snapshot test for Login component', () => {
    const { asFragment } = renderWithProviders(<Login />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Dom test for-> renders the Login', () => {
    renderWithProviders(<Login />);
    const loginForm = screen.getByTestId('loginForm');
    expect(loginForm).toBeInTheDocument();
  });

  it('Email input changes on input', () => {
    renderWithProviders(<Login />);
    const emailid = screen.getByTestId('inputEmail');
    fireEvent.change(emailid, { target: { value: 'test@gmail.com' } });
    expect(emailid.value).toBe('test@gmail.com');
  });

  it('Password input changes on input and has type password', () => {
    renderWithProviders(<Login />);
    const pass = screen.getByTestId('inputPass');
    fireEvent.change(pass, { target: { value: 'qwe123' } });
    expect(pass.value).toBe('qwe123');
    expect(pass.type).toBe('password');
  });

  it('Login Button', () => {
    renderWithProviders(<Login />);
    const loginbtn = screen.getByTestId('loginbtn');
    expect(loginbtn).toBeInTheDocument();
  });

  it('Validations Checking on Email', () => {
    renderWithProviders(<Login />);
    const inputEmail = screen.getByTestId('inputEmail');
    fireEvent.change(inputEmail, { target: { value: 'faizaan@gmailcom' } }); // wrong email format should raise error
    const errorEmail = screen.getByTestId('errorEmail');
    expect(errorEmail).toBeInTheDocument();
    fireEvent.change(inputEmail, { target: { value: 'faizaan@gmail.com' } }); // error should not be there
    expect(errorEmail).not.toBeInTheDocument();
    fireEvent.keyDown(inputEmail, 'Backspace');
    fireEvent.keyUp(inputEmail, 'Backspace'); // removes last character
    fireEvent.keyDown(inputEmail, 'Backspace');
    fireEvent.keyUp(inputEmail, 'Backspace'); // removes last character
    fireEvent.keyDown(inputEmail, 'Backspace');
    fireEvent.keyUp(inputEmail, 'Backspace'); // removes last character
    screen.debug()
    expect(errorEmail).toBeInTheDocument();
    
  });

  it('Validations Checking on Password', () => {
    renderWithProviders(<Login />);
    const inputPass = screen.getByTestId('inputPass');
    fireEvent.change(inputPass, { target: { value: 'qwe123' } }); // less than 8 character, no special/capital letter error shoul be in document
    const errorPass = screen.getByTestId('errorPass');
    expect(errorPass).toBeInTheDocument();
    fireEvent.change(inputPass, { target: { value: 'Qwer@124' } }); // conditions satified should not be there
    expect(errorPass).not.toBeInTheDocument();

    backspace(inputPass);
    userEvent.keyboard('{Escape}');
    // remove last character  min chars become 7
    expect(errorPass).toBeInTheDocument();
  });
});
