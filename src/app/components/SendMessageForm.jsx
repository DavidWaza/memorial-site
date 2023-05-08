"use client";
import Button from "./Button";
import { useState } from "react";
import clsx from "clsx";

export default function SendMessageForm({ className }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const submitValue = () => {
    const frmDetails = {
      'First Name': firstName,
      'Last Name': lastName,
      'Message': message,
    };
  };
  return (
    <>
      <div className="mt-10 mb-5 text-center w-full">
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
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        {/* <p>First Name: {details['First Name']}</p> */}
        <div className="my-3 flex justify-center">
          <input
            className={clsx(
              "border-solid-gray px-6 py-3 text-lg w-1/2 bg-[#D9D9D9] primary_font",
              className
            )}
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="my-3 flex justify-center">
          <Button
            intent="secondary"
            size="medium"
            className=" primary_font py-3 px-5"
            onClick={submitValue}
          >
            Send Message
          </Button>
        </div>
      </form>
    </>
  );
}
