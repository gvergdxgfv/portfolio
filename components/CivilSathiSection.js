
import React from "react";
import data from "../data/portfolio.json";
import Button from "./Button";

const CivilSathiSection = () => {
    const project = data.projects.find(p => p.title === "CivilSathi");
    if (!project) return null;

    const features = [
        { icon: "👷", title: "Smart Attendance", desc: "Labor management made easy" },
        { icon: "📄", title: "PDF Reports", desc: "Auto-generated site documents" },
        { icon: "📱", title: "Telegram Alerts", desc: "Real-time notifications" },
        { icon: "📦", title: "Inventory Tracking", desc: "Live material monitoring" },
    ];

    return (
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
            {/* Section Header */}
            <h1 className="text-2xl font-bold text-white">Founder of CivilSathi.</h1>
            <p className="mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5 text-gray-300">
                {project.description}
            </p>

            {/* Main Card */}
            <div className="mt-10 w-full relative rounded-3xl overflow-hidden group">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-500 to-teal-400 opacity-90"></div>

                {/* Animated Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Floating Decorative Elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl float"></div>
                <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg float" style={{ animationDelay: '2s' }}></div>

                {/* Content */}
                <div className="relative z-10 p-8 laptop:p-12">
                    {/* Top Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                        Live on Play Store
                    </div>

                    <div className="flex flex-col laptop:flex-row gap-10 items-center">
                        {/* App Preview */}
                        <div className="w-full laptop:w-2/5">
                            <div className="relative">
                                {/* Phone Frame Effect */}
                                <div className="relative bg-black/30 rounded-3xl p-3 backdrop-blur-sm border border-white/20 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full"></div>
                                    <img
                                        src={project.imageSrc}
                                        alt="CivilSathi App"
                                        className="w-full rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="w-full laptop:w-3/5 text-white">
                            <h2 className="text-4xl laptop:text-5xl font-bold mb-4 leading-tight">
                                Construction Management
                                <span className="block text-green-200">Simplified.</span>
                            </h2>

                            {/* Feature Grid */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors"
                                    >
                                        <span className="text-2xl mb-2 block">{feature.icon}</span>
                                        <h3 className="font-bold text-lg">{feature.title}</h3>
                                        <p className="text-sm text-white/70">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Button
                                    type="primary"
                                    onClick={() => window.open(project.url, "_blank")}
                                    classes="!bg-white !text-green-700 font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-white/30 transform hover:-translate-y-1 transition-all text-lg"
                                >
                                    <span className="flex items-center gap-2">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                        </svg>
                                        Get on Play Store
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CivilSathiSection;

