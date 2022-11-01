//import modules
import { createEffect } from 'effector'

export const getTeachersFx = createEffect(
  async ({
    categories,
    page,
    pageSize,
  }: {
    categories: number[]
    page: number
    pageSize: number
  }) => {
    const url = 'http://test.teaching-me.org/categories/v1/search'
    const headers = {
      'Accept-Language': 'en',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    const req = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        categories,
        page,
        pageSize,
      }),
    })
    if (!req.ok) throw req
    return await req.json()
  }
)
