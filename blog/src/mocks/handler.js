import {http} from 'msw'
export const handlers=[
    //todo
    http.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([
                {
                  
                    name: 'admin',
                  
                }
            ]
          ),
        )
      }),


]