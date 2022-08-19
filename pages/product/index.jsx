import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import ProductPage from "../../components/products/ProductPage";

const Product = () => {
  return (
    <Layout>
      <PageHeader pageTitle="Product Grid View" />
      <ProductPage />
    </Layout>
  );
};

export default Product;
