import React from 'react'

function Home() {
  return (
    <div>
        <div className='bg-red-500 w-full rounded-md'>
        <h2 className='text-4xl text-center p-4 font-semibold '>React Mini Projects</h2>
        </div>

        <div className='grid grid-cols-4 bg-slate-200 min-h-screen justify-items-center items-center rounded-lg'>
            <div className=''>
            <a href="/counter">
                <button className='px-7 py-3 border-2 rounded-md bg-indigo-300'>Balancer</button>
            </a>
            </div>

            <div>
                <a href="/findmap">
                    <button className='px-7 py-3 border-2 rounded-md bg-indigo-300'>Find Map</button>
                </a>
            </div>

            <div>
                <a href="/todo">
                    <button className='px-7 py-3 border-2 rounded-md bg-indigo-300'>Todo</button>
                </a>
            </div>

            <div>
                <a href="/password">
                    <button className='px-7 py-3 border-2 rounded-md bg-indigo-300'>Genrate Password</button>
                </a>
            </div>

            <div>
                <a href="/">
                    <button className='px-7 py-3 border-2 rounded-md bg-indigo-300'>Flag API</button>
                </a>
            </div>

            <div>
                <a href="/currency">
                    <button className='px-7 py-3 border-2 rounded-md bg-indigo-300'>Currency Converter</button>
                </a>
            </div>

            

        </div>
    </div>
  )
}

export default Home