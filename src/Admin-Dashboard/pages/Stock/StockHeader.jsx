import React from 'react'
import AddButton from '../../../components/buttons/AddButton'

const StockHeader = ({setIsProductFormOpen}) => {
    return (
        <div className="h-[20%] border-b dark:border-gray-600 border-pink-200 bg-pink-50 dark:bg-[rgb(27,27,39)] ">
            <AddButton onClickHandler={() => setIsProductFormOpen(true)}>
                <span>Add Product</span>
            </AddButton>
        </div>
    )
}

export default StockHeader