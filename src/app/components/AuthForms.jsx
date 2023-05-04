"use client";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Button from "./Button";
import { useState } from "react";
import Input from "../components/Input";

const initial = { email: "", password: "", firstName: "", lastName: "" };
const AuthForms = () => {
  const [route, setRoute] = useState("search");
  const [formState, setFormState] = useState(initial);

  const registerContent = {
    linkUrl: "register",
    buttonText: "Register Person",
  };

  const searchContent = {
    linkUrl: "searchParams",
    buttonText: "Search Person",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    setRoute(route === "search" ? "register" : "search");
  };

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <Button
            intent="zeta"
            size="medium"
            className="text-sm"
            onClick={handleClick}
          >
            {searchContent.buttonText}
          </Button>
        </Col>
        <Col sm={6}>
          <Button
            intent="secondary"
            size="medium"
            className="text-sm"
            onClick={handleClick}
          >
            {registerContent.buttonText}
          </Button>
        </Col>
      </Row>
      <form onSubmit={handleSubmit}>
        {route === "search" && (
          <div>
            <div className="flex my-8 justify-between">
              <div className="pr-2">
                <label className="ml-[24px] primary_font text-black/50">
                  First Name
                </label>
                <Input
                  required
                  placeholder="First Name"
                  value={formState.firstName}
                  className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, firstName: e.target.value }))
                  }
                />
              </div>
              <div className="pl-2">
                <label className="ml-[24px] primary_font text-black/50">
                  Last Name
                </label>
                <Input
                  required
                  placeholder="Last Name"
                  value={formState.lastName}
                  className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, lastName: e.target.value }))
                  }
                />
              </div>
            </div>
            <div  className="text-center">
            <Button intent="primary">
              {searchContent.buttonText}
            </Button>
            </div>
            
          </div>
        )}
        {route === "register" && (
          <div>
            <div className="my-5">
              <div className="">
                <label className="ml-[24px] primary_font text-black/50">
                  First Name
                </label>
                <Input
                  required
                  placeholder="First Name"
                  value={formState.firstName}
                  className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, firstName: e.target.value }))
                  }
                />
              </div>
              <div className=" my-6">
                <label className="ml-[24px] primary_font text-black/50">
                  Last Name
                </label>
                <Input
                  required
                  placeholder="Last Name"
                  value={formState.lastName}
                  className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, lastName: e.target.value }))
                  }
                />
              </div>
              <div className="my-6">
                <label className="ml-[24px] primary_font text-black/50">
                  Email
                </label>
                <Input
                  required
                  type="email"
                  placeholder="Email"
                  value={formState.email}
                  className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                />
              </div>
              <div className="my-6">
                <label className="ml-[24px] primary_font text-black/50">
                  Password
                </label>
                <Input
                  required
                  value={formState.password}
                  type="password"
                  placeholder="Password"
                  className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, password: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className="text-center">
              <Button intent="primary">{registerContent.buttonText}</Button>
            </div>
          </div>
        )}
      </form>
    </Container>
  );
};
export default AuthForms;
