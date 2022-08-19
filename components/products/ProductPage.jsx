import ProductCategory from "./ProductCategory";
import ProductPaging from "./ProductPaging";
import ProductSearch from "./ProductSearch";
import ProductView from "./ProductView";

const ProductPage = () => {
  return (
    <>
      <aside>
        <ProductSearch />
        <ProductCategory />
      </aside>
      <main>
        <ProductView />
        <section>All Products</section>
        <ProductPaging />
      </main>
    </>
  );
};

export default ProductPage;
