"use client";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SendMessageForm from "../components/SendMessageForm";
import NavRest from "../components/NavRest";
import UserCommentCard from "../components/UserCommentCard";
import { UserCommentsProfile } from "../../../lib/data";
import TributeBlock from "../components/TributeBlock";

const TributePage = () => {
  return (
    <main>
      <NavRest />
      <section className="text-gray-400 bg-gray-900 pt-[10%]">
        {UserCommentsProfile.map(
          ({ alt, src, showLess, showMore, name }, index) => (
            <div key={index}>
              <Container>
                <TributeBlock
                  alt={alt}
                  src={src}
                  // comments={comments}
                  showLess={showLess}
                  showMore={showMore}
                  name={name}
                />
              </Container>
            </div>
          )
        )}
      </section>
      <Container>
        <Box>
          <Grid>
            <Grid>
              <SendMessageForm />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  );
};

export default TributePage;
