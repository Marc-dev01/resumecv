import "./App.css";
import "./css/default.css";
import "./css/media-queries.css";
import "./css/magnific-popup.css";
import "./css/layout.css";

///////////////////////////////////////
/* import "./js/init.js"; */
/* import "./js/jquery.fittext.js"; */
/* import "./js/jquery.flexslider.js"; */
import About from "./components/about/About";
import CallAction from "./components/call action/CallAction";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonials/Testimonial";
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <CallAction />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
