import React from "react";
import { BiBriefcase, BiCode, BiHome, BiMailSend } from "react-icons/bi";
import Waves from "./Waves";

const HeaderLeft = () => {
  return (
    <>
      <div className="md:flex-[1]">
        <div className="min-h-screen top-0 hidden md:sticky md:flex items-center justify-center bg-indigo-400 text-white text-4xl lg:text-4xl md:text-4xl">
          <Waves
            lineColor="#d4cbcb"
            backgroundColor="rgba(255, 255, 255, 0.2)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
          <ul className="flex flex-col gap-10">
            {["startseite", "erfahrung", "projekte", "kontakt"].map((item) => (
              <li
                key={item}
                className="flex items-center justify-start cursor-pointer font-medium trasition-all duration-200 group sm:text-lg md:text-xl xl:text-3xl"
              >
                <a
                  href={`#${item}`}
                  className="transition-all duration-200 hover:translate-x-3"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="fixed left-0 right-0 top-0 z-10 flex justify-evenly bg-emerald-300 p-5 text-white md:hidden">
          <a
            href="#startseite"
            className="flex flex-col items-center justify-center"
          >
            <BiHome className="text-2xl" />
            <span className="text-s"></span>
          </a>
          <a
            href="#erfahrung"
            className="flex flex-col items-center justify-center"
          >
            <BiBriefcase className="text-2xl" />
            <span className="text-s"></span>
          </a>
          <a
            href="#projekte"
            className="flex flex-col items-center justify-center"
          >
            <BiCode className="text-2xl" />
          </a>
          <a
            href="#kontakt"
            className="flex flex-col items-center justify-center"
          >
            <BiMailSend className="text-2xl" />
          </a>
        </div>
      </div>{" "}
    </>
  );
};

export default HeaderLeft;
