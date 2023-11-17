import profileImg from '../images/profile_img.jpg'
import { FaDownload, FaGraduationCap } from "react-icons/fa";
import { MdDeveloperMode, MdSecurity } from "react-icons/md";
import cv from "../db/cv.pdf"
const About = () => {

    return (
        <div className='flex flex-col items-center pt-4 mt-[70px] max-lg:pt-[50px]' id="about">
            <h1 className='bg-black px-20 text-3xl uppercase font-bold mb-8'>About<span className='text-[#FFB400]'> me </span></h1>
            <h1 className='text-2xl font-bold uppercase  flex justify-center mb-6 md:mb-12 '>Personal infos</h1>

            <div className=' w-[230px] h-[230px] object-cover mt-2
                            rounded-full overflow-hidden border-4 border-[#252525] 
                             lg:hidden mb-6'>
                <img src={profileImg} alt="" />
            </div>
            <div className='lg:flex lg:gap-16 lg:text-xl px-2'>
                <div className='flex flex-col md:items-center'>
                    <div className='flex gap-5  '>
                        <div className='flex flex-col gap-3 lg:gap-10 md:text-xl'>
                            <p><span className='text-gray-300 max-lg:block'>First Name:</span> Kassahun</p>
                            <p><span className='text-gray-300 max-lg:block'>Last Name:</span> Melaku</p>
                            <p><span className='text-gray-300 max-lg:block'>Nationality:</span> Ethiopian</p>
                            <p><span className='text-gray-300 max-lg:block'>Freelance:</span> Available</p>
                            <p><span className='text-gray-300 max-lg:block'>Languages:</span> Amharic, English</p>
                        </div>
                        <div className='flex flex-col gap-3 lg:gap-10 md:text-xl'>
                            <p><span className='text-gray-300 max-lg:block'>Address: </span> Addis ababa</p>
                            <p><span className='text-gray-300 max-lg:block'>Phone: </span> +251928962071</p>
                            <p><span className='text-gray-300 max-lg:block'>Email:</span> katme3696@gmail.com</p>
                            <p><span className='text-gray-300 max-lg:block'>Telegram:</span> @bhupaz</p>
                            <p><span className='text-gray-300 max-lg:block'>Skype:</span> kassahun.m</p>
                        </div>

                    </div>
                    <button className='flex items-center border-2 border-[#FFB400] my-10 m w-fit rounded-full'>
                        <a href={cv} className='py-2 px-4 '>Download cv</a>
                        <FaDownload size={43} className='bg-[#FFB400] rounded-full' />
                    </button>
                </div>
                <div className='grid grid-cols-2 gap-2  '>
                    <h1 className='col-span-2 text-2xl font-bold uppercase flex justify-center '>Experience</h1>
                    <div className='sm:w-[350px] flex flex-col items-center border-2 border-gray-800 p-3 rounded-lg'>
                        <span className='py-4 font-bold text-[#FFB400] text-5xl flex justify-center items-center'>4+</span><span>Years of experience</span>
                    </div>
                    <div className='sm:w-[350px] flex flex-col items-center border-2 border-gray-800 p-3 rounded-lg'>
                        <span className='py-4 font-bold text-[#FFB400] text-5xl flex justify-center items-center'>10+</span><span>Complated projects</span>
                    </div>
                    <div className='sm:w-[350px] flex flex-col items-center border-2 border-gray-800 p-3 rounded-lg'>
                        <span className='py-4 font-bold text-[#FFB400] text-5xl flex justify-center items-center'>4+</span><span>Clients</span>
                    </div>
                    <div className='sm:w-[350px] flex flex-col items-center border-2 border-gray-800 p-3 rounded-lg'>
                        <span className='py-4 font-bold text-[#FFB400] text-5xl flex justify-center items-center'>4+</span><span>Certificaes</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center '>
                <h1 className='text-2xl font-bold uppercase mt-8  '>Skills</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 md:gap-10 '>
                    <p className='flex flex-col items-center justify-center border-8 border-[#FFB400] w-[120px] h-[110px] m-4  rounded-full'><span className='text-3xl font-bold'>80%</span><span>HTML</span></p>
                    <p className='flex flex-col items-center justify-center border-8 border-[#FFB400] w-[120px] h-[110px] m-4  rounded-full'><span className='text-3xl font-bold'>80%</span><span>CSS</span></p>
                    <p className='flex flex-col items-center justify-center border-8 border-[#FFB400] w-[120px] h-[110px] m-4  rounded-full'><span className='text-3xl font-bold'>90%</span><span>Javascript</span></p>
                    <p className='flex flex-col items-center justify-center border-8 border-[#FFB400] w-[120px] h-[110px] m-4  rounded-full'><span className='text-3xl font-bold'>75%</span><span>Tailwindcss</span></p>
                    <p className='flex flex-col items-center justify-center border-8 border-[#FFB400] w-[120px] h-[110px] m-4  rounded-full'><span className='text-3xl font-bold'>90%</span><span>Bootstrap</span></p>
                    <p className='flex flex-col items-center justify-center border-8 border-[#FFB400] w-[120px] h-[110px] m-4  rounded-full'><span className='text-3xl font-bold'>90%</span><span>React JS</span></p>
                    <p className='flex flex-col items-center justify-center border-8 border-[#FFB400] w-[120px] h-[110px] m-4  rounded-full'><span className='text-3xl font-bold'>75%</span><span>React Native</span></p>
                    <p className='flex flex-col items-center justify-center border-8 border-[#FFB400] w-[120px] h-[110px] m-4  rounded-full'><span className='text-3xl font-bold'>80%</span><span>Node JS</span></p>
                    <p className='flex flex-col items-center justify-center border-8 border-[#FFB400] w-[120px] h-[110px] m-4  rounded-full'><span className='text-3xl font-bold'>90%</span><span>MongoDB</span></p>
                    <p className='flex flex-col items-center justify-center border-8 border-[#FFB400] w-[120px] h-[110px] m-4  rounded-full'><span className='text-3xl font-bold'>90%</span><span>mySQL</span></p>
                </div>
            </div>
            <h1 className='text-2xl font-bold uppercase mt-6'>Experience and education</h1>
            <div className='grid md:grid-cols-2 justify-center p-8 gap-12 '>
                <div className='max-w-[500px] border-l border-[#FFB400] pl-4 pt-8 relative md:mr-12'>
                    <div className='absolute left-[-18px] top-[-5px] flex items-center gap-3'>
                        <span className='flex justify-center items-center rounded-full bg-[#FFB400] w-10 h-10'><MdDeveloperMode size={30} /></span>
                        <span className='px-4 bg-gray-600 rounded-full'>2019-present</span>
                    </div>
                    <h1>Web developer</h1>
                    <p>Lorem ipsum dolo Optio quo iusto animi est iste,
                        fugit sunt, aspernatur velit officiis soluta dicta.
                        Necessitatibus ipsam quos odio voluptate? Harum ea
                        quod consectetur.</p>
                </div>

                <div className='max-w-[500px] border-l border-[#FFB400] pl-4 pt-8 relative'>
                    <h1>Cryptography researcher</h1>
                    <div className='absolute left-[-18px] top-[-5px] flex items-center gap-3'>
                        <span className='flex justify-center items-center rounded-full bg-[#FFB400] w-10 h-10'><MdSecurity size={30} /></span>
                        <span className='px-4 bg-gray-600 rounded-full'>2019-present</span>
                    </div>
                    <p>Lorem ipsum dolo Optio quo iusto animi est iste,
                        fugit sunt, aspernatur velit officiis soluta dicta.
                        Necessitatibus ipsam quos odio voluptate? Harum ea
                        quod consectetur.</p>
                </div>
                <div className='max-w-[500px] border-l border-[#FFB400] pl-4 pt-8 relative'>
                    <h1>Bachelor degree</h1>
                    <div className='absolute left-[-18px] top-[-5px] flex items-center gap-3'>
                        <span className='flex justify-center items-center rounded-full bg-[#FFB400] w-10 h-10'><FaGraduationCap size={30} /></span>
                        <span className='px-4 bg-gray-600 rounded-full'>2019-present</span>
                    </div>
                    <p>
                        Lorem ipsum dolo Optio quo iusto animi est iste,
                        fugit sunt, aspernatur velit officiis soluta dicta.
                        Necessitatibus ipsam quos odio voluptate? Harum ea
                        quod consectetur.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About