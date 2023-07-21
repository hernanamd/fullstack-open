import React from 'react'

const Header = ({ course }) => {
    return (
        <h1>{course}</h1>
    )
}

const Content = ({ parts }) => {
    return (
        <>

            {
                parts.map(p => {
                    return <Part key={p.id} name={p.name} num={p.exercises} />
                })
            }

        </>
    )
}

const Part = ({ name, num }) => {
    return (
        <p>
            {name} {num}
        </p>
    )
}

const Total = ({ parts }) => {

    const totalExercises = (parts) => {
        let initialValue = 0

        let total = parts.reduce((acc, act) => {
            return acc += act.exercises
        }, initialValue)

        return total
    }

    return (
        <b>total of {totalExercises(parts)} exercises</b>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course