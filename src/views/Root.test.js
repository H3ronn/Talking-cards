import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Root from './Root';

describe('Login to app', () => {
  it('Renders Root component as unauthenticated user', () => {
    render(<Root />);
    screen.getByLabelText('E-mail');
  });
  // it('Pass correct login and password should render AuthenticatedApp', async () => {
  //   render(<Root />);
  //   const email = screen.getByLabelText('E-mail');
  //   const password = screen.getByLabelText('Password');
  //   fireEvent.change(email, { target: { value: 'test@test.pl' } });
  //   fireEvent.change(password, { target: { value: 'testtest' } });

  //   fireEvent.click(screen.getByText('Login'));
  //   // expect(email).toHaveValue('test@test.pl');

  //   // await screen.findByText('Your Cards!');
  // });
});
