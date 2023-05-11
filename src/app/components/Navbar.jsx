"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { link: "/", label: "Home" },
  { link: "/biography", label: "Biography" },
  { link: "gallery", label: "Gallery" },
  { link: "/tribute", label: "Tribute" },
];

const BigNav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [shouldChangeBg, setShouldChangeBg] = useState(false);

  const pathname = usePathname();

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

  return (
    <nav className={`${shouldChangeBg ? "navbar-bg-white" : "navigation"}`}>
      <button
        className={`hamburger`}
        id="text"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded
            ? `${`navigationMenu`} ${`expanded`}`
            : `${`navigationMenu`}`
        }
      >
        <ul className={`${shouldChangeBg ? "stroke stroke-inverse" : "stroke"}`}>
          {links.map(({ link, label }, index) => {
            return (
              <li className={`pt-5 primary_font`} key={index + label}>
                <Link
                  href={link}
                  onClick={() => {
                    isNavExpanded && setIsNavExpanded(!isNavExpanded);
                  }}
                  className={`${pathname === link ? "activeTab" : null}`}
                >
                  <p
                    className={`primary_font secondary_font-size ${
                      label === "Tribute" ? "tribute-button" : ""
                    }`}
                  >
                    {label}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default BigNav;
