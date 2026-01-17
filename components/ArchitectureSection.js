
import React from "react";
import data from "../data/portfolio.json";

const ArchitectureSection = () => {
    const renders = data.architectureSection?.images || [];

    return (
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
            <h1 className="text-2xl font-bold text-white">BIM & Architecture.</h1>
            <p className="mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5 text-gray-300">
                Sustainable Design & High-Fidelity 3D Modeling with Revit & Twinmotion.
            </p>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
                {renders.map((src, index) => (
                    <div key={index} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg hover:scale-105 transition-all ease-out duration-300">
                        <img src={src} alt={`Render ${index + 1}`} className="object-cover w-full h-full" />
                    </div>
                ))}
            </div>


        </div>
    );
};

export default ArchitectureSection;
