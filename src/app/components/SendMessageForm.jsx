"use client";
import Button from "./Button";
import Input from "./Input";

export default function SendMessageForm() {
  return (
    <>
      <div className="mt-10 mb-5 text-center w-full">
        <p className="text-black primary_font secondary_font-size text-center">
          PAY YOUR RESPECT
        </p>
      </div>
      <form className="w-full">
        <div className="my-3 flex justify-center">
          <Input placeholder="First Name" />
        </div>
        <div className="my-3 flex justify-center">
          <Input placeholder="Last Name" />
        </div>
        <div className="my-3 flex justify-center relative">
          <Input placeholder="Upload Picture" />
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
          />
        </div>
        <div className="my-3 flex justify-center">
          <Button
            intent="secondary"
            size="medium"
            className=" primary_font py-3 px-5"
          >
            Send Message
          </Button>
        </div>
      </form>
    </>
  );
}
