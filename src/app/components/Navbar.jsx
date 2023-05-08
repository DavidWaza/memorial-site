"use client";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const links = [
    { link: "/", label: "Home" },
    { link: "/biography", label: "Biography" },
    { link: "gallery", label: "Gallery" },
    { link: "/tribute", label: "Tribute" },
  ];
  return (
    <>
        <nav className="navbar flex justify-end">
          <div className="navbar-container p-8 w-full">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines p-0">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <ul className={`menu-items stroke`}>
              {links.map(({ link, label }, index) => (
                <li key={index} className="primary_font secondary_font-size">
                  <Link
                    className={`no-underline ${
                      pathname === link ? "activeTab" : null
                    }`}
                    href={link}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
    </>
  );
};
export default Navbar;
