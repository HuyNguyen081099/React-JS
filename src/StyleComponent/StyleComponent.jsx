//rafce

import React from 'react'
import './style.css'
import style from './style.module.css'
// import './style.scss'
// import style from './style.module.scss'

const StyleComponent = () => {
    return (
        <div className="container mt-5">
            <h1 className="title">StyleComponent</h1>
            <p className={`${style.subTitle} ${style.description} ${style['sub-title']}`}>Sub Title</p>

            <p style={{ fontSize: '20px', fontWeight: 600, color: 'aqua' }}>Nguyễn Quốc Huy</p>

        </div>
    )
}


export default StyleComponent