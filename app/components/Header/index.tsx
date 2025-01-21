"use client";
import Link from "next/link";
import { Nav } from "./Nav";
import { motion } from "framer-motion";

const NavLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
];

export const Header = () => {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.header
      className="absolute top-0 w-full z-10 h-24 flex items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" flex justify-between items-center containers">
        <Link href="/">
          <h1 className="md:text-xl text-sm flex items-center">
            HerisonTech
            <span className="text-purple-950 text-2xl">.</span>
          </h1>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-10 text-xs sm:text-base ">
          {NavLinks.map((item) => (
            <Nav {...item} key={item.label} />
          ))}

          <button
            onClick={handleContact}
            className="cursor-pointer flex justify-between bg-zinc-500/10 px-2 py-2 rounded-full hover:text-white tracking-wider shadow-xl hover:bg-purple-950  hover:scale-105 duration-500 hover:ring-1 ring-zinc-100 text-xs sm:text-sm md:text-base"
          >
            Hire me
          </button>
        </nav>
      </div>
    </motion.header>
  );
};
