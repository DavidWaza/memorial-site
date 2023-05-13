"use client";
import React, { useState } from "react";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SendMessageForm from "../components/SendMessageForm";
import NavRest from "../components/NavRest";
import UserCommentCard from "../components/UserCommentCard";
import { UserCommentsProfile } from "../../../lib/data";

const TributePage = () => {
  return (
    <main className="mt-10">
      <NavRest />
      <Box>
        {/* <Row className="pt-40 g-5">
          {UserCommentsProfile.map(({ name, src,comme }, index) => (
            <Col sm={4} key={index}>
              <UserCommentCard src={src} name={name} />
            </Col>
          ))}
        </Row> */}
        <Grid>
          <Grid>
            <SendMessageForm />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
};

export default TributePage;
