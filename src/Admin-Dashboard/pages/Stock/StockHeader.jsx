import React from 'react'
import AddButton from '../../../components/buttons/AddButton'

const StockHeader = ({setIsProductFormOpen}) => {
    return (
        <div className="h-[20%] border-b dark:border-gray-600 border-pink-200 bg-pink-50 dark:bg-[rgb(27,27,39)] p-3 md:p-5 flex flex-col md:flex-row items-center justify-between">

            <div className='flex flex-col md:gap-2 items-center md:items-start'>
                <h1 className='font-extrabold dark:text-white text-gray-900 text-[60px]'>Collections</h1>
                <p className='font-bold dark:text-gray-400 text-gray-600 text-xl'>Register the <span className='font-extrabold text-[#BE185D]'>Seller Company</span> as a Collection.</p>
            </div>

            <AddButton onClickHandler={() => setIsProductFormOpen(true)}>
                <span>Register Collection</span>
            </AddButton>
        </div>
    )
}

export default StockHeader