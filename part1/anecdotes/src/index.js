import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const randomAnecdote = (max) => {
    setSelected(Math.floor(Math.random() * max))
  }

  const voteAnecdote = () => {
    let copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }

  let maxVotes = vote.indexOf(Math.max(...vote))

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>Has {vote[selected]} votes</p>
      </div>

      <div>
        <button onClick={voteAnecdote}>vote</button>
        <button onClick={() => randomAnecdote(anecdotes.length)}>Next anecdote</button>
      </div>

      <div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[maxVotes]}
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)