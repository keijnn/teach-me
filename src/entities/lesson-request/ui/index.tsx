//import shared
import { Button } from '@/shared/ui/button'

export const LessonRequest = () => (
  <div className='w-[31.5rem] h-56 bg-white flex flex-col justify-around p-5 rounded-md'>
    <div className='flex w-full justify-around'>
      <div className='bg-cyan-500 rounded-full h-1 w-1 p-8 flex items-center justify-center'>
        <p className='text-white'>Icon</p>
      </div>
      <div>
        <h1 className='font-bold'>Request for the lesson</h1>
        <p className='mt-1 text-stone-400 font-semibold'>
          Daniel Hamilton wants to start a lesson, <br />
          please confirm or deny request
        </p>
        <p className='mt-3 text-stone-300 font-semibold text-sm'>
          18 Dec, 14:50pm, 2022
        </p>
      </div>
      <div className='rounded-full border-2 border-stone-500 h-1 w-1 p-3 flex items-center justify-center'>
        <p className='text-stone-500 font-semibold'>x</p>
      </div>
    </div>
    <div className='justify-end items-end flex w-full'>
      <Button label='View details' className='mr-4' />
      <Button label='Submit' className='bg-black text-white' />
    </div>
  </div>
)
