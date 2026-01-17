
import React from "react";
import data from "../data/portfolio.json";

const MusicSection = () => {
    // Use tracks from data or fallback to empty array
    const tracks = data.musicSection?.tracks || [];

    return (
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
            <h1 className="text-2xl text-bold">Music Production.</h1>
            <p className="mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5 text-gray-500">
                Audio Mixing, Composition, and Beat Making. (Trap, Hip-hop, RnB, Electronic)
            </p>

            {/* Grid for multiple players */}
            <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tracks.map((trackId, index) => (
                    <div key={index} className="w-full">
                        <iframe
                            style={{ borderRadius: "12px" }}
                            src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                ))}
            </div>

            {/* Instagram Preview */}
            <div className="mt-16 w-full ml-0">
                <h2 className="text-xl font-bold mb-5">Follow My Production Page.</h2>
                <div
                    className="w-full tablet:w-1/2 rounded-lg overflow-hidden shadow-xl border border-gray-200 cursor-pointer hover:opacity-95 transition-opacity"
                    onClick={() => {
                        const musicUrl = data.projects.find(p => p.title === "Music Production")?.url;
                        if (musicUrl) window.open(musicUrl, "_blank");
                    }}
                >
                    <img
                        src="/images/music_preview.png"
                        alt="Instagram @prodbyeviloid"
                        className="w-full h-auto object-cover"
                    />
                    <div className="p-4 bg-white dark:bg-slate-800">
                        <h3 className="font-medium text-lg">@prodbyeviloid</h3>
                        <p className="text-sm opacity-60 mt-1">Instagram</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicSection;
