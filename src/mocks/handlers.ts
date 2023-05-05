import { rest } from 'msw'

export const handlers = [
  rest.post('/login', async (req, res, ctx) => {
    const { id, password } = await req.json<{ id: string; password: string }>()

    if (!id.length || !password.length)
      return res(
        ctx.status(401),
        ctx.json({
          success: false,
          data: null,
          error: {
            code: '401',
            message: '잘못된 ACCESS TOKEN 입니다.',
          },
        }),
      )

    return res(
      ctx.delay(100),
      ctx.status(200),
      ctx.json({
        success: true,
        data: {
          accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ0ZXN0IiwiaWF0IjoxNjY2NjcwNDQ0LCJleHAiOjE2NjY3NTY4NDR9.G2o4ffsAtGeJvRNTT7RPJCSeKoKNcaBKJ4Tm5WuBZWg',
        },
      }),
    )
  }),

  //TODO: 작성 필요
  // rest.post('/signup/teacher', null),
  // rest.post('/signup/parent', null),
  // rest.post('/register', null),
  // rest.get('/class/1', null),
  // rest.get('/student', null),
  // rest.get('/student/class/1/2', null),
  // rest.get('/student/break/1/2', null),
  // rest.get('/attendance/', null),
]
