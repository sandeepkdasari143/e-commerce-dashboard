import React from 'react'
import { useDispatch } from 'react-redux';
import { CLOSE_MODAL, OPEN_MODAL, OPEN_PRODUCTS_GRID, SET_MODAL_TITLE } from '../../../redux-store/modal.slice';

const ProductForm = () => {
    const dispatch = useDispatch();
    const addProduct = (event) => {
        event.preventDefault();
        dispatch(CLOSE_MODAL());
        dispatch(OPEN_PRODUCTS_GRID());
        dispatch(OPEN_MODAL());
    }
    return (
        <form className='w-[800px]'>
            <button type="submit" onClick={addProduct}>Add Product</button>
        </form>
    )
}

export default ProductForm