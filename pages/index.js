import Head from "next/head";
import Layout from "../components/Layout";
import Slider from "../components/home/Slider";
import Banner from "../components/home/Banner";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Discounts from "../components/home/Discount";
import PurchaseOnline from "../components/home/PurchaseOnline";
import BrandLogo from "../components/home/BrandLogo";

const Home = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="" />
        <meta name="keyword" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

        <title>Home || mchongotz</title>
      </Head>

      <Layout>
        <Slider />
        <Banner />
        <FeaturedProducts />
        <Discounts />
        <PurchaseOnline />
        <BrandLogo />
      </Layout>
    </>
  );
};

export default Home;
