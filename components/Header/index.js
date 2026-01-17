import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog, handleArchitectureScroll }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume, blogUrl } = data;

  // Extract external URLs
  const civilSathiUrl = data.projects.find(p => p.title === "CivilSathi")?.url;
  const musicUrl = data.projects.find(p => p.title === "Music Production")?.url;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-semibold text-lg p-2 laptop:p-0 link text-white cursor-pointer"
              >
                {name}.
              </h1>

              <div className="flex items-center">

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${!open
                      ? theme === "dark"
                        ? "menu-white.svg"
                        : "menu.svg"
                      : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                      }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className="absolute right-0 z-50 w-11/12 mt-2 overflow-hidden rounded-2xl shadow-2xl"
            >
              {/* Gradient Border Effect */}
              <div className="p-[1px] bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl">
                <div className="bg-slate-900 rounded-2xl p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700/30">
                    <span className="text-lg font-bold gradient-text">Navigation</span>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Online
                    </div>
                  </div>

                  {!isBlog ? (
                    <div className="space-y-2">
                      <button onClick={handleWorkScroll} className="nav-item-mobile group">
                        <span className="nav-icon">💼</span>
                        <span>Work</span>
                        <span className="nav-arrow">→</span>
                      </button>
                      <button onClick={handleArchitectureScroll} className="nav-item-mobile group">
                        <span className="nav-icon">🏛️</span>
                        <span>Architecture</span>
                        <span className="nav-arrow">→</span>
                      </button>
                      {civilSathiUrl && (
                        <button onClick={() => window.open(civilSathiUrl, "_blank")} className="nav-item-mobile group">
                          <span className="nav-icon">🏗️</span>
                          <span>CivilSathi</span>
                          <span className="nav-arrow">↗</span>
                        </button>
                      )}
                      {musicUrl && (
                        <button onClick={() => window.open(musicUrl, "_blank")} className="nav-item-mobile group">
                          <span className="nav-icon">🎵</span>
                          <span>Music</span>
                          <span className="nav-arrow">↗</span>
                        </button>
                      )}
                      <button onClick={handleAboutScroll} className="nav-item-mobile group">
                        <span className="nav-icon">👤</span>
                        <span>About</span>
                        <span className="nav-arrow">→</span>
                      </button>
                      {showBlog && (
                        <button onClick={() => blogUrl ? window.open(blogUrl, "_blank") : router.push("/blog")} className="nav-item-mobile group">
                          <span className="nav-icon">📝</span>
                          <span>Blog</span>
                          <span className="nav-arrow">{blogUrl ? "↗" : "→"}</span>
                        </button>
                      )}

                      {/* Contact CTA */}
                      <div className="pt-4 mt-4 border-t border-gray-700/30">
                        <button
                          onClick={() => window.open("mailto:vannyapeehu@gmail.com")}
                          className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                        >
                          <span>✉️</span>
                          Contact Me
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <button onClick={() => router.push("/")} className="nav-item-mobile group">
                        <span className="nav-icon">🏠</span>
                        <span>Home</span>
                        <span className="nav-arrow">→</span>
                      </button>
                      {showBlog && (
                        <button onClick={() => blogUrl ? window.open(blogUrl, "_blank") : router.push("/blog")} className="nav-item-mobile group">
                          <span className="nav-icon">📝</span>
                          <span>Blog</span>
                          <span className="nav-arrow">{blogUrl ? "↗" : "→"}</span>
                        </button>
                      )}
                      {showResume && (
                        <button onClick={() => router.push("/resume")} className="nav-item-mobile group">
                          <span className="nav-icon">📄</span>
                          <span>Resume</span>
                          <span className="nav-arrow">→</span>
                        </button>
                      )}
                      <div className="pt-4 mt-4 border-t border-gray-700/30">
                        <button
                          onClick={() => window.open("mailto:vannyapeehu@gmail.com")}
                          className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                        >
                          <span>✉️</span>
                          Contact Me
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className="mt-10 hidden flex-row items-center justify-between sticky top-0 z-50 tablet:flex p-4 rounded-2xl mb-10 transition-all duration-300 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-lg shadow-purple-500/10"
      >
        <h1
          onClick={() => router.push("/")}
          className="font-bold text-xl cursor-pointer mob:p-2 laptop:p-0 text-white hover:text-purple-400 transition-colors"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleArchitectureScroll}>Architecture</Button>
            {civilSathiUrl && (
              <Button onClick={() => window.open(civilSathiUrl, "_blank")}>CivilSathi</Button>
            )}
            {musicUrl && (
              <Button onClick={() => window.open(musicUrl, "_blank")}>Music</Button>
            )}
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && (
              <Button onClick={() => blogUrl ? window.open(blogUrl, "_blank") : router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:vannyapeehu@gmail.com")}>
              Contact
            </Button>
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => blogUrl ? window.open(blogUrl, "_blank") : router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:vannyapeehu@gmail.com")}>
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
