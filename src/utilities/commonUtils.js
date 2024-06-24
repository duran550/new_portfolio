import Home from "../PortfolioContainer/Home/Home";
import AboutMe from '../PortfolioContainer/AboutMe/AboutMe';
import Resume from "../PortfolioContainer/Resume/Resume";
import Project from '../PortfolioContainer/Project/Project';
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";


export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
        num:0

    },
    {
        screen_name: "About Me",
        component: AboutMe,
        num:1
    },
    {
        screen_name: "Resume",
        component: Resume,
        num:2
    },
    {
        screen_name: "Projects",
        component: Project,
        num:3
    },
    {
        screen_name: "Contact Me",
        component: ContactMe,
        num:4
    }
];

export const GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) return -1;
  
    for (let i = 0; i < TOTAL_SCREENS.length; i++) {
      if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
  
    return -1;
  };
