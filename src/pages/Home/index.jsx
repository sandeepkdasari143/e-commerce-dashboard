import React from 'react'
import Sidebar from './Sidebar'
import Products from './Products'

const Home = () => {
    return (
        <main className={styles.homeWrapper}>
            <Sidebar />
            <Products />
        </main>
    )
}
const styles = {
    homeWrapper: "h-[92vh] w-[100vw] flex"
}
export default Home