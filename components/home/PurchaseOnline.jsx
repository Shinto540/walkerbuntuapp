import {
  ProductCard,
  ProductFilter,
  ProductSectionHeader,
  currencyShillingsToUsd,
} from "../products/Products";
import Link from "next/link";

// Styles
import Styles from "../../styles/Product.module.css";

const PurchaseOnline = () => {
  const products = [
    {
      title: "Dell - All in One",
      price: 1_200_000,
      currency: "$",
      labelText: "New",
      imgUrl: "pr-1.png",
    },
    {
      title: "MAC Keyboard",
      price: 60_000,
      currency: "$",
      labelText: "New",
      imgUrl: "pr-2.png",
    },
    {
      title: "headphone",
      price: 45_000,
      currency: "$",
      labelText: "Sale",
      imgUrl: "pr-3.png",
    },
    {
      title: "Laptop Adapter",
      price: 85_000,
      currency: "$",
      labelText: "New",
      imgUrl: "pr-4.png",
    },
    {
      title: "MACBook Pro",
      price: 51_600,
      currency: "$",
      labelText: "New",
      imgUrl: "pr-5.png",
    },
    {
      title: "HP LaserJet Printer",
      price: 499_999,
      currency: "$",
      labelText: "Sale",
      imgUrl: "pr-6.png",
    },
    {
      title: "Mouse Pointer",
      price: 22_050,
      currency: "$",
      labelText: "New",
      imgUrl: "pr-7.png",
    },
    {
      title: "HP Specta",
      price: 158_500,
      currency: "$",
      labelText: "New",
      imgUrl: "pr-8.png",
    },
  ];

  return (
    <section className={Styles.products}>
      <ProductSectionHeader sectionTitle="Purchase Online on Hurst" />
      <ProductFilter />

      <div className={Styles.products__container}>
        {products.map((product, index) => {
          const { title, price, currency, labelText, imgUrl } = product;

          return (
            <Link key={index} href="/product" passHref>
              <a>
                <ProductCard
                  price={currencyShillingsToUsd(price)}
                  currency={currency}
                  labelText={labelText}
                  imgUrl={imgUrl}
                  title={title}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PurchaseOnline;
