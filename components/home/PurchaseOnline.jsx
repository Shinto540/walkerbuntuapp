import { ProductCard, ProductImage, ProductBody } from "./FeaturedProducts";
import Styles from "../../styles/Product.module.css";
import Link from "next/link";

const PurchaseOnline = () => {
  return (
    <section className={Styles.products}>
      <div className={Styles.product__title}>
        <h2>Purchase Online on Hurst</h2>
        <span className={Styles.title__underline}></span>
      </div>
      <NavFilter />
      <ProductDisplay />
    </section>
  );
};

export const ProductDisplay = () => {
  return (
    <div className="grid grid-cols-4 gap-10 mt-16">
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
  );
};

export const NavFilter = () => {
  return (
    <div className="flex justify-center gap-12 mt-7">
      <Link href="">
        <a className="font-medium text-gray-600 text-lg">New Arrivals</a>
      </Link>
      <Link href="">
        <a className="font-medium text-gray-600 text-lg">Best Seller</a>
      </Link>
      <Link href="">
        <a className="font-medium text-gray-600 text-lg">Most View</a>
      </Link>
      <Link href="">
        <a className="font-medium text-gray-600 text-lg">Discounts</a>
      </Link>
    </div>
  );
};

export default PurchaseOnline;
