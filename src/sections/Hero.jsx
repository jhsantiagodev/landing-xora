import React from "react";
import { Element } from "react-scroll";
import { Link as LinkScroll } from "react-scroll";
import { ButtonCust } from "../components/ButtonCust";
import Zap from "../assets/images/zap.svg";
import bgImageHero from "../assets/images/hero.png";

export const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-3">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Video Editin
            </div>

            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly simple
            </h1>

            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We designed Xora IA video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>

            <LinkScroll to="features" offset={-100} spy smooth>
              <ButtonCust icon={Zap}>Try it now</ButtonCust>
            </LinkScroll>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src={bgImageHero}
              alt="bgImage"
              className="size-1230 max-lg:h-auto"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};
