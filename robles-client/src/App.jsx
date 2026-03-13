import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Welcome to My React App</h1>
        <p>
          Name: Cyrus Rj W. Robles <br />
          Student ID: 2019-102182 <br />
          Section: INF192 <br />
          <a href="https://github.com/cyrusrobles18/robles-webprog1">
            https://github.com/cyrusrobles18/robles-webprog1
          </a>
        </p>
      </div>
    </>
  )
}

export default App
