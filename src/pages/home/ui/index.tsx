//import models
import { useUnit } from 'effector-react'
//import models
import { averagePriceSended, $averagePrice } from '../model'

//import entities
import { LessonRequest } from '@/entities/lesson-request'

//import shared
import { Button } from '@/shared/ui/button'

export const Home = () => {
  const avaragePrice = useUnit($averagePrice)
  return (
    <div className='h-full bg-[#242424] flex flex-col justify-center items-center'>
      <Button
        onClick={() => averagePriceSended()}
        label='Find avarage number!'
        disabled={avaragePrice === 0}
        className='mb-5 text-white'
      />
      <LessonRequest />
    </div>
  )
}
