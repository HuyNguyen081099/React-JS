import React from 'react'
import HeaderDemo from './HeaderDemo'

const DemoProps = () => {
    return (
        <div className="container mt-5">
            <h1>DemoProps</h1>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />

            <HeaderDemo bg="green" fontSize="20px" name="Huy"/>
            <HeaderDemo bg="yellow" />
            <HeaderDemo bg="blue"/>
            <HeaderDemo bg="#000947"/>
        </div>
    )
}

export default DemoProps
