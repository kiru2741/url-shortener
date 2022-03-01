import React from 'react'

const ShortURL = ({shortLink}) => {
  return (
    <div className='p-8 bg-white rounded sm:w-4/5 lg:w-3/5 mt-5'>
        <p className='text-green-600 font-bold text-sm'>Link created!</p>
        <a href={shortLink} target='blank' className='text-gray-600 mt-3 hover:underline'>{shortLink}</a>
    </div>
  )
}

export default ShortURL