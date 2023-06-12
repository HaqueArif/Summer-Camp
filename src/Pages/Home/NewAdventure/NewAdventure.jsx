import './NewAdventure.css'
import lightbulb from '../../../assets/summer_icon-lightbulb.png'
import purpleLightning from '../../../assets/summer_icon-purple-lightning.png'
import stars from '../../../assets/summer_icon-stars.png'
import { Link } from 'react-router-dom';

const NewAdventure = () => {
    return (
        <div className="wcBanner pt-16 pb-20">
            <div className='text-white xl:px-72 lg:px-60 md:px-10 text-center pt-16'>
                <h2 className='text-2xl md:text-3xl mb-2'>Summer Camp 2023</h2>
                <h1 className='text-3xl md:text-7xl'>Embark on a Brand New Adventure!</h1>
                <p>Fresh air and fun in the sun with friends meets endless opportunities for hands-on learning, exploration, and personal growth. Summer Camp with RAS—the coolest place to BE A KID!</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 px-2 xl:px-40 lg:px-10 mt-20 gap-8'>
                <div className='bg-base-100 campHover -rotate-1 rounded-lg max-w-sm mx-auto px-5 pb-10'>
                    <div className=''>
                        <img src={lightbulb} className='mx-auto mb-2 mt-[-25px]' />
                    </div>
                    <h2 className='font-extrabold text-5xl text-center text-[#262261] mb-2'>Fun Hands-on Activities</h2>
                    <p className='font-bold text-center text-[#262261] mb-2'>With hundreds of activities to choose from, every day is a fresh day to get messy, get involved, and get active!</p>
                    <p className='text-xs text-center text-[#262261] mb-2'>From slimy science experiments and brain-teasing challenges to fantasy adventures and crafty creations – a little something for everyone!</p>
                </div>

                <div className='bg-base-100 campHover rotate-1 rounded-lg max-w-sm mx-auto px-5 pb-10'>
                    <div className=''>
                        <img src={stars} className='mx-auto mb-2 mt-[-25px]' />
                    </div>
                    <h2 className='font-extrabold text-5xl text-center text-[#262261] mb-2'>New & Best Friendships</h2>
                    <p className='font-bold text-center text-[#262261] mb-2'>Set sail on a Summer experience with best friends from the school year and meet new friends while making lasting memories.</p>
                    <p className='text-xs text-center text-[#262261] mb-2'>Teamwork and bonding are at the root of what Summer Camp is all about. Making friends has never been easier, and your kiddo will have a boatload more to look forward to next school year!</p>
                </div>

                <div className='bg-base-100 campHover -rotate-1 rounded-lg max-w-sm mx-auto px-5 pb-10'>
                    <div className=''>
                        <img src={purpleLightning} className='mx-auto mb-2 mt-[-25px]' />
                    </div>
                    <h2 className='font-extrabold text-5xl text-center text-[#262261] mb-2'>Explore & Discover</h2>
                    <p className='font-bold text-center text-[#262261] mb-2'>Together, we are heading on a journey of self-discovery and exploration!</p>
                    <p className='text-xs text-center text-[#262261] mb-2'>Kids will try new things, discover new passions, and get lots of time to develop their own interests. Join us on an expedition in search of what makes us smile and what makes us laugh. Scroll down below for a sneak peek at our camp activity themes!</p>
                </div>
            </div>
            <div className="campHover pt-10 text-center md:my-5"><Link className="bannerNav shadow-xl font-extrabold hover:bg-white hover:text-[#204FB6] bg-[#bbee02] text-[#262261] text-xl mr-5  px-8 py-3">Get started today</Link></div>
        </div>
    );
};

export default NewAdventure;