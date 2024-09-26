import React, { useState } from "react";
import XoraLogo from "../assets/images/xora.svg";
import { NavLink } from "../components/NavLink";
import { Link as LinkScroll } from "react-scroll";
import Magic from "../assets/images/magic.svg";
import Close from "../assets/images/close.svg";
import bgOutline from "../assets/images/bg-outlines.svg";
import bgFilles from "../assets/images/bg-outlines-fill.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src={XoraLogo} alt="logo" width={115} height={55} />
        </a>

        <div
          className={`w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0
            ${isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"}
            `}
        >
          <div
            className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen 
                     max-xl:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4"
          >
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="Feature" />
                  <div className="dot" />
                  <NavLink title="Pricing" />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-100}
                    spy
                    smooth
                    className={`max-lg:hidden transition-transform duration-500 cursor-pointer`}
                  >
                    <img src={XoraLogo} alt="logo" width={160} height={55} />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="Faq" />
                  <div className="dot" />
                  <NavLink title="Download" />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src={bgOutline}
                alt="outlines"
                width={960}
                height={380}
                className="relative z-2"
              />

              <img
                src={bgFilles}
                alt="outlines"
                width={960}
                height={380}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src={isOpen ? Close : Magic}
            alt="close"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};
