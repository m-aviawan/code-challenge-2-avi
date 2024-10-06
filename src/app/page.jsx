import Image from "next/image";
import Hero from "./features/home/components/hero";
import Award from "./features/home/components/award";
import ProductsMain from "./components/products";
import Now from "./components/now";
import Testimonials from "./features/home/components/testimonials";
import GlobalNetworkBanner from "./features/home/components/globalNetworkBanner";
import HistoryBanner from "./components/historyBanner";
import CompanyCulture from "./components/companyCulture";

export default function Home() {

  return (
    <main className='flex flex-col'>
        <Hero />
        <Award />
        <ProductsMain />
        <Now />
        <HistoryBanner />
        <CompanyCulture />
        <Testimonials />
        <GlobalNetworkBanner />
    </main>
  );
}
