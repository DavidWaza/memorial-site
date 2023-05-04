"use client";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "./Button";

export default function Header() {
  let buttontext = "Register person";
  return (
    <>
      <Row className="mt-12">
        <Col className="flex ml-12">
          <p className="logo text-black md:ml-32 ml-24 font-bold primary_font">
            Logo
          </p>
          <div className="relative ml-12 hidden md:block">
            <input
              className="inputClass"
              placeholder="Search person"
              type="text"
              name="search"
            />
            <button className="absolute top-[8px] right-3 flex">
              <div className="rounded-md">
                <AiOutlineSearch className=" bg-black p-1 text-lg text-white rounded-md" />
              </div>
            </button>
          </div>
          <div></div>
        </Col>
        <Col>
          <div className="flex justify-end mr-[17%]">
            <Button
              type="submit"
              intent="secondary"
              size="medium"
              className="text-white text-sm primary_font"
            >
              {buttontext}
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}
