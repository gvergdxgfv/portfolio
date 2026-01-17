import React from "react";

const AnimatedBackground = () => {
    return (
        <div className="animated-bg-container">
            {/* Gradient Orbs */}
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
            <div className="gradient-orb orb-3"></div>
            <div className="gradient-orb orb-4"></div>

            {/* Grid overlay for tech feel */}
            <div className="grid-overlay"></div>

            {/* Floating particles */}
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${10 + Math.random() * 20}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default AnimatedBackground;
