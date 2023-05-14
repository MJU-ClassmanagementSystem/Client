import { faker } from '@faker-js/faker'
import { rest } from 'msw'

import { createAttendanceList } from './faker'

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
        accessToken: faker.string.sample(20),
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

    const attendanceList = createAttendanceList()

    if (Number(week) >= 1)
      return res(ctx.delay(100), ctx.status(200), ctx.json(attendanceList))
  }),
  //TODO: 작성 필요
  // rest.post('/register', null),
  // rest.get('/class/1', null),
  // rest.get('/student/class/1/2', null),
  // rest.get('/student/break/1/2', null),
  // rest.get('/attendance/', null),
]
