
const AddButton = ({ children, onClickHandler }) => {
    return (
        <button onClick={onClickHandler}
            className="text-white font-bold text-lg transition-all duration-500 linear ouline-none border-none rounded-lg bg-gradient-to-br from-[#DB2777] hover:from-[#BE123C] via-[#BE123C] hover:via-[#DB2777] to-[#DB2777] hover:to-[#BE123C] px-5 py-2 flex gap-3 items-center">
            
            {children}
        </button>
    )
}

export default AddButton