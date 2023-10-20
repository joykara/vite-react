import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState();

  return (
    <div className="flex h-screen w-full bg-violet-100 bg-opacity-95">
      <div className="flex-col justify-center w-full mx-auto">
        <h1 className='text-center font-serif p-5'>TODO LIST</h1>
        <ul className="flex justify-evenly py-2 border-b bg-white-100">
          <li>Personal</li>
          <li>Professional</li>
        </ul>
        <div className='flex-col items-center justify-center w-[500px] mx-auto'>
          <form className="py-2 flex justify-evenly">
            <input className='bg-white-0' type="text" placeholder='Enter your Todo... '/>
            <button>Add Todo</button>
          </form>
          <div className='w-full bg-white-0'>
            <p>Take a walk in the park</p>
            <span>Delete</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
