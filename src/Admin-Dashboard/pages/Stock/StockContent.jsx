import React from 'react'
import CompanyCard from './CompanyCard'

const StockContent = () => {
    return (
        <div className="h-[80%] overflow-auto flex flex-wrap gap-5 items-center justify-evenly p-5">
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
        </div>
    )
}

export default StockContent