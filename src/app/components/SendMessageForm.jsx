"use client";
import Button from "./Button";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import FbLoginButton from "./FbLoginButton";

export default function SendMessageForm({ className, party }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [addComment, setAddComment] = useState([]);

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
      Message: message,
      "Display Images": displayPic,
    };
    return frmDetails;
  };

  return (
    <>
      <Box>
        <div className="mt-10 mb-5 text-center w-full">
          <p className="text-black primary_font secondary_font-size text-center">
            PAY YOUR RESPECT
          </p>
          <p className="primary_font">{party}</p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="my-3 flex justify-center">
            <input
              required
              className={clsx(
                "border-solid-gray px-6 py-3 text-lg w-full bg-[#D9D9D9] primary_font",
                className
              )}
              placeholder="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="my-3 flex justify-center">
            <input
              required
              className={clsx(
                "border-solid-gray px-6 py-3 text-lg w-full bg-[#D9D9D9] primary_font",
                className
              )}
              placeholder="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="flex justify-center md:mt-0">
            <textarea
              required
              name="text"
              className="border-solid-gray px-6 py-3 text-lg  w-full bg-[#D9D9D9] primary_font"
              placeholder="Message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div></div>
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
          <div>
            <FbLoginButton />
          </div>
        </form>
      </Box>
    </>
  );
}
