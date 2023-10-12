import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/wrappertesting';
import Subscription from '../components/Subscription/Subscription';

describe('Unit tests for Subscription Component', () => {
  it('snapshot test to check it renders Subscription component', () => {
    const { asFragment } = renderWithProviders(<Subscription />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Image renders in Subscription component', () => {
    renderWithProviders(<Subscription />);
    const image = screen.getByTestId('Image');
    expect(image).toBeInTheDocument();
  });

  it('Form renders in component', () => {
    renderWithProviders(<Subscription />);
    const formelement = screen.getByTestId('form');
    expect(formelement).toBeInTheDocument();
  });

  it('Email input changes on input', () => {
    renderWithProviders(<Subscription />);
    const email = screen.getByTestId('email');
    fireEvent.change(email, { target: { value: 'test' } });
    expect(email.value).toBe('test');
  });
  it('Button renders in subscitpion component', () => {
    renderWithProviders(<Subscription />);
    const subscribebtn = screen.getByTestId('subscribebtn');
    expect(subscribebtn).toBeInTheDocument();
  });
});
