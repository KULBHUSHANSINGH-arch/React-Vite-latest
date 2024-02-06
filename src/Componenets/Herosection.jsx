import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { Button } from '../styles/Button';

const HeroSection = () => {
  return (
    <Wrapper>
        <div className="container grid grid-two-column" style={{margin: "30px"}}>
            <div className="section-hero-data">
                <p className="hero-top-data">This is me</p>
                <h1 className="hero-heading">Developer</h1>
                <p className="hero-para">
                As a Full Stack Developer, I design, develop, and maintain both front-end and back-end components of web applications to create seamless user experiences.ś
                </p>
                <Button className="btn hireme-btn">
                <NavLink to="/contact">hire me</NavLink>
            </Button>
            </div>

            {/* for images */}
            <div className="section-hero-image">
              <picture>
                <img src="./images/hero.svg" alt="hero image  " className= "hero-img " />
              </picture>
            </div>
        </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  padding: 1rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 600px;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 70%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;



