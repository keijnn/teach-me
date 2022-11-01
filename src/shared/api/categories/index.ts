//import modules
import { createEffect } from 'effector'

export const getCategoriesFx = createEffect(async () => {
  const url = 'http://test.teaching-me.org/categories/v1/categories'
  const headers = {
    'Accept-Language': 'en',
  }
  const req = await fetch(url, {
    method: 'GET',
    headers: headers,
  })
  if (!req.ok) throw req
  return await req.json()
})
