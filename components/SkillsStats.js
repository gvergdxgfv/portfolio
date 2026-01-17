
import React from "react";
import data from "../data/portfolio.json";

const SkillBar = ({ name, level }) => {
    return (
        <div className="mb-4">
            <div className="flex justify-between items-end mb-1">
                <span className="text-lg font-bold text-gray-700 dark:text-gray-200">{name}</span>
                <span className="text-sm font-mono text-blue-500">{level}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-1000 ease-out w-0 animate-fill-bar"
                    style={{ width: level }}
                ></div>
            </div>
        </div>
    );
};

const SkillCategory = ({ title, skills }) => (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-300 tilt-card neon-border">
        <h2 className="text-xl font-bold mb-6 border-b-2 border-blue-500 inline-block pb-1">{title}</h2>
        <div>
            {skills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
        </div>
    </div>
);

const SkillsStats = () => {
    return (
        <div className="mt-10 laptop:mt-30 py-2 laptop:py-0">
            <h1 className="text-3xl font-bold text-white mb-10">Stats.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 gap-6">
                <SkillCategory title="Languages" skills={data.resume.languages} />
                <SkillCategory title="Frameworks & Engines" skills={data.resume.frameworks} />
                <SkillCategory title="Tools & Arts" skills={data.resume.others} />
            </div>
        </div>
    );
};

export default SkillsStats;
