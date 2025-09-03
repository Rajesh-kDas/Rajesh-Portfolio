import React from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  // { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NvabarLinks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNav = (section) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
    }
  };
  return (
    <ul
      className="flex  gap-6 text-white fond-bold text-center lg:flex-row sm:flex-col 
    lg:relative sm:absolute sm:top-[150%] left-[50%]  -translate-x-[50%] lg:text-md sm:text-xl
     sm:bg-black  sm:backdrop-blur lg:bg-black sm:w-full py-4"
    >
      {links.map((link, index) => (
        <li key={index} className="group">
          {location.pathname === "/" ? (
            (console.log(link.section),
            (
              <ScrollLink
                to={link.section}
                smooth={true}
                spy={true}
                duration={500}
                offset={-50}
                className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
              >
                {link.link}
              </ScrollLink>
            ))
          ) : (
            <RouterLink
              to="/"
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
              onClick={() => handleNav(link.section)}
            >
              {link.link}
            </RouterLink>
          )}
          <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NvabarLinks;
