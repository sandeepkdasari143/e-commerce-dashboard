import React from 'react'
import SecondaryButton from '../../../components/buttons/SecondaryButton';
import AddButton from '../../../components/buttons/AddButton';
import { useDispatch } from 'react-redux';
import { CLOSE_MODAL } from '../../../redux-store/modal.slice';

const CompanyForm = () => {
    const dispatch = useDispatch();

    const registerCompany = (event) => {
        event.preventDefault();
        dispatch(CLOSE_MODAL())
    }
    return (
        <>
            <div>
                <form className={styles.form}>
                    <div className={styles.textField}>
                        <label className={styles.label} htmlFor=""></label>
                        <input className={styles.inputField} type="text" />
                        <p className={styles.helperMessage}></p>
                    </div>
                </form>

                <footer className={styles.footerButtons}>
                    <SecondaryButton>Cancel</SecondaryButton>
                    <AddButton onClickHandler={registerCompany}>Add In Collection</AddButton>
                </footer>
            </div>
        </>
    )
}

const styles = {
    form: "w-full p-3 flex flex-col gap-3 w-[600px]",
    textField: "flex flex-col gap-1",
    label: "font-semibold text-pink-600",
    inputField: "",
    helperMessage: "dark:text-gray-",
    footerButtons: "sticky inset-x-0 bottom-0 py-5 px-3 flex items-center justify-end gap-5"
}

export default CompanyForm