import DashboardHeader from "../../components/DashboardHeader";
import DashboardSidebar from "../../components/DashboardSidebar";
import AddModal from "../../../components/ui-components/AddModal";
import { useState } from "react";
import ProductForm from "./ProductForm";
import StockHeader from "./StockHeader";
import StockContent from "./StockContent";

const Stock = () => {
    const [isProductFormOpen, setIsProductFormOpen] = useState(false);
    const CloseAddModal = () => setIsProductFormOpen(false);

    return (
        <div className="transition-all duration-200 linear lg:h-[100vh] w-[100vw] dark:bg-[rgb(20,20,31)] bg-pink-50">
            <DashboardHeader />
            <main className={styles.productsWrapper}>
                <DashboardSidebar />
                <section className={styles.productsContent}>
                    <StockHeader setIsProductFormOpen={setIsProductFormOpen} />
                    <StockContent setIsProductFormOpen={setIsProductFormOpen} />
                </section>
            </main>

            <AddModal
                    modalTitle={"Add Product to the Store"}
                    isAddModalOpen={isProductFormOpen}
                    CloseAddModal={CloseAddModal}
                >
                    <ProductForm CloseModal={CloseAddModal} />
            </AddModal>
        </div>
    );
};
const styles = {
    productsWrapper: "flex flex-col md:flex-row",
    productsContent: "transition-all duration-200 linear h-[92vh] md:w-[70%] lg:w-[85%] w-[100vh] dark:bg-[rgb(20,20,31)] bg-pink-100",
};
export default Stock;
