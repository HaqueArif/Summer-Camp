import Banner from "../Banner/Banner";
import FollowUs from "../FollowUs/FollowUs";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import NewAdventure from "../NewAdventure/NewAdventure";
import './Home.css'
import WeeklyCamp from "../WeeklyCamp/WeeklyCamp";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
// import SpectSummer from "../SpectSummer/SpectSummer";

const Home = () => {

    const [themeMode, setThemeMode] = useState('light');

    const lightThemeClasses = 'bg-white text-black';
    const darkThemeClasses = 'bg-black text-white';

    const toggleTheme = () => {
        setThemeMode(themeMode === 'light' ? 'dark' : 'light');
    };
   
    return (
        <div className={themeMode === 'light' ? lightThemeClasses : darkThemeClasses}>
            <div className="relative homeBanner ">
                <Banner></Banner>
                {/* <SpectSummer></SpectSummer> it will  be added after assignment result */}
                <PopularClass></PopularClass>
                <NewAdventure></NewAdventure>
                <PopularInstructors></PopularInstructors>
                <WeeklyCamp></WeeklyCamp>
                <FollowUs></FollowUs>
            </div>

            <button
                className="p-1 md:px-4 absolute top-1 right-1 md:py-2 rounded-xl bg-gray-500 text-white"
                onClick={toggleTheme}
            >
                {themeMode === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            <input type="checkbox" className="toggle toggle-sm" checked />


        </div>
    );
};

export default Home;