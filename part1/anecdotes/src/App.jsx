import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const initialVotes = [0, 0, 0, 0, 0, 0, 0, 0]
  const [votes, setVotes] = useState(initialVotes)
  const [selected, setSelected] = useState(0)
  const [best, setBest] = useState(0)

  const selectNext = () => {
    const nextIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(nextIndex)
  }

  const voteForAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    if (copy[selected] > copy[best])
        setBest(selected) 
  }

  return (
    <div>
      <h2>Anecsote of the day</h2>
      {anecdotes[selected]}<br />
      has {votes[selected]} votes<br />
      <button onClick={voteForAnecdote}>vote</button>
      <button onClick={selectNext}>next anecdote</button>
      <h2>Anecdote with the most votes</h2>
      {anecdotes[best]}<br />
      has {votes[best]} votes<br />
    </div>
  )
}

export default App