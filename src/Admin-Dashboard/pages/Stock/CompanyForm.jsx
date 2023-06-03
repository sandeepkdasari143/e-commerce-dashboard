import React from 'react'
import SecondaryButton from '../../../components/buttons/SecondaryButton';
import AddButton from '../../../components/buttons/AddButton';
import { useDispatch } from 'react-redux';
import { CLOSE_MODAL } from '../../../redux-store/modal.slice';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
const CompanyForm = () => {
    const dispatch = useDispatch();
    const [companyLogoPreview, setCompanyLogoPreview] = React.useState("");

    const registerCompany = (event) => {
        event.preventDefault();
        dispatch(CLOSE_MODAL())
    }

    const imageUploadEvent = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setCompanyLogoPreview(URL.createObjectURL(file));
    }
    return (
        <>
            <div>
                <form className={styles.form}>
                    <div className={styles.textField}>
                        <label className={styles.label} htmlFor="companyName">Company Name</label>
                        <input className={styles.inputField}
                            id="companyName"
                            placeholder='Company Name'
                            required
                            type="text" />
                        <p className={styles.helperMessage}>
                            <HelpRoundedIcon className={styles.helpIcon}/>
                            <span>Please Enter Your Company Name</span>
                        </p>
                    </div>
                    <div className={styles.textField}>
                        <label className={styles.label} htmlFor="companyDescription">Company Description</label>
                        <textarea className={styles.inputField}
                            id="companyDescription"
                            placeholder='Company Description'
                            maxLength={100}
                            rows={2}
                            type="text" />
                        <p className={styles.helperMessage}>
                            <HelpRoundedIcon className={styles.helpIcon}/>
                            <span>Describe your Company in 100 characters.</span>
                        </p>
                    </div>

                    <div className={styles.textField}>
                        <label htmlFor="companyLogo" className={styles.imageUploadLabel}>
                            {
                                companyLogoPreview ? 
                                    <img className={styles.imagePreview}
                                        src={companyLogoPreview} /> :
                                    <div className={styles.imagePreviewFallback}>
                                    <h1 className=''>Image Preview</h1>
                                </div>
                            }
                            <h1 className={styles.labelText}>Click here upload Compay Logo</h1>
                            <input className={styles.hiddenImageInput}
                            id="companyLogo" accept="image/*" type='file'
                            onChange={imageUploadEvent} required/>
                        </label>
                        <p className={styles.helperMessage}>
                            <HelpRoundedIcon className={styles.helpIcon}/>
                            <span>Click Anywhere in above area to upload Company's Logo</span>
                        </p>
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
    form: "p-3 flex flex-col gap-5 w-[400px]",
    textField: "flex flex-col gap-1",
    label: "font-semibold text-[#C026D3] text-sm",
    inputField: "px-3 py-2 w-full rounded-lg outline-none dark:bg-gray-900 dark:focus:bg-gray-700 border dark:border-gray-600 dark:focus:border-[#C026D3] font-semibold",
    helpIcon:"!text-sm",
    helperMessage: "flex items-center gap-1 text-xs dark:text-gray-500 font-semibold",
    footerButtons: "p-5 flex items-center justify-end gap-5",

    imageUploadLabel: 'relative px-3 py-2 w-full rounded-lg outline-none dark:bg-gray-900 border-dashed border-2 dark:border-[#C026D3] font-semibold text-xl flex items-center justify-between',
    imagePreviewFallback: 'h-[100px] w-[100px] object-cover rounded-xl border-dashed border-2 dark:border-[#C026D3] dark:text-white/50 bg-gray-700 text-gray-700 flex items-center justify-center text-center text-sm',
    imagePreview: 'h-[100px] w-[100px] object-cover rounded-xl ',
    labelText: 'text-sm text-white/70',
    hiddenImageInput: 'hidden absolute inset-x-0 inset-y-0',
}

export default CompanyForm