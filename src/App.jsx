import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import HeroGradient from './components/heroSection/HeroGradient'
import SubHeroSection from './components/heroSection/SubHeroSection'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import HelperSection from './components/HelperSection'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import ProjectsMain from './components/projectSection/ProjectsMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'
import AcademicProgression from './components/AcademicProgression'
import CertificationPage from './components/CertificationPage';

const ScrollToSection = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(location.state.scrollTo, {
          smooth: true,
          duration: 500,
          offset: -50,
        });
      }, 100);
    }
  }, [location]);
  return null;
};

const App = () => {
  return (
    <Router>
      <main className="font-body">
        <NavbarMain />
        <ScrollToSection />
        <Routes>
          <Route path="/" element={
            <>
              <HeroMain />
              <HeroGradient />
              <SubHeroSection />
              <AboutMeMain />
              <SkillsMain />
              <SubSkills />
              {/* <ExperienceMain /> */}
              <ProjectsMain />
              <ContactMeMain />
              <FooterMain />
              <HelperSection />
            </>
          } />
          <Route path="/academic-progression" element={<AcademicProgression />} />
          <Route path="/certifications" element={<CertificationPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;