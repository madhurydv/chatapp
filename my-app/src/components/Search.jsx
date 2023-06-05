import React from 'react'

function Search() {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder="Search" />
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/16377849/pexels-photo-16377849/free-photo-of-man-wearing-red-jacket-looking-at-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <div className="userChatInfo">
                    <span>Jaya</span>
                </div>
            </div>
        </div>
    )
}

export default Search