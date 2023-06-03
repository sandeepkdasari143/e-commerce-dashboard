import React from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { IconButton } from "@mui/material";
import AddButton from '../../../components/buttons/AddButton';
import SecondaryButton from '../../../components/buttons/SecondaryButton';
import ShortUniqueId from 'short-unique-id';
import { useNavigate } from 'react-router-dom';

const CompanyCard = ({ setIsProductFormOpen }) => {
    const navigate = useNavigate();
    const uid = new ShortUniqueId({ length: 10 });
    const collectionID = uid();
    return (
        <article className={styles.companyCard}>
            <div className={styles.companyDetailsWrapper}>
                <div className={styles.companyDetails}>
                    <img className={styles.companyImage} src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" alt="" />
                    <div className="flex flex-col items-start gap-2 p-1">
                        <h1 className={styles.companyTitle}>Horlickss</h1>
                        <p className={styles.companyID}>{collectionID+collectionID+collectionID}</p>
                    </div>
                </div>
                <IconButton><DeleteRoundedIcon className={styles.DeleteIcon}/></IconButton>
            </div>
            <div className={styles.buttons}>
                <SecondaryButton>All Products</SecondaryButton>
                <AddButton onClickHandler={() => {
                    navigate(`/admin/stock?collectionID=${collectionID}}`);
                    return setIsProductFormOpen(true)
                }}>Create Product</AddButton>
            </div>
        </article>
    )
}
const styles = {
    companyCard: "cursor-pointer p-5 rounded-xl border dark:border-gray-600 border-pink-300 w-[500px] h-[230px] flex flex-col justify-between dark:bg-[rgb(27,27,39)] dark:hover:bg-gray-800 hover:bg-pink-100 bg-pink-50",
    companyDetailsWrapper: "flex justify-between items-start",
    companyDetails: "flex gap-5",
    companyImage: "w-[100px] h-[100px] rounded-xl object-cover",
    companyTitle: "font-bold dark:text-gray-300 text-gray-900 text-xl",
    companyID: "dark:text-gray-200 text-gray-700 bg-pink-300 dark:bg-gray-600 rounded-full px-3 py-1",
    DeleteIcon: "transition-all duration-1000 linear text-3xl cursor-pointer text-red-600 hover:text-red-500 hover:scale-125",
    buttons: "flex items-center justify-center gap-5"
}
export default CompanyCard