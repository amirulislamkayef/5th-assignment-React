import { use } from "react";
import type { Itechnology } from "../../Types/Technology Type";
import AvailableTechs from "./AvailableTechs";

interface TechsListProps {
    techsPromise: Promise<Itechnology[]>,

}

const TechList = ({techsPromise}:TechsListProps) => {
    
    const techList = use(techsPromise)
    
    
    return (
        <div>
            <div className=" max-w-7xl mx-auto px-4 my-4">
                <h2 className="font-bold text-4xl">Explore the <span className="bg-linear-to-r from-[#f32ba3] to-[#b043d4] bg-clip-text text-transparent">Technologies</span></h2>
                <p className="text-gray-500 my-2">Pick one technologies per category to build your ideal stack
                </p>
            </div>

            <AvailableTechs techList={techList}></AvailableTechs>
        </div>
    );
};

export default TechList;