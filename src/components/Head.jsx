"use client"; // Ensure this is used for Next.js or client-side rendering
import React from "react";
import { FloatingNav } from "./floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function Head() {
  const  navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white mx-2  m-1" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white mx-2 m-1" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white mx-2 m-1 " />,
    },
  ];

  return (
    <div className="absolute  ">
       <DummyContent/>
      <FloatingNav className="gap-4 mt-6 " navItems={navItems} />
     
    </div>
  );
}

const DummyContent = () => {
   return (
     <div className="  flex text-center w-full mx-auto fixed top-1">

       <p className= " text-blue-500  text-center text-3xl font-semibold font-mono w-full ">
          Stack.fun
       </p>
     </div>
    
   );
 };

