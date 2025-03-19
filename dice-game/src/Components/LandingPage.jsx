import React from 'react'

export default function LandinPage() {
  return (
    <div className='container flex p-25'>
      {/* Left div */}
      <div className='w-1/2'>
        <img src="https://s3-alpha-sig.figma.com/img/fce5/e0a7/6d3e531201ecd44ca61f9d27ff82e0ae?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oP5HKpZA4xR6cder5oSPy6Uq-Aa3aKA~yq5XAqHSY-jpkzUexgn1dAskbQ8lcscrhJX8Vmcr0911Joz-duGMVqF41MR~IePQLGriYSSfPb0hC9VjnZKR2yOiY4QrNnwMNcmQiNVdvg9OYxDpvaM21H4V29JIhMJSuUHCevp1VKAfDeeehEJdMW5LF0aoLMm78H~ZZCx78Y3zGmI95EDWLnt-Iuux7RytYfHhSg1E1q0DDAYIPR4jlKcENOjmsESaOHEKCnHPV4rVaAeohpBEMoEoyi92gg0xC1TQZ-rVc8kUvbzKN3J5vSzjugM79Ws6RpjQBbZIaO8pwT2~PWiM~Q__" alt="" />
      </div>

      {/* Right div */}
      <div className='w-1/2  flex flex-col justify-center items-center'>
        <h1 className='text-8xl font-bold uppercase'>dice game</h1>
        <button className='btn-style mt-5'>Play now</button>
      </div>
    </div>
  )
}
