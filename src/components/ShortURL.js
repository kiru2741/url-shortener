import React from 'react'

const ShortURL = ({shortLink}) => {
  return (
    <div className='p-8 bg-white rounded max-w-2xl mt-5'>
        <p className='text-green-600 font-bold text-sm'>Link created!</p>
        <a href={shortLink} target='blank' className='text-gray-600 mt-3 hover:underline'>{shortLink}</a>
    </div>
  )
}

export default ShortURL