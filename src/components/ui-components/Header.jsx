
const Header = () => {
    return (
        <header className={styles.headerWrapper}>
            <h1>Home Page</h1>
        </header>
    )
}

const styles = {
    headerWrapper: "h-[8vh] w-[100vw] dark:bg-[rgb(20,20,31)] bg-pink-100 border-b-[1px] dark:border-gray-700 border-pink-200"
}

export default Header