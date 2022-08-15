import Image from "next/image";
import Styles from "../../styles/Product.module.css";
import {
  FaRetweet,
  FaCartArrowDown,
  FaSearchengin,
  FaHeart,
} from "react-icons/fa";

const FeaturedProducts = () => {
  return (
    <section className={Styles.products}>
      <div className={Styles.product__title}>
        <h2>Featured Products</h2>
        <span className={Styles.title__underline}></span>
      </div>

      <div className="flex gap-10 mt-16">
        <ProductCard>
          <ProductImage url="/product/pr-5.png" />
          <ProductBody title="dell - All in one" />
        </ProductCard>
        <ProductCard>
          <ProductImage url="/product/pr-1.png" />
          <ProductBody title="dell - All in one" />
        </ProductCard>
        <ProductCard>
          <ProductImage url="/product/pr-2.png" />
          <ProductBody title="dell - All in one" />
        </ProductCard>
        <ProductCard>
          <ProductImage url="/product/pr-3.png" />
          <ProductBody title="dell - All in one" />
        </ProductCard>
      </div>
    </section>
  );
};

export const ProductCard = ({ children }) => {
  return (
    <div className={Styles.product__card}>
      <div className={Styles.card__header}>
        <ProductLabel text="new" />
        <ProductPrice price="1,200,000" />
      </div>

      {children}
    </div>
  );
};

const ProductPrice = ({ price }) => {
  return <span className={Styles.product__price}>{price} Tsh</span>;
};

const ProductLabel = ({ text }) => {
  return <span className={Styles.product__label}>{text}</span>;
};

export const ProductImage = ({ url }) => {
  return (
    <div className={Styles.product__img}>
      <Image src={url} alt="" width={350} height={350} />
    </div>
  );
};

const ProductBody = ({ title }) => {
  return (
    <div className="text-center">
      <h3 className="text-md font-bold text-gray-600 uppercase">{title}</h3>

      <div className="flex justify-evenly bg-gray-100 text-gray-500 p-3 mt-4">
        <div className="text-lg">
          <FaHeart />
        </div>
        <div className="text-xl">
          <FaSearchengin />
        </div>
        <div className="text-2xl">
          <FaRetweet />
        </div>
        <div className="text-lg">
          <FaCartArrowDown />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
