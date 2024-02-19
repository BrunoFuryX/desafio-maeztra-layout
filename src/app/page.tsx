import Fullbanner from "./components/fullbanner";
import Header from "./components/header";
import styles from "./page.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Benefits from "./components/benefits";
import Brands from "./components/brands";
import Footer from "./components/footer";
import Newsletter from "./components/newsletter";
import Banner from "./components/banner";
import Showcase from "./components/showcase";
import Modal from "./components/modal";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Fullbanner />
      <Benefits />
      <Brands />
      <Showcase />
      <Banner />
      <Newsletter />
      <Footer />
      <Modal />
    </main>
  );
}
