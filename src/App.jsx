import Hero from "./Sections/Hero"
import ShowcaseSection from "./Sections/ShowcaseSection"
import NavBar from "./Componenets/NavBar"
import FeatureCards from "./Sections/FeatureCards"
import ExperienceSection from "./Sections/ExperienceSection"
import TechStack from "./Sections/TechStack"
import Contact from "./Sections/Contact"  
import Footer from "./Sections/Footer"

const App = () => {
  return (
    <>
     <NavBar/>
    <Hero/>
    <ShowcaseSection/>
    <FeatureCards/>
    <ExperienceSection/>
    <TechStack/>
    <Contact/> 
    <Footer/>
    </>
  )
}

export default App