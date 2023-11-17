import { FaHome, FaEnvelope, FaUser } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs"
import { Link } from "react-router-dom";
import { toggleMenuContext } from "../context";
import { useContext } from "react";

const Menu = () => {
    const { setToggleMenu } = useContext(toggleMenuContext)
    return (
        <div className="flex flex-col gap-3 uppercase ">
            <a onClick={() => setToggleMenu(false)} href="#home" className="flex items-center gap-2 font-bold text-sm max-lg:border-b border-gray-600 py-4 visited:text-[#FFB400] lg:flex-row-reverse cursor-pointer"><FaHome size={20} /><span>Home</span></a>
            <a onClick={() => setToggleMenu(false)} href="#about" className="flex items-center gap-2 font-bold text-sm max-lg:border-b border-gray-600 py-4 lg:flex-row-reverse"><FaUser size={20} /><span>About me</span></a>
            <a onClick={() => setToggleMenu(false)} href="#portfolio" className="flex items-center gap-2 font-bold text-sm max-lg:border-b border-gray-600 py-4 lg:flex-row-reverse"><BsPersonWorkspace size={20} /><span>Works</span></a>
            <a onClick={() => setToggleMenu(false)} href="#contact" className="flex items-center gap-2 font-bold text-sm max-lg:border-b border-gray-600 py-4 lg:flex-row-reverse"><FaEnvelope size={20} /><span>Contact</span></a>
        </div>

    );
}

export default Menu;