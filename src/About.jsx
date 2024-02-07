import HeroSection from "./Componenets/HeroSection"
import { useGlobalContext } from "./Context"
import { useEffect } from "react";

const About = () => {
  const { updateAboutPage } = useGlobalContext();
  useEffect(() =>  updateAboutPage() , []);
  return (
   <div>
    <HeroSection />
   </div>
  )
}

export default About

