import { IconButton, Modal } from "@mui/material";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const AddModal = ({ children, modalTitle, isAddModalOpen, CloseAddModal }) => {
    return (
        <Modal open={isAddModalOpen} onclose={CloseAddModal}>
            <div className={styles.modalContainer}>
                <header className="flex justify-between mb-3">
                    <h1 className="dark:text-white text-gray-700 text-4xl font-semibold">{modalTitle}</h1>
                    <IconButton onClick={CloseAddModal} className="dark:text-white text-gray-900 text-5xl"><CancelRoundedIcon className="text-5xl"/></IconButton>
                </header>
                {children}
            </div>
        </Modal>
    );
};
const styles = {
    modalContainer:
    "text-gray-800 dark:text-white border dark:border-gray-700 border-pink-600 flex flex-col absolute dark:bg-[rgb(27,27,39)] bg-pink-50 p-3 top-[50%] left-[50%] bg-white rounded-3xl -translate-x-1/2 -translate-y-1/2 drop-shadow-3xl",
};
export default AddModal;