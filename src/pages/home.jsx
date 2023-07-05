import "./home.css";
import Navbar from "../components/navBar/NavBar"
import AboutMe from "../components/About Me/AboutMe";
import Projects from "../components/Project/Projects";
// import Skills from "../components/test/test.jsx"
import Skills from "../components/skills/skillbar"
import ContactMe from "../components/ContactMe/contact"
import Footer from "../components/footer/Footer"

const Home = () => {
    return (
        <div class="Interface">
            <Navbar />
            <AboutMe/>
            <Projects/>
            <Skills/>
            <ContactMe/>
            <Footer/>
        </div>
        );
};

export default Home;