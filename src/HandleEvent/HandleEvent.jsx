import React from 'react'


const HandleEvent = () => {
    const loger = () => {
        alert('Hello Word')
    }

    const showMessage = (message) => {
        alert(message)
    }
    // Mọi event trong react đều trả về 1 tham số event
    return (
        <div className="container mt-5">
            <h1 className='title'>HandleEvent</h1>

            {/*sử dụng hàm ko có tham số */}
            <button className="btn btn-outline-success mt-3" onClick={loger}>
                Loger
            </button>


            {/*sử dụng hàm có tham số và không có tham số */}
            <button className="btn btn-outline-info mt-3" onClick={() => { showMessage('Hello CyberSoft') }} >
                Show message
            </button>


            <button className="btn btn-outline-danger mt-3 ms-3" onClick={(event) => {
                console.log(event.target)
                // alert('Nguyễn Viết Hải Rank Bạc IV')
            }} >
                Show message 1
            </button>
        </div>
    )
}


export default HandleEvent