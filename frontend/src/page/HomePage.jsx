import Preview from "../component/homePage/CategoryPreview";
import Promo from "../component/homePage/Promo";
import WithMenuLayout from "../component/layout/index";
import Service from "../component/homePage/Service";
import Deals from "../component/homePage/DealsPreview";
import WatchCollection from "../component/homePage/WatchCollectionPreview";
import { Seo } from "../../utils/SEO/SEO";
import Banner from "../assets/Images/Banner.webp";

function HomePage() {
  return (
    <>
      <Seo
        title="Velora | Curated fashion by Omid Teimory"
        description="Discover Velora's curated fashion for men, women, watches, and accessories. Built and developed by Omid Teimory."
        image={Banner}
      />
      <Promo />
      <Preview />
      <Deals />
      <WatchCollection />
      <Service />
    </>
  );
}

export default WithMenuLayout(HomePage);
