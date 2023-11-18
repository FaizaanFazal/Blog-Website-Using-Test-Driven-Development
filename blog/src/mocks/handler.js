import { rest } from 'msw';
export const handlers = [
  //todo
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


]