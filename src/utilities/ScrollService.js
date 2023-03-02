import {TOTAL_SCREENS} from './commonUtils';
import{Subject} from 'rxjs';

export default class ScrollService {
    static scrollHandler = new ScrollService();

    static currentScreenBroadCaster = new Subject()
    static currentScreenFadeIn = new Subject()

    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }

    /* SCROLL TO HIRE ME / CONTACT ME SCREEN */
    scrollToHireMe = () => {
        let contactMeScreen = document.getElementById("Contact Me")
        if(!contactMeScreen) return;
        contactMeScreen.scrollIntoView({ behavior: "smooth"})
    }
    scrollToHome = () => {
        let hoMeScreen = document.getElementById("Home")
        if(!hoMeScreen) return;
        hoMeScreen.scrollIntoView({ behavior: "smooth"})
    }
    isElementView = (elem, type) => {
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.bottom;

        let partiallyVissible = elementTop < window.innerHeight && elementBottom >=0;
        let completelyVissible = elementTop >=0 && elementBottom <= window.innerHeight;

        switch(type) {
            case "partial":
                return partiallyVissible;
            
            case "complete":
                return completelyVissible
                default: 
                return false 
        }
    }

    checkCurrentScreenUnderViewport = (event) => {
        if(!event || Object.keys(event).length < 1)
        return;
        for(let screen of TOTAL_SCREENS) {
            let screenFromDOM = document.getElementById(screen.screen_name);
            if(!screenFromDOM)
            continue;

            let fullyVisible = this.isElementView(screenFromDOM, "complete");
            let partiallyVissible = this.isElementView(screenFromDOM, "partial")

            if(fullyVisible || partiallyVissible) {
                if(partiallyVissible && !screen.alreadyRendered) {
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendered'] = true;
                    break;
                }
                if (fullyVisible) {
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name,
                    });
                    break;
                }
            }
        }
    }
}