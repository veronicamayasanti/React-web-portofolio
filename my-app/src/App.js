import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LargeButton from "./Components/LargeButton";
import Portfolio from "./Components/Portfolio";
import Review from "./Components/Review";
import Service from "./Components/Service";
import SideBar from "./Components/SideBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SideBar />} />
          </Routes>
        </BrowserRouter>


      </div>

      <div className="content">
        <Header />
        <LargeButton/>
        <About/>
        <Education/>
        <Experience/>
        <Service/>
        <Portfolio/>
        <Review/>
        <Contact/>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
