import React, { useState } from 'react'

const ShortURL = ({shortLink}) => {

  const [copyClicked, setCopyClicked] = useState(false)

  function handleClick(){
    setCopyClicked(true)
    navigator.clipboard.writeText(shortLink)
    setTimeout(()=>setCopyClicked(false), 2000)
  }

  return (
    <div className='p-8 bg-white rounded max-w-2xl mt-5'>
        <p className='text-green-600 font-bold text-sm'>Link created!</p>
        <a href={shortLink} target='blank' className='text-gray-600 mt-5 mr-5 hover:underline'>{shortLink}</a>
        <i onClick={handleClick} className={`${copyClicked ? 'fas fa-check' : 'far fa-copy'} text-xl cursor-pointer text-gray-600`}></i>
    </div>
  )
}

export default ShortURL