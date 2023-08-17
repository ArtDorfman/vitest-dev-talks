import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { expect, test, beforeAll, afterAll } from 'vitest'

async function getPosts () {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json())
  console.log(data.body + ' - data.body')
  return data.body
}

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/posts/1', (req, res, ctx) => {
    return res(ctx.json({ body: 'Hello World' }))
  })
)

beforeAll(() => server.listen())
afterAll(() => server.close())

test('mock request example', async () => {
  const result = await getPosts()
  console.log(result + ' - result')
  expect(result).toMatchInlineSnapshot('"Hello World"')
})
