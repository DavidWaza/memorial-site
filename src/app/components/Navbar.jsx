"use client";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const Navbar = () => {
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
              <div
                key={index}
                className="primary_font secondary_font-size bg-transparent"
              >
                <Link href={link} className="no-underline">
                  <p className="text-black ml-3">{label}</p>
                </Link>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </>
  );
};
export default Navbar;
