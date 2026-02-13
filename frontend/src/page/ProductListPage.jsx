import WithMenuLayout from "../component/layout/index";
import ProductList from "../component/productListPage/ProductListPage";
import { Seo } from "../../utils/SEO/SEO";

function ProductListPage() {
  return (
    <>
      <Seo
        title="Shop Products | Velora"
        description="Browse Velora's catalog of curated fashion picks across men, women, accessories, and watches. Crafted by Omid Teimory."
      />
      <ProductList />
    </>
  );
}

const WrappedProductListPage = WithMenuLayout(ProductListPage);
export default WrappedProductListPage;
