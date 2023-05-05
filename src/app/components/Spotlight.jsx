"use client";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { DProfile } from "../../../lib/data";
import { FaDove } from "react-icons/fa";
import Button from "./Button";

const Spotlight = () => {
  return (
    <div className="bg-white h-1/2 mt-20 primary_font">
      <div className="flex justify-center text-[20px]">
        <FaDove />
      </div>
      <div className="mb-5">
        <p className="text-center text-[30px] font-bold">Feautured Memorial</p>
      </div>
      <Container>
        <Row>
          {DProfile.map((D) => (
            <Col sm={4} key={D.id}>
              <Link href="">
                <Image src={D.ImgSRC} width={400} height={300} alt="atani" />
              </Link>
              <div className="bg-black w-full">
                <p className="text-center text-white primary_font p-3">
                  {D.Name.toUpperCase()}
                </p>
              </div>
              <Row>
                <Col sm={6}>
                  <div className="bg-white w-full -my-4 py-2">
                    <p className="text-center text-black primary_font py-6">
                      {D.DOB} - {D.DOD}
                    </p>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="card-hover_state text-center bg-[#931F06] pt-3 primary_font">
                    <Link href="/">
                      <button>
                        <p className="text-white text-[15px]">View Bio</p>
                      </button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Spotlight;
