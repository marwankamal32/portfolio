"use client";

import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-center">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-10 mt-12">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] flex justify-center"
          >
            <PinContainer title={title} href={link} className="w-full">
              {/* Card Top Image Section */}
              <div className="relative flex items-center justify-center w-full h-[200px] overflow-hidden mb-4">
                <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#13162d]">
                  <img
                    src="/bg.png"
                    alt="bg-img"
                    className="object-cover w-full h-full"
                  />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0 max-h-full object-contain"
                />
              </div>

              {/* Title & Description */}
              <h1 className="font-bold text-base lg:text-lg mb-1 line-clamp-1">
                {title}
              </h1>
              <p className="text-sm text-white/80 line-clamp-2">{des}</p>

              {/* Footer Section */}
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black w-7 h-7 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${index * 8}px)`,
                        zIndex: 10 - index,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-1.5" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-purple">Check Live Site</p>
                  <FaLocationArrow className="ms-2" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
