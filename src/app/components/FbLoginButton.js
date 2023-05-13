"use client";
import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const FbLoginButton = () => {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <div class="container">
      <div>
        {!login && (
          <FacebookLogin
            appId="776667614032350"
            autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,user_friends"
            callback={responseFacebook}
            icon="fa-facebook"
          />
        )}
        {login && <img src={picture} alt='pic' />}
      </div>
      {login && (
        <>
          <div>{data.name}</div>
          <div>{data.email}</div>
        </>
      )}
    </div>
  );
};
export default FbLoginButton;
