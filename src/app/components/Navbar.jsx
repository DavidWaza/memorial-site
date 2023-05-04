"use client";
import "../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsTelephone } from "react-icons/bs";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <>
      <div>
        <nav className="navbar">
          <div className="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
            </div>
            <ul className={`menu-items stroke  primary_font`}>
              {links.map(({ href, label }, index) => (
                <li key={index}>
                  <Link
                    className={`${pathname === href ? "activeTab" : null}`}
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-around hidden md:flex primary_font">
                <BsTelephone className="text-black text-lg" />
                <p className="text-black ml-3">+234(0)9033341574</p>
              </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
