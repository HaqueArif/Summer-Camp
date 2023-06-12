import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
const FollowUs = () => {
    return (

        <div className="bg-[#ff426e] text-white py-5 md:py-10 shadow-2xl">
            <h2 className="text-3xl md:text-6xl text-center font-semibold capitalize mb-3">Follow us on social media</h2>
            <div className=' flex flex-wrap justify-center items-center gap-3'>
                <span className="campHover p-3 text-2xl bg-[#fd567d] rounded-full shadow-lg"><FaFacebook /></span>
                <span className="campHover p-3 text-2xl bg-[#fd567d] rounded-full shadow-lg"><FaTwitter /></span>
                <span className="campHover p-3 text-2xl bg-[#fd567d] rounded-full shadow-lg"><FaLinkedin /></span>
                <span className="campHover p-3 text-2xl bg-[#fd567d] rounded-full shadow-lg"><FaYoutube /></span>
            </div>
        </div>

    );
};

export default FollowUs;