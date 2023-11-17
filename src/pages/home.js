import { useContext } from 'react';
import Menu from '../components/menu';
import '../clippath.css'
import { toggleMenuContext } from '../context';
import profileImg from '../images/profile_img.jpg'
import { IoMdArrowDropright, IoMdMenu } from "react-icons/io"
import { MdClear } from "react-icons/md";
import Typewriter from 'typewriter-effect'
const Home = () => {
    const { toggleMenu, setToggleMenu } = useContext(toggleMenuContext)
    return (
        <div id="home" className='flex flex-col items-center md:h-screen pt-14 justify-center text-white  lg:flex-row relative'>
            <div className='lg:hidden fixed z-10 -top-1 w-full bg-[#111111]' >
                <span onClick={() => setToggleMenu(true)}
                    className=' bg-gray-800 float-right m-3 z-20 rounded-lg'>
                    <IoMdMenu size={35} />
                </span>
            </div>

            <div className={` fixed -top-1 z-20 h-screen pt-14 px-4 bg-[#252525] mt-1 w-full duration-[0.5s] ${toggleMenu ? 'left-0' : 'left-[-100%]'}`}>
                <span onClick={() => setToggleMenu(false)}
                    className='absolute right-1 top-2'><MdClear size={30} /></span>
                <Menu />
            </div>
            <div className='lg:relative  w-[230px] h-[230px] object-cover mt-2
                            rounded-full overflow-hidden border-4 border-[#252525] 
                             lg:rounded-none lg:border-none lg:flex-[2] lg:h-screen '>
                <img className='lg:absolute lg:z-10  top-[20%] left-5 lg:rounded-2xl lg:w-[50%] lg:h-[60%]' src={profileImg} alt="" />
                <div className='clip_path max-lg:hidden'></div>
            </div>
            <div className='pl-2 lg:flex-[3] '>
                <div className='flex flex-col gap-2  max-lg:mt-10 w-full'>
                    <p className='text-[#FFB400] text-2xl md:text-3xl uppercase font-bold'>I'm Kassahun Melaku.</p>
                    <p className=' text-xl md:text-2xl uppercase font-bold '>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                strings: ["Fullstack web developer.", "Mobile app developer.", "Cryptography researcher."]
                            }} />
                    </p>
                </div>
                <p className=' mt-4 text-md md:text-lg w-full flex justify-center md:w-[60%]'>
                    <div className=''>
                        I'm a Ethiopian based web designer & front‑end
                        developer focused on crafting clean & user‑friendly
                        experiences, I am passionate
                        about building excellent software that improves the
                        lives of those around me.</div>
                </p>



                <button className='flex items-center border-2 border-[#FFB400] mt-4 ml-8 rounded-full'>
                    <a href="#about" className='py-2 px-4 '>More about me </a>
                    <IoMdArrowDropright size={43} className='bg-[#FFB400] rounded-full' />
                </button>
            </div>
        </div>
    );
}

export default Home;