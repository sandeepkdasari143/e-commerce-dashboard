import React from 'react'

const ProductForm = ({CloseModal}) => {
    return (
        <form>
            <button onClick={CloseModal}>Close</button>
        </form>
    )
}

export default ProductForm