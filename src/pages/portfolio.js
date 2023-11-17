import { useState } from "react";
import Work from "../components/Work"
import dumyData from "../db/dumyWorks.json"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Portfolio = () => {
    const [slide, setSlide] = useState(0)
    const slideLeft = () => {
        if (slide === 0) {
            setSlide(0)
            return
        }
        setSlide(pre => pre - 1)
    }
    const slideRight = () => {
        if (slide === dumyData.projects.length - 1) {
            setSlide(0)
            return
        }
        setSlide(pre => pre + 1)

    }
    return (
        <div className="flex flex-col items-center h-screen max-lg:mt-[20px]" id="portfolio">
            <h1 className="text-3xl font-bold my-8 uppercase">My <span className="text-[#FFB400]">Portfolio</span></h1>
            <div className="relative max-w-[1200px] mx-auto border-2  pb-12 pt-2 border-gray-800  rounded-3xl shadow-sm shadow-[#FFB400] overflow-hidden">
                <div className="flex duration-[1s]" style={{ transform: `translateX(${-slide * 335}px)` }}>
                    {dumyData.projects.map((project) => <Work key={project.id} work={project} />)}
                </div>
                <div className="absolute bottom-1 left-[30vw]  gap-3 flex">
                    <span onClick={slideLeft} className="bg-gray-700 py-1 px-4 rounded-md shadow-sm text-[#AFB400] shadow-slate-400"><FaChevronLeft /> </span>
                    <span onClick={slideRight} className="bg-gray-700 py-1 px-4 rounded-md shadow-sm text-[#AFB400] shadow-slate-400"><FaChevronRight /></span>
                </div>
            </div>
        </div>
    )
}
export default Portfolio