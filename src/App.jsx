import Hero from "./Componenets/Sections/Hero"
import ShowcaseSection from "./Componenets/Sections/ShowcaseSection"
import NavBar from "./Componenets/NavBar"
import FeatureCards from "./Componenets/Sections/FeatureCards"
import ExperienceSection from "./Componenets/Sections/ExperienceSection"
import TechStack from "./Componenets/Sections/TechStack"
import Contact from "./Componenets/Sections/Contact"  
import Footer from "./Componenets/Sections/Footer"

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