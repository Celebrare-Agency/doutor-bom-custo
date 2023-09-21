// import * as Styled from "./style.js";
import Header from "../../components/header/index";
import AboutUs from "../../components/homepage/2.aboutUs";
import Skills from "../../components/homepage/3.skills";
import Services from "../../components/homepage/4.services";
import Faq from "../../components/homepage/5.faq";
import Contact from "../../components/homepage/6.callUs";
import Partners from "../../components/homepage/7. partners";
import Banner from "./../../components/homepage/1.banner/index";
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
      <Partners />
    </>
  );
}
