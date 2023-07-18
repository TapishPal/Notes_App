import React from 'react'

const Header = ({handleToggleDarkMode}) => {
    return (
        <div className='header'>
            <h1>Notes</h1>
            <button 
                onClick={() => 
                    handleToggleDarkMode(
                        (prevMode) => !prevMode
                    )
                }
                className='save'>
            Toggle mode</button>
        </div>
    )
}

export default Header