import { Link } from "react-router-dom";
import ThemeSwitcher from "../../components/buttons/ThemeSwitcher"
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';

const DashboardHeader = () => {
    return (
        <header className={styles.headerWrapper}>
            <Link to="/" className="group flex gap-3 items-center">
                <ShoppingBasketRoundedIcon className="text-[#BE185D] group-hover:text-[#DB2777] group-active:text-[#BE185D] !text-[50px]"/>
                <h1 className="font-bold text-[40px] text-[#BE185D] group-hover:text-[#DB2777] group-active:text-[#BE185D]">Sandy's <span className="font-normal">Store</span></h1>
            </Link>
            <ThemeSwitcher />
        </header>
    )
}

const styles = {
    headerWrapper: "transition-all duration-200 linear border-b-[1px] dark:border-gray-700 border-pink-200 h-[8vh] w-[100%] dark:bg-[rgb(20,20,31)] bg-pink-50 px-5 flex items-center justify-between"
}

export default DashboardHeader