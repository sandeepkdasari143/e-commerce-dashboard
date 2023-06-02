import { Modal } from "@mui/material";

const AddModal = ({ children, isAddModalOpen, CloseAddModal }) => {
    return (
        <Modal open={isAddModalOpen} onclose={CloseAddModal}>
            <div className={styles.modalContainer}>
                {children}
            </div>
        </Modal>
    );
};
const styles = {
    modalContainer:
    "absolute bg-[rgb(27,27,39)] bg-pink-200 p-3 top-[50%] left-[50%] bg-white rounded-lg -translate-x-1/2 -translate-y-1/2 drop-shadow-3xl",
};
export default AddModal;