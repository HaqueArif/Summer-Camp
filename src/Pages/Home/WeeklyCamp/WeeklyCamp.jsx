import superHero from '../../../assets/weeklyCamp/summer_superheroes.png'
import zoodities from '../../../assets/weeklyCamp/summer_zoodities.png'
import carnival from '../../../assets/weeklyCamp/summer_camp-carnival.png'
import construction from '../../../assets/weeklyCamp/construction-zone_constuction-zone-1.png'
import ooey from '../../../assets/weeklyCamp/summer_oeey-gooey-kablooie.png'
import { Link } from 'react-router-dom'

const WeeklyCamp = () => {
    return (
        <div className='px-5 lg:px-40 md:px-10 mb-20'>
            <div className="text-center">
                <h3 className="text-3xl font-bold text-[#262261] ">Summer Camp Themes</h3>
                <h1 className="text-5xl md:text-7xl font-bold text-[#262261] ">Weekly Camp Theme Sneak Peek</h1>
                <p className="text-[#262261] mt-3">Fresh air and fun in the sun with friends meets endless opportunities for hands-on learning, exploration, and personal growth. Summer Camp with RAS—the coolest place to BE A KID!</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-5 justify-center gap-2 md:gap-8 mt-5'>
                <img src={superHero} className='campHover' />
                <img src={zoodities} className='campHover' />
                <img src={carnival} className='campHover' />
                <img src={construction} className='campHover' />
                <img src={ooey} className='campHover' />
            </div>
            <div className="campHover pt-10 text-center my-2"><Link className="bannerNav shadow-xl font-extrabold hover:bg-white hover:text-[#204FB6] bg-[#bbee02] text-[#262261] text-xl mr-5  px-8 py-3">Get started today</Link></div>
        </div>
    );
};

export default WeeklyCamp;