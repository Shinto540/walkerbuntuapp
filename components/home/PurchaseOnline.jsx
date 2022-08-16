import { ProductCard, ProductImage, ProductBody } from "./FeaturedProducts";
import Styles from "../../styles/Product.module.css";

const PurchaseOnline = () => {
  return (
    <section className={Styles.products}>
      <div className={Styles.product__title}>
        <h2>Purchase Online on Hurst</h2>
        <span className={Styles.title__underline}></span>
      </div>

      <div className="flex flex-wrap gap-10 mt-16">
        <ProductCard>
          <ProductImage url="/product/pr-1.png" />
          <ProductBody title="dell - All in one" />
        </ProductCard>
        <ProductCard>
          <ProductImage url="/product/pr-2.png" />
          <ProductBody title="mac keyboard" />
        </ProductCard>
        <ProductCard>
          <ProductImage url="/product/pr-3.png" />
          <ProductBody title="headphone" />
        </ProductCard>
        <ProductCard>
          <ProductImage url="/product/pr-4.png" />
          <ProductBody title="laptop adaptor" />
        </ProductCard>
        <ProductCard>
          <ProductImage url="/product/pr-5.png" />
          <ProductBody title="dell - All in one" />
        </ProductCard>
        <ProductCard>
          <ProductImage url="/product/pr-6.png" />
          <ProductBody title="mac keyboard" />
        </ProductCard>
        <ProductCard>
          <ProductImage url="/product/pr-7.png" />
          <ProductBody title="headphone" />
        </ProductCard>
        <ProductCard>
          <ProductImage url="/product/pr-8.png" />
          <ProductBody title="laptop adaptor" />
        </ProductCard>
      </div>
    </section>
  );
};

export default PurchaseOnline;
