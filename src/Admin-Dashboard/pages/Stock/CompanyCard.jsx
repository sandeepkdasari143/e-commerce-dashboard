import React from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { IconButton } from "@mui/material";
import AddButton from '../../../components/buttons/AddButton';
import SecondaryButton from '../../../components/buttons/SecondaryButton';
import ShortUniqueId from 'short-unique-id';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { SET_MODAL_TITLE, OPEN_MODAL, OPEN_PRODUCT_FORM, OPEN_PRODUCTS_GRID } from "../../../redux-store/modal.slice";

const CompanyCard = () => {
    const dispatch = useDispatch();

    const displayAllProducts = () => {
        dispatch(OPEN_PRODUCTS_GRID());
        return dispatch(OPEN_MODAL())
    }
    
    const openCompanyForm = () => {
        navigate(`/admin/stock?collectionID=${collectionID}}`);
        dispatch(OPEN_PRODUCT_FORM());
        return dispatch(OPEN_MODAL())
    }
    const navigate = useNavigate();
    const uid = new ShortUniqueId({ length: 10 });
    const collectionID = uid();
    return (
        <article className={styles.companyCard}>
            <div className={styles.companyDetailsWrapper}>
                <div className={styles.companyDetails}>
                    <img className={styles.companyImage} src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" alt="" />
                    <div className="flex flex-col items-start gap-1 p-1">
                        <h1 className={styles.companyTitle}>Horlickss</h1>
                        <p className={styles.companyID}>This is the greatest of the gretest product, I have ever witnessed on this earth and I am glorifying this </p>
                    </div>
                </div>
                <IconButton><DeleteRoundedIcon className={styles.DeleteIcon}/></IconButton>
            </div>
            <div className={styles.buttons}>
                <SecondaryButton onClickHandler={displayAllProducts}>All Products</SecondaryButton>
                <AddButton onClickHandler={openCompanyForm}>Create Product</AddButton>
            </div>
        </article>
    )
}
const styles = {
    companyCard: "cursor-pointer p-5 rounded-xl border dark:border-gray-800 border-pink-200 hover:border-pink-300 w-[500px] h-[230px] flex flex-col justify-between dark:bg-[rgb(27,27,39)] dark:hover:bg-gray-800 hover:bg-pink-50 bg-white",
    companyDetailsWrapper: "flex justify-between items-start",
    companyDetails: "flex gap-5",
    companyImage: "w-[100px] h-[100px] rounded-xl object-cover",
    companyTitle: "font-bold dark:text-gray-300 text-gray-900 text-xl",
    companyID: "dark:text-gray-500 text-gray-400 font-semibold",
    DeleteIcon: "transition-all duration-1000 linear text-3xl cursor-pointer text-red-600 hover:text-red-500 hover:scale-125",
    buttons: "flex items-center justify-center gap-5"
}
export default CompanyCard