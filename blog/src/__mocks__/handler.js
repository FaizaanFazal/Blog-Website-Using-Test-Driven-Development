import {rest} from 'msw'
export const handlers=[
    //todo
    rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([
                {
                   //to add key value pairs here
                }
            ]
          ),
        )
      }),


]