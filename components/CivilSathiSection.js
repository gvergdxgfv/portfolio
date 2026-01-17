
import React from "react";
import data from "../data/portfolio.json";
import Button from "./Button";

const CivilSathiSection = () => {
    const project = data.projects.find(p => p.title === "CivilSathi");
    if (!project) return null;

    return (
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
            <h1 className="text-2xl text-bold">Founder of CivilSathi.</h1>
            <p className="mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5 text-gray-500">
                {project.description}
            </p>

            <div className="mt-10 w-full relative rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-800 p-8 flex flex-col tablet:flex-row items-center gap-8">

                {/* Preview Image */}
                <div className="w-full tablet:w-1/2 rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
                    <img
                        src={project.imageSrc}
                        alt="CivilSathi Preview"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* CTA */}
                <div className="w-full tablet:w-1/2 flex flex-col items-start gap-4">
                    <h2 className="text-3xl font-bold">Construction Management Simplified.</h2>
                    <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-300">
                        <li>Smart Attendance & Labor Management</li>
                        <li>Automated PDF Report Generation</li>
                        <li>Telegram Integration for Alerts</li>
                        <li>Real-time Site Inventory Tracking</li>
                    </ul>
                    <div className="mt-5">
                        <Button
                            type="primary"
                            onClick={() => window.open(project.url, "_blank")}
                            classes="bg-gradient-to-r from-green-500 to-emerald-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1 transition-all"
                        >
                            Result ➤ Get it on Play Store
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CivilSathiSection;
