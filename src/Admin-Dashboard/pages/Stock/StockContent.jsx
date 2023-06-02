import React from 'react'
import CompanyCard from './CompanyCard'

const StockContent = ({setIsProductFormOpen}) => {
    return (
        <div className="h-[80%] overflow-auto flex flex-wrap gap-5 items-center justify-evenly p-5">
            <CompanyCard setIsProductFormOpen={setIsProductFormOpen} />
            <CompanyCard setIsProductFormOpen={setIsProductFormOpen} />
            <CompanyCard setIsProductFormOpen={setIsProductFormOpen} />
            <CompanyCard setIsProductFormOpen={setIsProductFormOpen} />
            <CompanyCard setIsProductFormOpen={setIsProductFormOpen} />
            <CompanyCard setIsProductFormOpen={setIsProductFormOpen} />
            <CompanyCard setIsProductFormOpen={setIsProductFormOpen} />
            <CompanyCard setIsProductFormOpen={setIsProductFormOpen} />
            <CompanyCard setIsProductFormOpen={setIsProductFormOpen} />
            <CompanyCard setIsProductFormOpen={setIsProductFormOpen} />
        </div>
    )
}

export default StockContent