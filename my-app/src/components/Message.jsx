import React from 'react'

function Message() {
    return (
        <div className='message owner'>
            <div className="messageInfo"></div>
            <div className="messageContent">
                <img src="https://images.pexels.com/photos/16377849/pexels-photo-16377849/free-photo-of-man-wearing-red-jacket-looking-at-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>Hello</p>
                {/* <img src="https://images.pexels.com/photos/16377849/pexels-photo-16377849/free-photo-of-man-wearing-red-jacket-looking-at-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /> */}
            </div>
        </div>
    )
}

export default Message
