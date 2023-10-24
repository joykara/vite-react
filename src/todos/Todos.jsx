import React from 'react'

const Todos = () => {
  return (
    <section>
        <header className='flex justify-between w-full'>
            <div>
                <p>Open Todos</p>
            </div>
            <div className='flex'>
                <p>Completed Todos</p>
                <span>1/10</span>
            </div>
        </header>
    </section>
  )
}

export default Todos