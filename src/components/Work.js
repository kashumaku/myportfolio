import { useState } from "react";
import { Link } from 'react-router-dom'

const Work = ({ work }) => {
    const [hover, setHover] = useState(false)
    return (
        <div className="flex-shrink-0 border-2 overflow-hidden rounded-lg ml-[30px]">
            <div>
                <div onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} className="w-[300px] h-[220px]  relative ">
                    <img className="h-full w-full" src={work.image_urls} alt="" />
                    {hover && <div className="absolute top-0 bg-[#FFB400] h-full w-full flex items-center justify-center text-violet-950"><Link to={work.live_link} className=" bg-white px-3 border-2 border-white rounded-full hover:bg-[#FFB400] hover:text-white">View live</Link></div>}
                </div>
                <p className="bg-gray-700 p-4">
                    {work.project_name}
                </p>
            </div>
        </div>
    );
}

export default Work;