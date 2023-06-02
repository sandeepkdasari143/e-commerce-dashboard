import DashboardHeader from "../../components/DashboardHeader";
import DashboardSidebar from "../../components/DashboardSidebar";
import AddModal from '../../../components/ui-components/AddModal';
import { useState } from 'react'
import AddButton from '../../../components/buttons/AddButton'
import ProductForm from "./ProductForm";

const Products = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const CloseAddModal = () => setIsAddModalOpen(false);

    return (
        <div className="transition-all duration-200 linear h-[100vh] w-[100vw] dark:bg-[rgb(20,20,31)] bg-pink-100">
        <DashboardHeader />
        <main className={styles.productsWrapper}>
            <DashboardSidebar />
            <section className={styles.productsContent}>
                <AddButton onClickHandler={() => setIsAddModalOpen(true)}>
                    <span>Add Product</span>
                </AddButton>
                <AddModal modalTitle={"Add Product to the Store"} isAddModalOpen={isAddModalOpen} CloseAddModal={CloseAddModal}>
                    <ProductForm CloseModal={CloseAddModal}/>
                </AddModal>
            </section>
        </main>
        </div>
    );
};
const styles = {
    productsWrapper: "flex md:felx-col",
    dashboardContent:"transition-all duration-200 linear h-[92vh] md:w-[85%] w-[100vh] dark:bg-[rgb(20,20,31)] bg-pink-100",
};
export default Products