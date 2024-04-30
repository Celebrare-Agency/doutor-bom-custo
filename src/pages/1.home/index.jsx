// import * as Styled from "./style.js";
import Header from "../../components/GLOBAL/header/index";
import AboutUs from "../../components/1.home/2.aboutUs";
import Skills from "../../components/1.home/3.skills";
import Services from "../../components/1.home/4.services";
import Faq from "../../components/1.home/5.faq";
import Contact from "../../components/1.home/6.callUs";
import Partners from "../../components/1.home/7. partners";
import Banner from "./../../components/1.home/1.banner/index";
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
      <Skills />
      <Services />
      <Faq />
      <Contact />
      {/* <Partners /> */}
    </>
  );
}
