import React from "react";
import { socials } from "../constants";

export const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">Copyright, &copy; JsMastery</p>

            <div className="flex items-center justify-center sm:ml-auto">
              <p className="legal-after relative mr-9 text-p5 transition-all duration-300 hover:text-p1">
                Privacy policy
              </p>
              <p className="text-p5 transition-all duration-300 hover:text-p1">
                Terms of use
              </p>
            </div>
          </div>

          <ul className="flex justify-center flex-1 gap-3 max-md:mt-10 md:justify-end">
            {socials.map((link) => (
              <li key={link.id}>
                <a href={link.url} className="social-icon">
                  <img
                    src={link.icon}
                    alt="icon"
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
