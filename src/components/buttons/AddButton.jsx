
const AddButton = ({ children, onClickHandler }) => {
    return (
        <button onClick={onClickHandler}
            className="text-white font-bold text-lg ouline-none border-none rounded-lg bg-gradient-to-br from-[#DB2777] hover:from-[#BE123C] via-[#BE123C] hover:via-[#DB2777] to-[#DB2777] hover:to-[#BE123C] active:from-[#DB2777] active:via-[#BE123C] active:to-[#DB2777] px-5 py-2 flex gap-3 items-center">
            
            {children}
        </button>
    )
}

export default AddButton