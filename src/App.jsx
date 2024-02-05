import Home from './Home'
import About from './About';
import Contact from './Contact';
import Services from './Services';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Header from './Componenets/Header';
import Footer from './Componenets/Footer';
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from './GlobalStyle';




const App = () => {

  const theme = {
    colors:{
      heading:"rgb(24 ,24, 29)",
      text:"rgb(24 ,24, 29)",
      white:" #fff",
      black:"212529",
      helper:"#8490FF",
      bg :'rgb(249, 249, 255)',
      footer_bg: "30a1435",
      btn:"rgb(98, 84 ,243)",
      border:"rbga(98 ,84 ,243, 0.5)",
      hr:"fffff",
      gradient: "linear-gradient (0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)  ",
      shadow: "( rbga (0,0 , 0, 0.02) 0px 1px 3px 0px, rbga(27, 31, 35, 0.15) 0px 1px 0px 2px)",
      shadowSupport:"rbga ( 0, 0, 0, 0.16)  0px 1px 4px"
    
    },

    media : {mobile: "768px", tab: "998px"},
  };


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
      <Header>
        <Routes>
          <Route path ="/" element = {<Home/>} />
          <Route path ="/about" element = {<About/>} />
          <Route path ="/contact" element = {<Contact/>} />
          <Route path ="/services" element = {<Services/>} />
          <Route path ="/Header" element = {<Header/>} />
          <Route path ="/Footer" element = {<Footer/>} />
        </Routes>
        </Header>
      </BrowserRouter>


    </ThemeProvider>
  );
}

export default App;
