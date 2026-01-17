
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Cursor = () => {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over a clickable element
      const target = e.target;
      const isLink = target.closest("a") || target.closest("button") || target.closest(".link");
      setLinkHovered(!!isLink);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const cursorColor = theme === "dark" ? "bg-white" : "bg-black";
  const ringColor = theme === "dark" ? "border-white" : "border-black";

  if (!mounted) return null;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${hidden ? "opacity-0" : "opacity-100"}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {/* Main Dot */}
      <div
        className={`${cursorColor} rounded-full transition-transform duration-100 ease-out`}
        style={{
          width: "10px",
          height: "10px",
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
        }}
      />

      {/* Outer Ring (expands on hover) */}
      <div
        className={`absolute top-0 left-0 ${ringColor} border rounded-full transition-all duration-300 ease-out`}
        style={{
          width: "40px",
          height: "40px",
          transform: `translate(-50%, -50%) scale(${linkHovered ? 1.5 : 1})`,
          opacity: linkHovered ? 0.5 : 0.2
        }}
      />
    </div>
  );
};

export default Cursor;
