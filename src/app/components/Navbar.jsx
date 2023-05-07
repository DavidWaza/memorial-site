"use client";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const Links = [
    { link: "/", label: "Home" },
    { link: "/biography", label: "Biography" },
    { link: "gallery", label: "Gallery" },
    { link: "/tribute", label: "Tribute" },
  ];
  return (
    <>
      <Container>
        <Row>
          <div className="flex justify-end mt-10 pt-10">
            {Links.map(({ link, label }, index) => (
              <ul
                key={index}
                className="primary_font secondary_font-size bg-transparent stroke"
              >
                <li>
                <Link
                  href={link}
                  className={`no-underline ${
                    pathname === link ? "activeTab" : null
                  }`}
                >
                  {label}
                </Link>
                </li>
               
              </ul>
            ))}
          </div>
        </Row>
      </Container>
    </>
  );
};
export default Navbar;
