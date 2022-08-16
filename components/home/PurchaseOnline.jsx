import { ProductCard, ProductFilter, ProductSectionHeader } from "../Products";
import Link from "next/link";

// Styles
import Styles from "../../styles/Product.module.css";

const PurchaseOnline = () => {
  return (
    <section className={Styles.products}>
      <ProductSectionHeader sectionTitle="Purchase Online on Hurst" />
      <ProductFilter />

      <div className={Styles.products__container}>
        <Link href="/" passHref>
          <ProductCard
            price={1_200_000}
            currency="TSh"
            labelText="New"
            imgUrl="/product/pr-1.png"
            title="Dell - All in One"
          />
        </Link>

        <Link href="/" passHref>
          <ProductCard
            price={60_000}
            currency="TSh"
            labelText="Sale"
            imgUrl="/product/pr-2.png"
            title="MAC Keyboard"
          />
        </Link>

        <Link href="/" passHref>
          <ProductCard
            price={45_000}
            currency="TSh"
            labelText="New"
            imgUrl="/product/pr-3.png"
            title="headphone"
          />
        </Link>

        <Link href="/" passHref>
          <ProductCard
            price={85_000}
            currency="TSh"
            labelText="Sale"
            imgUrl="/product/pr-4.png"
            title="Laptop Adapter"
          />
        </Link>
        <ProductCard
          price={5.99}
          currency="$"
          labelText="New"
          imgUrl="/product/pr-5.png"
          title="MACBook Pro"
        />
        <ProductCard
          price={5.99}
          currency="$"
          labelText="Sale"
          imgUrl="/product/pr-6.png"
          title="HP LaserJet Printer"
        />
        <ProductCard
          price={5.99}
          currency="$"
          labelText="New"
          imgUrl="/product/pr-7.png"
          title="Mouse Pointer"
        />
        <ProductCard
          price={5.99}
          currency="$"
          labelText="Sale"
          imgUrl="/product/pr-8.png"
          title="HP Specta"
        />
      </div>
    </section>
  );
};

export default PurchaseOnline;
