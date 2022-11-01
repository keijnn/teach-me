//import modules
import { createStore, createEvent, restore, sample } from 'effector'

//import shared
import { getCategoriesFx } from '@/shared/api/categories'
import { getTeachersFx } from '@/shared/api/teachers'
import { getAveragePriceFx } from '@/shared/api/average-price'

interface Teacher {
  about: string
  categories: {
    iconLocation: string
    name: string
  }[]
  email: string
  firstName: string
  lastName: string
  lessonType: string
  location: string
  pricePerHour: number
  rating: number
  verifiedTeacher: boolean
}

interface Teachers {
  maxPrice: number
  minPrice: number
  page: number
  pageSize: number
  totalResults: number
  teachers: Teacher[]
}

//get all pages from api
const getAllTeachers = () => {
  let pagesEnable = 0
  let currentPage = 0

  while (pagesEnable < 3) {
    pagesEnable++
    currentPage++
    getTeachersFx({
      categories: [5],
      page: currentPage,
      pageSize: 10,
    })
  }
}

export const averagePriceSended = createEvent()

export const $categories = restore(getCategoriesFx, [])

export const $teachers = createStore<Teachers[]>([]).on(
  getTeachersFx.doneData,
  (state, teachers) => state.concat(teachers)
)
const $prices = createStore<number[][]>([])

//calculate avarage price
export const $averagePrice = createStore<number>(0).on($prices, (_, prices) =>
  prices.flat().reduce((prev, curr) => (prev + curr) / prices.length, 0)
)

//get all prices
sample({
  clock: $teachers,
  fn: (teachers) =>
    teachers.map((el) => el.teachers.map((teacher) => teacher.pricePerHour)),
  target: $prices,
})

//send category name and price
sample({
  clock: averagePriceSended,
  source: { teachers: $teachers, averagePrice: $averagePrice },
  fn: ({ teachers, averagePrice }) => {
    console.log(teachers)
    const response = {
      categoryName: teachers[0].teachers[0].categories[0].name,
      averagePrice: Math.floor(averagePrice),
    }
    console.log(response)
    return response
  },
  target: getAveragePriceFx,
})

getAllTeachers()

getCategoriesFx()
