import DashboardHeader from '../../components/DashboardHeader'
import DashboardSidebar from '../../components/DashboardSidebar'
const Orders = () => {
    return (
        <div className='transition-all duration-200 linear h-[100vh] w-[100vw] dark:bg-[rgb(20,20,31)] bg-pink-100'>
            <DashboardHeader />
            <main className={styles.ordersWrapper}>
                <DashboardSidebar />
                <section className={styles.ordersContent}>

                </section>
            </main>
        </div>
    )
}
const styles = {
    ordersWrapper: "flex md:felx-col",
    ordersContent: "transition-all duration-200 linear h-[92vh] md:w-[85%] w-[100vh] dark:bg-[rgb(20,20,31)] bg-pink-100",
}
export default Orders