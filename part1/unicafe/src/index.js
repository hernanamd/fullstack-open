import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)

  const handleNeutral = () => setNeutral(neutral + 1)

  const handleBad = () => setBad(bad + 1)

  return (
    <div>

      <div>
        <h1>Give feedback 🗣️</h1>

        <Button text='Good' handler={handleGood} />
        <Button text='Neutral' handler={handleNeutral} />
        <Button text='Bad' handler={handleBad} />
      </div>

      <h1>📊Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  if (good + neutral + bad === 0) {
    return (
      <p>No feedback given 👀</p>
    )
  }

  return (
    <div>

      <table>
        <tbody>
          <Statistic text='🟢Good: ' value={good} />
          <Statistic text='🟡Neutral: ' value={neutral} />
          <Statistic text='🔴Bad: ' value={bad} />
          <Statistic text='📑All: ' value={good + neutral + bad} />
          <Statistic text='Average: ' value={isNaN((good - bad) / (good + neutral + bad)) ? '0' : (good - bad) / (good + neutral + bad) + '%'} />
          <Statistic text='Positive: ' value={isNaN((good * 100) / (good + neutral + bad)) ? '0' : (good * 100) / (good + neutral + bad) + '%'} />
        </tbody>
      </table>

    </div>
  )
}

const Button = ({ text, handler }) => {
  return (
    <button onClick={() => handler()}>
      {text}
    </button>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)