import {server} from '../mocks/server'
import { rest } from 'msw';


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

});
