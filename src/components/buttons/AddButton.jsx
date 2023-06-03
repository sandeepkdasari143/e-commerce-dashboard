
const AddButton = ({ children, onClickHandler }) => {
    return (
        <button onClick={onClickHandler}
            className={styles.primaryBtn}>
            
            {children}
        </button>
    )
}

const styles = {
    primaryBtn : "text-white font-bold text-lg ouline-none border-none rounded-lg bg-gradient-to-br from-[#DB2777] hover:from-[#A21CAF] via-[#A21CAF] hover:via-[#DB2777] to-[#7E22CE] hover:to-[#7E22CE] active:from-[#DB2777] active:via-[#A21CAF] active:to-[#DB2777] px-5 py-2 flex gap-3 items-center",
}
export default AddButton