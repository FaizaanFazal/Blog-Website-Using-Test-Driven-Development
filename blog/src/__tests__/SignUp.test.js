import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/wrappertesting';
import { backspace } from '../utils/helperfunctions';
import SignUp from '../components/SignUp/SignUp';

describe('Unit tests for SignUp Components', () => {
  it('Snapshot test for SignUp component', () => {
    const { asFragment } = renderWithProviders(<SignUp />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Dom test for-> renders the SignUp', () => {
    renderWithProviders(<SignUp />);
    const SignupForm = screen.getByTestId('SignupForm');
    expect(SignupForm).toBeInTheDocument();
  });

  it('Name input changes on input', () => {
    renderWithProviders(<SignUp />);
    const inputName = screen.getByTestId('inputName');
    fireEvent.change(inputName, { target: { value: 'Faizaan' } });
    expect(inputName.value).toBe('Faizaan');
  });

  it('Email input changes on input', () => {
    renderWithProviders(<SignUp />);
    const emailid = screen.getByTestId('inputEmail');
    fireEvent.change(emailid, { target: { value: 'test@gmail.com' } });
    expect(emailid.value).toBe('test@gmail.com');
  });

  it('Password input changes on input and has type password', () => {
    renderWithProviders(<SignUp />);
    const pass = screen.getByTestId('inputPass');
    fireEvent.change(pass, { target: { value: 'qwe123' } });
    expect(pass.value).toBe('qwe123');
    expect(pass.type).toBe('password');
  });

  it('SignUp Button', () => {
    renderWithProviders(<SignUp />);
    const signupBtn = screen.getByTestId('signupBtn');
    expect(signupBtn).toBeInTheDocument();
  });

  it('Validations Checking on Name', () => {
    renderWithProviders(<SignUp />);
    const inputName = screen.getByTestId('inputName');
    fireEvent.change(inputName, { target: { value: 'Faizaan12' } }); // wrong name format. only letters allowed
    const errorName = screen.getByTestId('errorName');
    expect(errorName).toBeInTheDocument();
    fireEvent.change(inputName, { target: { value: 'Faiz' } }); // error should not be there
    expect(errorName).not.toBeInTheDocument();
    backspace(inputName); // remove z
    backspace(inputName); // remove i
    backspace(inputName); // remove a
    backspace(inputName); // remove F
    expect(screen.getByTestId('errorName')).toBeInTheDocument(); // raise error on empty name
  });

  it('Validations Checking on Email', () => {
    renderWithProviders(<SignUp />);
    const inputEmail = screen.getByTestId('inputEmail');
    fireEvent.change(inputEmail, { target: { value: 'faizaan@gmailcom' } }); // wrong email format should raise error
    const errorEmail = screen.getByTestId('errorEmail');
    expect(errorEmail).toBeInTheDocument();
    fireEvent.change(inputEmail, { target: { value: 'faizaan@gmail.com' } }); // error should not be there
    expect(errorEmail).not.toBeInTheDocument();
    backspace(inputEmail); // remove m
    backspace(inputEmail); // remove 0
    expect(screen.getByTestId('errorEmail')).toBeInTheDocument();
  });

  it('Validations Checking on Password', () => {
    renderWithProviders(<SignUp />);
    const inputPass = screen.getByTestId('inputPass');
    fireEvent.change(inputPass, { target: { value: 'qwe123' } }); // less than 8 character, no special/capital letter error shoul be in document
    const errorPass = screen.getByTestId('errorPass');
    expect(errorPass).toBeInTheDocument();
    fireEvent.change(inputPass, { target: { value: 'Qwer@124' } }); // conditions satified should not be there
    expect(errorPass).not.toBeInTheDocument();
    backspace(inputPass); // remove last character  min chars become 7
    expect(screen.getByTestId('errorPass')).toBeInTheDocument();
  });
});
