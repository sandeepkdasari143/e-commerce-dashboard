import { NavLink } from "react-router-dom"
import useNavConfig from "../hooks/useNavConfig"

const DashboardSidebar = () => {
    const navBar = useNavConfig();
    // console.log(navBar[0].navIcon())
    return (
        <section className={styles.sidebarWrapper}>
            <nav className={styles.navBar}>
                {
                    navBar?.map((nav) => (
                        <NavLink className={({ isActive }) => isActive ? `${styles.navLink} bg-pink-200 dark:bg-gray-700` : styles.navLink} to={nav.href}>
                            <span><nav.navIcon /></span>
                            <span>{nav.navTitle}</span></NavLink>
                    ))
                }
            </nav>
        </section>
    )
}

const styles = {
    sidebarWrapper: "transition-all duration-200 linear border-b md:border-r-[1px] flex items-center md:items-start dark:text-white text-gray-800 dark:border-gray-700 border-pink-200 md:h-[92vh] md:w-[30%] lg:w-[15%] w-[100vh] dark:bg-[rgb(20,20,31)] bg-pink-50",

    navBar: "flex flex-wrap md:flex-col gap-2 md:gap-7 my-7 mx-3 md:mx-auto",

    navLink: "transition-all duration-500 md:w-[230px] linear rounded-md dark:text-white text-gray-700 md:text-lg font-bold uppercase dark:hover:bg-gray-700 hover:bg-pink-200 border-none outline-none py-2 md:py-3 px-3 md:px-5 flex items-center justify-start gap-2 md:gap-5",

}

export default DashboardSidebar