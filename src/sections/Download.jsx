import { Element } from "react-scroll";
import { Marker } from "../components/Marker";
import { links, logos } from "../constants";

import Xora from "../assets/images/xora.svg";
import Lines from "../assets/images/lines.svg";
import Screen from "../assets/images/screen.jpg";

export const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
              <div className="mb-10">
                <img src={Xora} alt="xora" width={160} height={55} />
              </div>

              <p className="body-1 mb-10 max-w-md">
                Try it now for free on iOs, Android, PC, Web - whatever your
                flavor, we have got you covered
              </p>

              <ul className="flex flex-wrap items-center gap-6">
                {links.map((link) => (
                  <li
                    key={link.id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <a
                      href={link.url}
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 
                       border-s3 bg-s1 transition-borderColor duration-300 overflow-hidden"
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src={Lines}
                        alt="lines"
                        className="absolute size-13/20 object-contain z-4"
                      />
                      <span className="download_tech-icon">
                        <img
                          src={link.icon}
                          alt="iconsvg"
                          className="fill-black"
                        />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 borde-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img
                    src={Screen}
                    alt="screen"
                    width={855}
                    height={655}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className="flex justify-between mt-24 max-lg:hidden items-center">
            {logos.map((logo) => (
              <li key={logo.id} className="cursor-pointer">
                <img
                  src={logo.url}
                  alt={logo.title}
                  width={logo.width}
                  height={logo.height}
                  className="hover:opacity-50 transition-opacity duration-300"
                />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};
