// Styles
import Image from "next/image";
import Link from "next/link";
import {
  FaHeart,
  FaSearchengin,
  FaRetweet,
  FaCartArrowDown,
} from "react-icons/fa";

// Styles
import Styles from "../../styles/Product.module.css";

export const ProductSectionHeader = ({ sectionTitle }) => {
  return (
    <div className={Styles.product__title}>
      <h2>{sectionTitle}</h2>
      <span className={Styles.title__underline}></span>
    </div>
  );
};

export const ProductFilter = () => {
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

export const ProductCard = ({ labelText, price, currency, imgUrl, title }) => {
  return (
    <div className={Styles.product__card}>
      <div className={Styles.card__header}>
        <StatusLabel text={labelText} />
        <PriceLabel price={price} currency={currency} />
      </div>

      <ProductImage url={`/product/${imgUrl}`} />
      <ProductName title={title} />
      <ActionBar />
    </div>
  );
};

export const PriceLabel = ({ price, currency }) => {
  return (
    <span className={Styles.product__price}>
      {currency} {numberFormatter(price)}
    </span>
  );
};

export const StatusLabel = ({ text }) => {
  return (
    <span
      className={`${Styles.product__label} ${
        text === "New" ? Styles.label__new : Styles.label__sale
      }`}
    >
      {text}
    </span>
  );
};

export const ProductImage = ({ url }) => {
  return (
    <div className={Styles.product__img}>
      <Image src={url} alt="" width={300} height={275} />
    </div>
  );
};

export const ProductName = ({ title }) => {
  return (
    <div className="text-center">
      <h3 className="text-md font-bold text-gray-600 uppercase">{title}</h3>
    </div>
  );
};

const ActionBar = () => {
  return (
    <div className={Styles.action__bar}>
      <div className={Styles.action}>
        <FaHeart />
        <ToolTip text="wishlist" />
      </div>
      <div className={Styles.action}>
        <FaSearchengin />
        <ToolTip text="quick view" />
      </div>
      <div className={Styles.action}>
        <FaRetweet />
        <ToolTip text="compare" />
      </div>
      <div className={Styles.action}>
        <FaCartArrowDown />
        <ToolTip text="add to cart" />
      </div>
    </div>
  );
};

const ToolTip = ({ text }) => {
  return (
    <div className={Styles.tooltip__container}>
      <span className={Styles.tooltip__text}>{text}</span>
      <span className={Styles.tooltip__arrow}></span>
    </div>
  );
};

// format number ot human readable format
export const numberFormatter = (numValue) => {
  return numValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Currency Converter TSHs to USD
export const currencyShillingsToUsd = (
  priceInShillings,
  exchangeRate = 2332.0
) => {
  //
  return (priceInShillings / exchangeRate).toFixed(2);
};
