import ThemeSwitcher from "../../components/buttons/ThemeSwitcher"


const DashboardHeader = () => {
    return (
        <header className={styles.headerWrapper}>
            <ThemeSwitcher />
        </header>
    )
}

const styles = {
    headerWrapper: "transition-all duration-200 linear border-b-[1px] dark:border-gray-700 border-pink-200 h-[8vh] w-[100vw] dark:bg-[rgb(20,20,31)] bg-pink-100"
}

export default DashboardHeader