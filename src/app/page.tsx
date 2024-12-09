
import Categories from "./components1/Categories";
import CompanyLogo from "./components1/companyLogo";

import Hero from "./components1/Hero";
import HotProduct from "./components1/hotProduct";
import OurProduct from "./components1/ourProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />
      

      <Categories />
      <HotProduct />
      <OurProduct />
    </>
  );
}