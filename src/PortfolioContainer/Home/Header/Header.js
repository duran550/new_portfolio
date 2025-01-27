import React, {useState} from 'react';
import {TOTAL_SCREENS, GET_SCREEN_INDEX} from '../../../utilities/commonUtils';
import ScrollService from '../../../utilities/ScrollService';
// import {faBars} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FaBar from '@/../../public/bar03.png'
import './Header.css';

export default function Header() {
    const [selectedScreen, setSelectedScreen] = useState('Home')
    const [activeUrl, setActiveUrl] = useState('Home')
    const [showHeaderOptions, setShowHeaderOptions] = useState(false)
    const updateCurrentScreen = (currentScreen) => {
        if(!currentScreen || !currentScreen.screenInView) 
        return;
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView)
        if(screenIndex < 0)
        return;
    }

    let currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen) 

    const getHeaderOptions = () => {
        return (
            TOTAL_SCREENS.map((screen, i) => (
                <div key={screen.screen_name} className={getHeaderOptionsClass(i, screen.screen_name)} onClick={() => switchScreen(i, screen)}>
                    <span>{screen.screen_name}</span>
                </div>
            ))
        )
    }

    const getHeaderOptionsClass = (index, name) => {
        let classes = "header-option";
        if (index < TOTAL_SCREENS.length - 1) {
            classes += " header-option-separator"; 
        }  
        if (activeUrl === name) {
            classes += " selected-header-option";
        }  
        return classes;
    }

    const switchScreen  = (index, screen) => {
        setActiveUrl(screen.screen_name)
        let screenComponent = document.getElementById(screen.screen_name)
        if(!screenComponent) 
        return;

        screenComponent.scrollIntoView({behavior: "smooth"})
        setSelectedScreen(screen.screen_name);
        setShowHeaderOptions(false);
    };

    return (
        <div>
            <div className="header-container" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                <div className="header-parent">
                    <div className='header-hamburger' onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                        {/* <FontAwesomeIcon className='header-hamburger-bars' icon={faBars}/> */}
                        <img src={FaBar} alt='fabar' style={{width:'30px'}}/>
                    </div>
                    <div className='header-logo'>
                        <span>
                            DURAN'S
                        </span>
                    </div>
                    <div className={(showHeaderOptions) ? "header-options show-hamburger-options" : "header-options"}>
                        {getHeaderOptions()}
                    </div>
                </div>
            </div>                               
        </div>
    )
}