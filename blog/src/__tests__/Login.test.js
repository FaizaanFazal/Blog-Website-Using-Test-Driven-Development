import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/wrappertesting';
import Login from '../components/Login/Login';

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
    const emailid = screen.getByTestId('emailid');
    fireEvent.change(emailid, { target: { value: 'test@gmail.com' } });
    expect(emailid.value).toBe('test@gmail.com');
  });

  it('Password input changes on input and has type password', () => {
    renderWithProviders(<Login />);
    const pass = screen.getByTestId('pass');
    fireEvent.change(pass, { target: { value: 'qwe123' } });
    expect(pass.value).toBe('qwe123');
    expect(pass.type).toBe('password');
  });

  it('Login Button', () => {
    renderWithProviders(<Login />);
    const loginbtn = screen.getByTestId('loginbtn');
    expect(loginbtn).toBeInTheDocument();
  });
});
