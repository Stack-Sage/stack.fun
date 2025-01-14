import React from "react";
import { GlareCard } from "./glare-card";
import images from "../assets/asset";

const Stack = () => {
  return (
    <div className=" justify-center  flex p-1 gap-10   flex-wrap h-full mx-40  ">
      <ul className="justify-center w-full scale-95   flex m-6 gap-20  flex-wrap h-full  ">
        <div className="group  h-fit w-fit self relative">
          <a
            href="https://anihive-11.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" relative block  "
          >
            <GlareCard className="   ">
              <span className="absolute group-hover:opacity-100 group-hover:scale-110 flex text-3xl text-center text-cyan-400 font-bold bottom-5 drop-shadow-lg   w-full mx-auto items-center justify-center opacity-60  ">
                AniHive
              </span>

              {/* Tooltip Hover Effect */}
              <span className="absolute bottom-44   bg-transparent border-2 border-black rounded-3xl left-1/2 transform -translate-x-1/2 opacity-0  group-hover:scale-110  group-hover:opacity-100 transition-opacity  text-center bg-gradient-to-br from-black via-cyan-400  to-cyan-950 text-black font-semibold text-xl  p-4  shadow-lg group-hover:shadow-lg group-hover:shadow-black  transistion duration-300 ease-in-out w-[210px]  ">
                Explore Similar Anime Recommendations
              </span>

              <img width= "300px" height="440" className="  " src={images.anihive} lt="AniHive" />
            </GlareCard>
          </a>
        </div>
        <div className="group h-fit w-fit self relative">
          <a
            href="https://keet-19.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" relative block  "
          >
            <GlareCard className="   ">
              <span className="absolute group-hover:opacity-100 group-hover:scale-110 flex text-3xl text-center text-pink-400 contrast-200  brightness-150 bottom-6 drop-shadow-lg   w-full mx-auto items-center justify-center opacity-60 font-extrabold  ">
                Keet
              </span>

              {/* Tooltip Hover Effect */}
              <span className="absolute bottom-44   bg-transparent border-2 border-black rounded-3xl left-1/2 transform -translate-x-1/2 opacity-0  group-hover:scale-110  group-hover:opacity-100 transition-opacity  text-center bg-gradient-to-br from-violet-900 via-blue-400  to-black text-black font-semibold text-xl  p-4  shadow-lg group-hover:shadow-lg group-hover:shadow-black  transistion duration-300 ease-in-out w-[210px] ">
                Get Copyright Free Images
              </span>

              <img  width= "300px" height="440"  className="  " src={images.keet_mb} alt="AniHive" />
            </GlareCard>
          </a>
        </div>
        <div className="group h-fit w-fit self relative">
          <a
            href="https://passgen-01.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" relative block  "
          >
            <GlareCard className="   ">
              <span className="absolute group-hover:opacity-100 group-hover:scale-110 flex text-3xl text-center text-blue-400 contrast-150 font-bold bottom-5 drop-shadow-lg   w-full mx-auto items-center justify-center opacity-60  ">
                PassGen
              </span>

              {/* Tooltip Hover Effect */}
              <span className="absolute bottom-44   bg-transparent border-2 border-black rounded-3xl left-1/2 transform -translate-x-1/2 opacity-0  group-hover:scale-110  group-hover:opacity-100 transition-opacity  text-center bg-gradient-to-br from-black via-blue-950  to-blue-900 text-blue-400 font-semibold text-xl  p-4  shadow-lg group-hover:shadow-lg group-hover:shadow-black  transistion duration-300 ease-in-out w-[210px]  ">
                Generate Unique Passwords
              </span>

              <img
               width= "300px" height="440" 
                className="  "
                src={images.passgen_mb}
                alt="AniHive"
              />
            </GlareCard>
          </a>
        </div>
        <div className="group h-fit w-fit self relative">
          <a
            href="https://currencyconverter01.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" relative block  "
          >
            <GlareCard className="   ">
              <span className="absolute group-hover:opacity-100 group-hover:scale-110 flex text-xl text-center text-gray-400 font-bold bottom-5 drop-shadow-lg   w-full mx-auto items-center justify-center opacity-60  ">
                Currency Converter
              </span>

              {/* Tooltip Hover Effect */}
              <span className="absolute bottom-44   bg-transparent border-2 border-black rounded-3xl left-1/2 transform -translate-x-1/2 opacity-0  group-hover:scale-110  group-hover:opacity-100 transition-opacity  text-center bg-gradient-to-br from-black via-gray-400  to-black text-black font-semibold text-xl  p-4  shadow-lg group-hover:shadow-lg group-hover:shadow-black  transistion duration-300 ease-in-out w-[210px] ">
                Convert Any Two Currencies
              </span>

              <img
               width= "300px" height="440" 
                className="  "
                src={images.curr}
                alt="AniHive"
              />
            </GlareCard>
          </a>
        </div>
        <div className="group h-fit w-fit self relative">
          <a
            href="https://todo-112.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" relative block  "
          >
            <GlareCard className="   ">
              <span className="absolute group-hover:opacity-100 group-hover:scale-110 flex text-3xl text-center text-indigo-500 font-bold bottom-5 drop-shadow-lg   w-full mx-auto items-center justify-center opacity-60  ">
                Todo List
              </span>

              {/* Tooltip Hover Effect */}
              <span className="absolute bottom-44   bg-transparent border-2 border-black rounded-3xl left-1/2 transform -translate-x-1/2 opacity-0  group-hover:scale-110  group-hover:opacity-100 transition-opacity  text-center bg-gradient-to-br from-black via-indigo-600  to-black text-black font-semibold text-xl  p-4  shadow-lg group-hover:shadow-lg group-hover:shadow-black  transistion duration-300 ease-in-out w-[210px] ">
              Stay Organized With Your Tasks
              </span>

              <img
               width= "300px" height="440" 
                className="  "
                src={images.todo_mb}
                alt="Todo App"
              />
            </GlareCard>
          </a>
        </div>
        <div className="group h-fit w-fit self relative">
          <a
            href="https://tinypiano-2-12.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" relative block  "
          >
            <GlareCard className="   ">
              <span className="absolute group-hover:opacity-100 group-hover:scale-110 flex text-3xl text-center text-lime-300 font-bold bottom-5 drop-shadow-lg   w-full mx-auto items-center justify-center opacity-60  ">
                TinyPiano
              </span>

              {/* Tooltip Hover Effect */}
              <span className="absolute bottom-44   bg-transparent border-2 border-black rounded-3xl left-1/2 transform -translate-x-1/2 opacity-0  group-hover:scale-110  group-hover:opacity-100 transition-opacity  text-center bg-gradient-to-br from-black via-lime-300  to-cyan-950 text-black font-semibold text-xl  p-4  shadow-lg group-hover:shadow-lg group-hover:shadow-black  transistion duration-300 ease-in-out w-[210px] ">
                Where Every Note Tells a Story
              </span>

              <img
               width= "300px" height="440" 
                className="  "
                src={images.piano_mb}
                alt="AniHive"
              />
            </GlareCard>
          </a>
        </div>
 
      </ul>
    </div>
  );
};

export default Stack;
