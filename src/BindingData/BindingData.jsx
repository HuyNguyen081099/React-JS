import React from 'react'

const BindingData = () => {
    const name = 'Nguyễn Quốc Huy'
    const sum = (a, b) => a + b
    const student = {
        name: 'ABC',
        age: 18,
    }
    return (
        <div className="container mt-5">
            <h1>BindingData</h1>
            <p className="fs-3">Name: {name}</p>
            <p className="fs-3 mt-3">SUM: {sum(10, 20)}</p>
            <p>{student.name}</p>
        </div>
    )
}

export default BindingData