import { useState } from 'react'
import './app.scss'
import Job from './components/Job'

import data from './data.json'

function App() {

  const [jobs, setJobs] = useState(data)

  return (
    <>
      <header>

      </header>
      <main>
        <ul className="container">
          {jobs.map((job, i) => (
            <li key={i}>
              <Job jobDetails={job}/>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default App
