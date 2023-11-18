import { fireEvent, screen } from '@testing-library/react';
import Login from '../components/Login/Login';
import {server} from '../mocks/server'
import { rest } from 'msw';
import { renderWithProviders } from '../utils/wrappertesting';


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Mocking Users API', () => {

    it('getAllUsers mocking test', async() => {
        server.use(
            rest.get("http://localhost:8000/users/allusers",(req,res,ctx)=>{
              return res(ctx.status(200));
            })
          )
    });

    it('Login Success', async() => {
        renderWithProviders(<Login />);
        const email= screen.getByTestId('inputEmail')
        const pass= screen.getByTestId('inputPass')
        const submitButton= screen.getByTestId('loginbtn')

        fireEvent.change(email, { target: { value: 'dog@gmail.com' } });
        fireEvent.change(pass, { target: { value: 'Qwe@1234' } });
        fireEvent.click(submitButton);
        screen.debug();
    });

    it('Login failure', async() => {
        server.use(
            rest.post("http://localhost:8000/users/login",(req,res,ctx)=>{
              return res(ctx.status(401));
            })
          )
          screen.debug();
    });

});
