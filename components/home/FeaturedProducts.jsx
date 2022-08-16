import { ProductCard, ProductSectionHeader } from "../Products";
import Link from "next/link";

// Styles
import Styles from "../../styles/Product.module.css";

const FeaturedProducts = () => {
  return (
    <section className={Styles.products}>
      <ProductSectionHeader sectionTitle="Featured Products" />

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
      </div>
      <div className={`${Styles.prev__next} ${Styles.prev}`}>
        P<br />r<br />e<br />v
      </div>
      <div className={`${Styles.prev__next} ${Styles.next}`}>
        N<br />e<br />x<br />t
      </div>
    </section>
  );
};

export default FeaturedProducts;
