import React from 'react'

const SecondaryButton = ({children, onClickHandler}) => {
    return (
        <button onClick={onClickHandler}
            className='px-3 py-2'>
            {children}
        </button>
    )
}

export default SecondaryButton