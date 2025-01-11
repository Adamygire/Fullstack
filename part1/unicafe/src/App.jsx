import { useState } from 'react'

const Button = (props) =>
  <button onClick={props.onClick}>{props.name}</button>

const StatisticLine = (props) =>
  <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = (props) => {
  if (props.all === 0)
    return (<p>No feedback given</p>)
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine text="average" value={props.average} />
        <StatisticLine text="positive" value={props.positive + '%'} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
  const positive = (good / all) * 100
  const average = (good - bad) / all

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} name={"good"} />
      <Button onClick={() => setNeutral(neutral + 1)} name={"neutral"} />
      <Button onClick={() => setBad(bad + 1)} name={"bad"} />
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App