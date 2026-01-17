
import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import AnimatedBackground from "../components/AnimatedBackground";
import TypingAnimation from "../components/TypingAnimation";

// Dedidated Sections
import CivilSathiSection from "../components/CivilSathiSection";
import GameSection from "../components/GameSection";
import ArchitectureSection from "../components/ArchitectureSection";
import MusicSection from "../components/MusicSection";
import SkillsStats from "../components/SkillsStats";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const civilRef = useRef();
  const gameRef = useRef();
  const musicRef = useRef();
  const architectureRef = useRef();
  const skillsRef = useRef();
  const aboutRef = useRef();

  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: civilRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleArchitectureScroll = () => {
    window.scrollTo({
      top: architectureRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <AnimatedBackground />
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleArchitectureScroll={handleArchitectureScroll}
        />
        <div className="laptop:mt-20 mt-10 min-h-[70vh] flex flex-col justify-center relative">
          <div className="mt-5">


            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-semibold w-full laptop:w-4/5 text-gray-300"
            >
              I'm{" "}
              <span className="gradient-text font-bold">{data.name}</span>
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-semibold w-full laptop:w-4/5"
            >
              <TypingAnimation
                texts={[
                  "Founder of CivilSathi",
                  "Full-Stack Developer",
                  "Game Dev & Designer",
                  "Music Producer",
                  "BIM Architect"
                ]}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={2500}
                className="gradient-text"
              />
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-medium w-full laptop:w-4/5 text-gray-400"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />


        </div>

        {/* 1. CivilSathi (Founder) Section */}
        <div ref={civilRef}>
          <CivilSathiSection />
        </div>

        {/* 2. Game Section */}
        <div ref={gameRef}>
          <GameSection />
        </div>

        {/* 3. Music Section (Moved Above Architecture) */}
        <div ref={musicRef}>
          <MusicSection />
        </div>

        {/* 4. Architecture Section */}
        <div ref={architectureRef}>
          <ArchitectureSection />
        </div>

        {/* 5. Skills Section (Moved to Bottom) */}
        {/* 5. Skills Stats Section */}
        <div ref={skillsRef}>
          <SkillsStats />
        </div>

        {/* About / Contact */}
        <div ref={aboutRef}>
          <div className="mt-10 laptop:mt-40 p-2 laptop:p-0">
            <h1 className="text-2xl text-bold">About.</h1>
            <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
              {data.aboutpara}
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
