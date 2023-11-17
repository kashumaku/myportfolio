import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin, FaTelegram } from "react-icons/fa6";

const SocialMedia = () => {
    return (
        <div className="flex gap-5 mt-4 text-gray-500">
            <a href="#" className="hover:text-[#FFB400]  hover:scale-110"><FaGithub size={30} /></a>
            <a href="#" className="hover:text-[#FFB400]  hover:scale-110"><FaLinkedin size={30} /></a>
            <a href="#" className="hover:text-[#FFB400]  hover:scale-110"><FaFacebook size={30} /></a>
            <a href="#" className="hover:text-[#FFB400]  hover:scale-110"><FaTelegram size={30} /></a>
        </div>
    );
}

export default SocialMedia;