import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 3c5c786f
const API_KEY = " http://www.omdbapi.com?apikey=3c5c786f "

function App() {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Minion')
  }, [])

  return (
    <>
      <div className='flex p-4 '>
        <nav className=''>TODO</nav>
        <section className="grocery-items">
          <div className="searchBar">
            <input type="text" />
          </div>
          <div>item</div>
        </section>
      </div>
    </>
  )
}

export default App
