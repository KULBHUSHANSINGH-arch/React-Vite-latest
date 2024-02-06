import { Link } from "react-router-dom";
// import abc from "../images/logo.jpg"
import abc from "../images/download.jpeg"
import Navbar from "./Navbar";
import styled from "styled-components";


const Header = () => {
  return (
   <MainHeader>
    <Link to="/">
        <img src={abc} alt="logo" className="logo"/>
    </Link>
    <Navbar />
   </MainHeader>
  );
}



const MainHeader = styled.header`
    padding: 10px;
    height: 10 rem ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bg} ;

    .logo{
        height: auto;
        max-width: 30%
    }
`;

export default Header;
