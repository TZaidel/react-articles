import { useState } from 'react'
import './App.css'
import articles from '../articles.json'

function Reader({ array }) {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const selectedArticle = array[selectedIdx]

  function handleClickNext() {
      setSelectedIdx(selectedIdx + 1)
  }

  function handleClickPrev() {
      setSelectedIdx(selectedIdx -1)
    }
  
  const isNextVisible = selectedIdx < array.length-1
  const isPrevVisible = selectedIdx > 0
  
  return (
    <>
    <div>
      {isPrevVisible && <button onClick={handleClickPrev}>Prev</button>}
        <button onClick={handleClickNext} disabled={!isNextVisible}>Next</button>
        <p>{selectedIdx+1}/{array.length}</p>
        <p>Selected index: {selectedIdx}</p>
    </div>
      <ul>
          <li key={selectedArticle.id}>
            <h2>{selectedArticle.topic}</h2>
            <p>{selectedArticle.text}</p>
          </li>
        
    </ul>
    </>
    )
}



function App() {
 

  return (
    <>
      <Reader array={articles} />
    </>
  )
}

export default App
