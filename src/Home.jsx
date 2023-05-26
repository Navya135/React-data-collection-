import { useEffect } from "react";
import ContentSection from "./components/ContentSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = () => {

  return (
    <div style={{backgroundImage: "linear-gradient(79deg, #D3D3D3, #FFC0CB 48%, #D3D3D3)",
    backgroundSize: "cover",
    backgroundPosition: "center"}}>
    <Header />
      <ContentSection />
      <Footer />
    </div>
  );
};

export default Home;