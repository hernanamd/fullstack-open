import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filtered, setFiltered] = useState([])

  const handleAddName = (event) => {
    event.preventDefault()

    if (handleSearch(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const obj = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }

      setPersons([...persons].concat(obj))
      setNewName('')
      setNewNumber('')
      setFilter('')
      setFiltered([])
    }

  }

  const handleSearch = (name) => {
    let result = persons.find(el => el.name.includes(name))
    return result
  }

  const handleFiltered = (event) => {
    let n1 = event.target.value
    setFilter(n1)

    let result = persons.filter(el => el.name.toUpperCase().includes(n1.toUpperCase()))

    setFiltered(result)
  }

  return (
    <div>

      <h2>Phonebook</h2>

      <div>
        filter shown with <input onChange={handleFiltered} value={filter} />
      </div>

      <form onSubmit={handleAddName}>
        <div>
          name: <input onChange={(e) => setNewName(e.target.value)} value={newName} />
        </div>
        <div>
          number: <input onChange={(e) => setNewNumber(e.target.value)} value={newNumber} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>

      <ul>
        {
          filtered.length
            ? filtered.map(el => <li key={el.id}>{el.name} {el.number}</li>)
            : persons.map(el => <li key={el.id}>{el.name} {el.number}</li>)
        }
      </ul>

    </div>
  )
}

export default App