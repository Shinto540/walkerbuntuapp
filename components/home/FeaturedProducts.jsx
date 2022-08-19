import { ProductCard, ProductSectionHeader } from "../products/Products";
import Link from "next/link";

// Styles
import Styles from "../../styles/Product.module.css";

const FeaturedProducts = () => {
  const products = [
    {
      title: "Dell - All in One",
      price: 1_200_000,
      currency: "TSh",
      labelText: "New",
      imgUrl: "pr-1.png",
    },
    {
      title: "MAC Keyboard",
      price: 60_000,
      currency: "TSh",
      labelText: "New",
      imgUrl: "pr-2.png",
    },
    {
      title: "headphone",
      price: 45_000,
      currency: "TSh",
      labelText: "Sale",
      imgUrl: "pr-3.png",
    },
    {
      title: "Laptop Adapter",
      price: 85_000,
      currency: "TSh",
      labelText: "New",
      imgUrl: "pr-4.png",
    },
  ];

  return (
    <section className={Styles.products}>
      <ProductSectionHeader sectionTitle="Featured Products" />

      <div className={Styles.products__container}>
        {products.map((product, index) => {
          const { title, price, currency, labelText, imgUrl } = product;

          return (
            <Link key={index} href="/" passHref>
              <a>
                <ProductCard
                  price={price}
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

      <>
        <div className={`${Styles.prev__next} ${Styles.prev}`}>
          P<br />r<br />e<br />v
        </div>
        <div className={`${Styles.prev__next} ${Styles.next}`}>
          N<br />e<br />x<br />t
        </div>
      </>
    </section>
  );
};

export default FeaturedProducts;
