import { rest } from 'msw';
export const handlers = [
  //get all users
  rest.get('http://localhost:8000/users/allusers', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "de2f4aad-949e-4452-8799-aa09630b8e02",
          email: "dkfaizaan12@gmail.com",
          userName: "faizaan",
          verified: false,
          authorImageSrc: "http:example.com/author1",
          authorImageAlt: "Author image",
          createdAt: "2023-11-07T11:53:58.630Z",
          updatedAt: "2023-11-07T11:53:58.630Z"
        },
      ]
      ),
    )
  }),

  //login
  rest.post('http://localhost:8000/users/login', (req, res, ctx) => {
    if (req.body.username === 'dog@gmail.com' && req.body.password === 'Qwe@1234') {
      return res(
        ctx.json({
          id: "de2f4aad-949e-4452-8799-aa09630b8e02",
          email: "dog@gmail.com",
          userName: "dog",
          verified: false,
          authorImageSrc: "http:example.com/author1",
          authorImageAlt: "Author image",
          createdAt: "2023-11-07T11:53:58.630Z",
          updatedAt: "2023-11-07T11:53:58.630Z"
        })
      );
    } else {
      return res(
        ctx.status(401),
        ctx.json({
          error: 'Invalid credentials',
        })
      );
    }
  })

]