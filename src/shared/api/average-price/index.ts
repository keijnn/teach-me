//import modules
import { createEffect } from 'effector'

export const getAveragePriceFx = createEffect(
  async ({
    categoryName,
    averagePrice,
  }: {
    categoryName: string
    averagePrice: number
  }) => {
    const url = 'http://test.teaching-me.org/categories/v1/average-price'
    const headers = {
      'Accept-Language': 'en',
      'Content-Type': 'application/json',
      Authorization: 'Bearer private-2irkm1qudpnqbpscxh9j9gyd',
    }
    const req = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        categoryName,
        averagePrice,
      }),
    })
    if (!req.ok) throw req
    return await req.json()
  }
)
