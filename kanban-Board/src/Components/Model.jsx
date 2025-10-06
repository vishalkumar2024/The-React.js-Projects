import React from 'react'

function Model(props) {
  return (
    <div
      className='fixed z-50 top-0 left-0 h-[100vh] w-full flex items-center justify-center model-container'
      onClick={() => props.onClose ? props.onClose() : ""}
    >
      <div
        className='bg-white rounded max-h-[95vh] overflow-auto custom-scroll'
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  )
}

export default Model 
