import React from "react";
import { Link as LinkScroll } from "react-scroll";

export const NavLink = ({ title }) => {
  return (
    <LinkScroll
      offset={-100}
      spy
      smooth
      className="base-bold text-p4 uppercase transition-colors duration-300 
    cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );
};
