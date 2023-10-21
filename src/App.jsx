import { useState } from 'react';
import {FaEdit, FaTrash} from 'react-icons/fa';

function App() {
  const [todo, setTodo] = useState();

  return (
    <div className="flex h-screen w-full bg-violet-100 bg-opacity-95">
      <div className="flex-col justify-center w-full mx-auto">
        <h1 className='text-center font-serif font-medium text-3xl p-5'>TODO LIST</h1>
        <ul className="flex justify-evenly py-2 border-b  bg-white">
          <li className='border-r-2'>Personal</li>
          <li>Professional</li>
        </ul>
        <div className='flex-col items-center justify-center w-[500px] mx-auto'>
          <form className="py-2 w-full flex justify-between my-4">
            <input className='bg-white-0 w-96 p-2' type="text" placeholder='Enter your Todo... '/>
            <button className='bg-violet-700 text-white p-2'>Add Todo</button>
          </form>
          <ul className='flex w-full mx-auto items-center bg-white'>
            <li className='flex justify-between p-2 w-full border-b-2 border-violet-200'>
              <p>Take a walk in the park</p>
              <span className='flex gap-3 mr-2'>
                <FaEdit color='green' /><FaTrash color='purple' />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
