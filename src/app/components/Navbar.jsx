"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const pathname = usePathname();
  const [shouldChangeBg, setShouldChangeBg] = useState(false);

  const links = [
    { link: "/", label: "Home" },
    { link: "/biography", label: "Biography" },
    { link: "gallery", label: "Gallery" },
    { link: "/tribute", label: "Tribute" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const exceedsViewport = scrollY > innerHeight;

      setShouldChangeBg(exceedsViewport);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <>
      <div className="navbar nav-color-black -mt-5">
        <motion.nav
          className={`p-8 w-full ${
            shouldChangeBg ? "navbar-bg-white" : "navbar-container"
          }`}
          variants={variants}
        >
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines p-0">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
       
          <ul
            className={`menu-items stroke ${
              shouldChangeBg ? "stroke-color-black" : ""
            }`}
          >
            {links.map(({ link, label }, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className={`primary_font secondary_font-size`}
              >
                <Link
                  className={`no-underline ${
                    pathname === link ? "activeTab" : null
                  }`}
                  href={link}
                >
                  <p className={label === "Tribute" ? "tribute-button" : ""}>
                    {label}
                  </p>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </>
  );
};
export default Navbar;
