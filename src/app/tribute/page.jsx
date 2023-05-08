"use client";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Image from "next/image";

export default function SendMessageForm(className) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [displayPic, setDisplayPic] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

   useEffect(() => {
    const firstNameFromStorage = localStorage.getItem('firstName');
    const lastNameFromStorage = localStorage.getItem('lastName');
    const messageFromStorage = localStorage.getItem('message');

    if (firstNameFromStorage) {
      setFirstName(firstNameFromStorage);
    }

    if (lastNameFromStorage) {
      setLastName(lastNameFromStorage);
    }

    if (messageFromStorage) {
      setMessage(messageFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('message', message);
  }, [firstName, lastName, message]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 2000);
  };

  const submitValue = () => {
    const frmDetails = {
      "First Name": firstName,
      "Last Name": lastName,
      "Message": message,
      "Display Images": displayPic,
    };
    return frmDetails;
  };


  return (
    <>
      <Container>
        <Row className="pt-40">
          <Col>
            <div className="text-center">
              <Header title="Tribute Hall" />
            </div>
          </Col>
        </Row>
        <Row className="card">
          <Col>
            <div className="flex">
              {/* <div className>
                <Image src={isSubmitted && displayPic} alt="user-photo" width={500} height={500}/>
              </div> */}
              <p className="primary_font font-black antialiased text-md">
                {isSubmitted && firstName + " " + " " + lastName}
              </p>
            </div>
            {/* <p>{Date.now()}</p> */}
            <div>
              <p className="primary_font antialiased secondary_font-size tracking-normal">{isSubmitted && message}</p>
            </div>
          </Col>
        </Row>
      <div className="mt-40 mb-5 text-center w-full">
        <p className="text-black primary_font secondary_font-size text-center">
          PAY YOUR RESPECT
        </p>
      </div>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="my-3 flex justify-center">
          <input
            className={clsx(
              "border-solid-gray px-6 py-3 text-lg w-1/2 bg-[#D9D9D9] primary_font",
              className
            )}
            placeholder="First Name"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="my-3 flex justify-center">
          <input
            className={clsx(
              "border-solid-gray px-6 py-3 text-lg w-1/2 bg-[#D9D9D9] primary_font",
              className
            )}
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div className="my-3 flex justify-center relative">
          <input
            className={clsx(
              "border-solid-gray px-6 py-3 text-lg w-1/2 bg-[#D9D9D9] primary_font",
              className
            )}
            placeholder="Upload images"
          />
          <div className="absolute md:right-72 right-3 right md:top-3 top-20 primary_font">
            <input
              type="file"
              name="upload"
              accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => setDisplayPic(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center mt-16 md:mt-0">
          <textarea
            name="text"
            className="border-solid-gray px-6 py-3 text-lg  w-1/2 bg-[#D9D9D9] primary_font"
            placeholder="Message"
            type="text"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        <div>
       
        </div>
        <div className="my-3 flex justify-center">
          <Button
            intent="secondary"
            size="medium"
            className=" primary_font py-3 px-5"
            onClick={submitValue}
          >
            {isLoading ? (
              <>
                <FontAwesomeIcon icon={faCircleNotch} spin /> {"Sending"}
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </div>
      </form>
      </Container>
    </>
  );
}
