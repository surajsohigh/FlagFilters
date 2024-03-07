import React, { useState } from 'react'

function Counter({children}) {

  const [basket1, setBasket1] = useState(10)
  const [basket2, setBasket2] = useState(0)

  console.log("Start")

  let leftBtn = () => {
    if (basket1 >= 0 & basket1 < 10){
      setBasket1(basket1+1)
      setBasket2(basket2-1)
    }
  }

  let rightBtn = () => {
    if (basket2 >= 0 & basket2 < 10){
      setBasket2(basket2+1)
      setBasket1(basket1-1)
    }
  }

  return (
    <div className='bg-slate-300 min-h-screen flex flex-col items-center justify-center rounded-lg'>
      <h1 className='p-3 font-semibold text-3xl text-center text-black'>Counter</h1>

      <div className='flex justify-between items-center m-6 gap-16 mt-16'>
        <article>
          <p className='text-lg font-semibold'>{basket1}</p>
        </article>

          <div className='flex justify-center items-center gap-16'>
            <button className='border-2 border-white px-5 p-2 rounded-md' onClick={leftBtn}>Left</button>
            <button className='border-2 border-black px-5 p-2 rounded-md' onClick={rightBtn} >Right</button>
          </div>
        <article>
          <p className='text-lg font-semibold text-white'>{basket2}</p>
        </article>
      </div>

    </div>
  )
}

export default Counter