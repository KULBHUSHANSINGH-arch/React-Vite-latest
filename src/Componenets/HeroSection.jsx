
import styled from "styled-components";

const HeroSection = () => {
  return (
   <Wrapper>
    <div className="container grid  grid-two-coloumn">
        <div className="section-hero-data">
            <p className="hero-top-data">This is me </p>
            <h1 className="hero-heading">Developers Choice </h1>
            <p className="hero-para"> I am a Developer . A Full Stack Web Developer , freelancer.. I am Designed the Websites For Client side View</p>
        </div>
        {/* < Button  className="btn hireme-btn">
            <NavLink to="/  ">hire me</NavLink>
        </Button>  */}
        

        {/* for image */}
        <div className="section-hero-image"></div>
    </div>
   </Wrapper>

  );
}

const Wrapper   = styled.section``;

export default HeroSection;
