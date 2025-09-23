import React from 'react'

function Model(props) {
  return (
    <div
      className='fixed top-0 left-0 h-[100vh] w-full flex items-center justify-center bg-black opacity-40'
      onClick={() => props.onClose ? props.onClose() : ""}
    >
      <div
        className='bg-white rounded'
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
        This is me
      </div>
    </div>
  )
}

export default Model 
