
import React from "react";
import data from "../data/portfolio.json";

const MusicSection = () => {
    // Use tracks from data or fallback to empty array
    const tracks = data.musicSection?.tracks || [];

    return (
        <div className="mt-10 laptop:mt-30 py-2 laptop:py-0">
            <h1 className="text-2xl font-bold text-white">Music Production.</h1>
            <p className="mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5 text-gray-300">
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

            {/* Instagram Beats Page Card */}
            <div className="mt-16 w-full">
                <h2 className="text-xl font-bold mb-5">Follow My Beats Page.</h2>
                <div
                    className="w-full tablet:w-96 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 group tilt-card neon-border"
                    onClick={() => {
                        const musicUrl = data.projects.find(p => p.title === "Music Production")?.url;
                        if (musicUrl) window.open(musicUrl, "_blank");
                    }}
                >
                    {/* Instagram Gradient Background */}
                    <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-8">
                        {/* IG Logo */}
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                                <svg
                                    className="w-12 h-12 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="text-center text-white">
                            <h3 className="text-2xl font-bold mb-1">@prodbyeviloid</h3>
                            <p className="text-white/80 text-lg font-medium">🎵 Beats Page</p>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/20 rounded-full"></div>
                        <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-white/25 rounded-full"></div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="p-4 bg-gradient-to-r from-slate-900 to-slate-800 flex items-center justify-between">
                        <span className="text-gray-300 font-medium">Trap • Hip-hop • Electronic</span>
                        <span className="text-purple-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicSection;
