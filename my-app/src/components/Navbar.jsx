import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>
            <span className="logo">ChatterBox</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/16377849/pexels-photo-16377849/free-photo-of-man-wearing-red-jacket-looking-at-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span>Madhur</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar
