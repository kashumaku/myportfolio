import Work from "../components/Work"
import dumyData from "../db/dumyWorks.json"
const Portfolio = () => {

    return (
        <div className="flex flex-col items-center lg:h-screen" id="portfolio">
            <h1 className="text-3xl font-bold my-8 uppercase">My <span className="text-[#FFB400]">Portfolio</span></h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 m-auto overflow-x-scroll">
                {dumyData.projects.map((project) => <Work key={project.id} work={project} />)}
            </div>
        </div>
    )
}
export default Portfolio