// App.js
import React, { useRef } from 'react';
import NavbarComponent from '../Navbar/Navbar';
import AboutMe from './AboutMe';
import Skill from './Skills';
import Projects from './Projects';
import Contact from './Contact';
const MainPage = () => {
    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const skillsRef = useRef(null);
    const handleScrollToSection = (section) => {
        switch (section) {
            case 'aboutMe':
                if (aboutMeRef.current) {
                    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
                }
                break;
            case 'projects':
                if (projectsRef.current) {
                    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
                }
                break;
            case 'contact':
                if (contactRef.current) {
                    contactRef.current.scrollIntoView({ behavior: 'smooth' });
                }
                break;
            case 'skill':
                if (contactRef.current) {
                    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
                }
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <NavbarComponent onScrollToSection={handleScrollToSection} />
            <AboutMe ref={aboutMeRef} />
            <Skill ref={skillsRef}/>
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />

        </div>
    );
};

export default MainPage;