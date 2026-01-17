import React, { useState, useEffect } from "react";

const TypingAnimation = ({
    texts = [],
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000,
    className = ""
}) => {
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (texts.length === 0) return;

        const currentFullText = texts[textIndex];

        if (isPaused) {
            const pauseTimer = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseDuration);
            return () => clearTimeout(pauseTimer);
        }

        if (isDeleting) {
            if (displayText.length === 0) {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            } else {
                const deleteTimer = setTimeout(() => {
                    setDisplayText(prev => prev.slice(0, -1));
                }, deletingSpeed);
                return () => clearTimeout(deleteTimer);
            }
        } else {
            if (displayText.length === currentFullText.length) {
                setIsPaused(true);
            } else {
                const typeTimer = setTimeout(() => {
                    setDisplayText(currentFullText.slice(0, displayText.length + 1));
                }, typingSpeed);
                return () => clearTimeout(typeTimer);
            }
        }
    }, [displayText, textIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className={className}>
            {displayText}
            <span className="typing-cursor-blink">|</span>
        </span>
    );
};

export default TypingAnimation;
