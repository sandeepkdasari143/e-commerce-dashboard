import React from "react";
import { useDispatch } from "react-redux";
import {
    CLOSE_MODAL,
    OPEN_MODAL,
    OPEN_PRODUCTS_GRID
} from "../../../redux-store/modal.slice";
import { usePOSTFetch } from '../../hooks/usePOSTFetch';
import { ADD_PRODUCT } from "../../../redux-store/adminStore.slice";
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import AddButton from "../../../components/buttons/AddButton";

const ProductForm = () => {
    const dispatch = useDispatch();

    const [newProduct, setNewProduct] = React.useState({
        productTitle: "",
        productDescription: "",
        stock: 0,
    });

    const addProduct = async (event) => {
        event.preventDefault();
        const data = await usePOSTFetch(newProduct, "http://localhost:3690/api/v1/products")
        if(data?.newProduct) dispatch(ADD_PRODUCT(data?.newProduct));
        dispatch(CLOSE_MODAL())
        dispatch(OPEN_PRODUCTS_GRID());
        dispatch(OPEN_MODAL());
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    }

    const [images, setImages] = React.useState({
        uploadedImages: []
    });

    const [previewImageObjects, setPreviewImageObjects] = React.useState([]);

    const imageUploadEvent = async(e) => {
        const files = e.target.files; // typeof files = FileList
        setImages({ ...images, uploadedImages: [...images.uploadedImages, ...files] }); 
        
    }

    React.useEffect(() => {
        setPreviewImageObjects(images.uploadedImages.map((image) => {
            image = URL.createObjectURL(image);
            return image;
        }));
    }, [images.uploadedImages])
    
    // React.useEffect(()=>console.log(previewImageObjects),[previewImageObjects])//testing

    return (
        <div> 
            <form className={styles.form}>
                <div className={styles.textField}>
                    <label className={styles.label} htmlFor="productTitle">
                    Product Title
                    </label>
                    <input
                    className={styles.inputField}
                    id="productTitle"
                    name="productTitle"
                    placeholder="Product Title"
                    onChange={handleInputChange}
                    maxLength={100}
                    required
                    value={newProduct.productTitle}
                    type="text"
                    />
                    <p className={styles.helperMessage}>
                    <HelpRoundedIcon className={styles.helpIcon} />
                    <span>Please Enter Your Product Title in 100 Characters</span>
                    </p>
                </div>
                <div className={styles.textField}>
                    <label className={styles.label} htmlFor="productDescription">
                    Product Description
                    </label>
                    <textarea
                    className={styles.inputField}
                    id="productDescription"
                    name="productDescription"
                    placeholder="Product Description"
                    onChange={handleInputChange}
                    maxLength={200}
                    value={newProduct.productDescription}
                    rows={4}
                    type="text"
                    />
                    <p className={styles.helperMessage}>
                    <HelpRoundedIcon className={styles.helpIcon} />
                    <span>Describe your Product in 200 characters.</span>
                    </p>
                </div>
                <div className={styles.textField}>
                    <label className={styles.label} htmlFor="stock">
                    Stock
                    </label>
                    <input
                    className={styles.inputField}
                    id="stock"
                    min="0"
                    name="stock"
                    placeholder="Stock"
                    onChange={handleInputChange}
                    required
                    value={newProduct.stock}
                    type="number"
                    />
                    <p className={styles.helperMessage}>
                    <HelpRoundedIcon className={styles.helpIcon} />
                    <span>Please Enter the Stock of this Product.</span>
                    </p>
                </div>
                <div className={styles.textField}>
                    <label htmlFor="productImages" className={styles.imageUploadLabel}>
                        <h1 className={styles.labelText}>Click To Upload
                            <span className='font-bold text-[#C026D3]/60'> Product Images</span>
                        </h1>
                        <div className="max-h-[300px] overflow-auto flex flex-wrap gap-3 items-center justify-center">
                            {previewImageObjects.length!==0 &&
                                previewImageObjects?.map((preview, index) => (
                                    <img key={index} src={preview} className={styles.imagePreview}/>
                                ))
                            }
                        </div>
                        
                        <input className={styles.hiddenImageInput}
                        id="productImages" accept="image/*" type='file' multiple
                        onChange={imageUploadEvent} required/>
                    </label>
                    <p className={styles.helperMessage}>
                        <HelpRoundedIcon className={styles.helpIcon}/>
                        <span>Click Anywhere in above area to upload Product Images</span>
                    </p>
                </div>
                
            </form>
            <footer className={styles.footerButtons}>
                <SecondaryButton>Cancel</SecondaryButton>
                <AddButton>Add In Collection</AddButton>
            </footer>
        </div>
        
    );
};

const styles = {
    form: "p-3 flex flex-col gap-5 w-[400px] h-[60vh] overflow-auto",
    textField: "flex flex-col gap-1",
    label: "font-semibold text-[#C026D3] text-sm",
    inputField: "px-3 py-2 w-full rounded-lg outline-none dark:bg-gray-900 dark:focus:bg-gray-700 border dark:border-gray-600 border-gray-800 focus:border-[#C026D3] focus:bg-[#C026D3]/10 dark:focus:border-[#C026D3] font-semibold text-sm",
    helpIcon:"!text-sm",
    helperMessage: "flex items-center gap-1 text-xs dark:text-gray-500 font-semibold",
    footerButtons: "p-5 flex items-center justify-end gap-5",

    imageUploadLabel: 'relative px-2 py-5 w-full rounded-lg outline-none dark:bg-gray-900 border-dashed border-[#C026D3] border-2 dark:border-[#C026D3] font-semibold text-xl flex flex-col gap-3 items-center justify-center',

    imagePreviewFallback: 'h-[100px] w-[100px] object-cover rounded-xl border-dashed border-2 border-[#C026D3] dark:border-[#C026D3] dark:text-white/50 text-gray-700/50 dark:bg-gray-700 text-gray-700 flex items-center justify-center text-center text-sm',
    imagePreview: 'h-[100px] w-[100px] object-cover rounded-xl',
    labelText: 'text-sm text-gray-800/60 dark:text-white/60 pb-5',
    hiddenImageInput: 'hidden absolute inset-x-0 inset-y-0',
}

export default ProductForm;
