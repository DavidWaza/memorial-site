"use client";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const NavRest = () => {
  const pathname = usePathname();
  const links = [
    { link: "/", label: "Home" },
    { link: "/biography", label: "Biography" },
    { link: "gallery", label: "Gallery" },
    { link: "/tribute", label: "Tribute" },
  ];

  return (
    <>
      <nav className="navbar flex justify-end -mt-5">
        <nav
          className={`p-8 navbar-bg-white w-full`}
        >
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines p-0">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className={`menu-items stroke stroke-color-black`}>
            {links.map(({ link, label }, index) => (
              <motion.li whileHover={{scale:1.1}} key={index} className={`primary_font secondary_font-size`}>
                <Link
                  className={`no-underline ${
                    pathname === link ? "activeTab" : null
                  }`}
                  href={link}
                >
                  {label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </nav>
    </>
  );
};
export default NavRest;
