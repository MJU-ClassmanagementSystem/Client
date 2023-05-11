import { rest } from 'msw'

export const handlers = [
  rest.post('/login', async (req, res, ctx) => {
    const { id, password } = await req.json<{ id: string; password: string }>()

    if (!id.length || !password.length)
      return res(
        ctx.status(401),
        ctx.json({
          data: null,
        }),
      )

    return res(
      ctx.delay(100),
      ctx.status(200),
      ctx.json({
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ0ZXN0IiwiaWF0IjoxNjY2NjcwNDQ0LCJleHAiOjE2NjY3NTY4NDR9.G2o4ffsAtGeJvRNTT7RPJCSeKoKNcaBKJ4Tm5WuBZWg',
      }),
    )
  }),

  rest.post('/signup/teacher', async (req, res, ctx) => {
    const { id, name, school, password } = await req.json<{
      id: string
      name: string
      school: string
      password: string
    }>()

    if (!id.length || !name.length || !school.length || !password.length)
      return res(ctx.delay(100), ctx.status(401))

    return res(ctx.delay(100), ctx.status(200))
  }),

  rest.post('/signup/parent', async (req, res, ctx) => {
    const { id, studentId, password } = await req.json<{
      id: string
      studentId: string
      password: string
    }>()

    if (!id.length || !studentId.length || !password.length)
      return res(ctx.delay(100), ctx.status(401))

    return res(ctx.delay(100), ctx.status(200))
  }),

  rest.post('/register', async (req, res, ctx) => {
    const { id, name } = await req.json<{
      id: string
      name: string
    }>()

    if (!id.length || !name.length) return res(ctx.delay(100), ctx.status(401))

    return res(ctx.delay(100), ctx.status(200))
  }),

  rest.get('/student/:week', async (req, res, ctx) => {
    const { week } = req.params

    if (!Number(week)) return res(ctx.delay(100), ctx.status(400))

    return res(
      ctx.delay(100),
      ctx.status(200),
      ctx.json([
        {
          id: '1',
          name: '김해찬',
          attend: [1, 0, 1, 2, 1],
        },
        {
          id: '2',
          name: '홍길동',
          attend: [2, 2, 0, 1, 0],
        },
        {
          id: '2',
          name: '김보현',
          attend: [0, 0, 0, 0, 0],
        },
        {
          id: '2',
          name: '박은서',
          attend: [2, 2, 0, 1, 0],
        },
        {
          id: '2',
          name: '차재환',
          attend: [0, 0, 0, 0, 0],
        },
      ]),
    )
  }),
  //TODO: 작성 필요
  // rest.post('/register', null),
  // rest.get('/class/1', null),
  // rest.get('/student/class/1/2', null),
  // rest.get('/student/break/1/2', null),
  // rest.get('/attendance/', null),
]
