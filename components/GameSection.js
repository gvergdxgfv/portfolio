
import React from "react";
import data from "../data/portfolio.json";
import Button from "./Button";

const GameSection = () => {
    const getEmbedUrl = (url) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
    };

    const videoUrl = data.gameSection?.videoUrl;
    const embedUrl = getEmbedUrl(videoUrl);
    const projectUrl = data.projects.find(p => p.title === "Third Person Fighter Game")?.url;

    return (
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
            <h1 className="text-2xl text-bold">Third Person Fighter Game.</h1>
            <p className="mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5 text-gray-500">
                Third Person Fighter with Combat AI, Rigging, and Scripting.
            </p>
            <div className="mt-10 w-full aspect-video rounded-lg overflow-hidden bg-black relative mb-10">
                {embedUrl ? (
                    <iframe
                        width="100%"
                        height="100%"
                        src={embedUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <div className="flex items-center justify-center h-full text-white">
                        <p>Add a valid YouTube link in portfolio.json</p>
                    </div>
                )}

                <div className="absolute bottom-4 left-4 pointer-events-none flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Unity & C#</span>
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Model Rigging</span>
                    <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">Animation Design</span>
                    <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">Environment Design</span>
                </div>
            </div>

            {projectUrl && (
                <div className="flex justify-center laptop:justify-start">
                    <Button
                        type="primary"
                        onClick={() => window.open(projectUrl, "_blank")}
                        classes="bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-red-500/50 transform hover:-translate-y-1 transition-all"
                    >
                        🎮 Get it on Itch.io
                    </Button>
                </div>
            )}
        </div>
    );
};

export default GameSection;
