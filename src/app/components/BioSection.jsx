"use client";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from "./Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BioSection() {
  const bioContents = {
    title: "biography",
    content: `Christian Atani, an enigmatic figure of his time, 
    left an indelible mark on the world before his untimely demise. 
    Born on a stormy night in the quaint town of Bayelsa, 
    his life's journey would lead him down an extraordinary path of adventure, 
    innovation, and unwavering determination. This biography seeks to capture the essence of a 
    man who defied conventional norms, forever etching his name in the annals of history.`,
  };
  return (
    <Box>
      <Grid container spacing={2} className="pt-20 px-3 md:px-0">
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
              ease: [0.9, 0.71, 0.7, 1.01],
            }}
            className="bio-bg-image"
          ></motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: [0.9, 0.71, 0.7, 1.01],
            }}
            className=" pb-6 relative space-adjustment"
          >
            <p className="primary_font my-7 text-[25px] font-adjustment">
              {bioContents.title.toUpperCase()}
            </p>
            <hr className="hr" />
            <p className="primary_font leading-[25px] tracking-[2px] font-adjustment default_text-size">
              {bioContents.content}
            </p>
          </motion.div>
          <Link href="/biography">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.7,
                duration: 0.7,
                ease: [0.9, 0.71, 0.7, 1.01],
              }}
              className="primary_font secondary_font-size tracking-[0.16rem] button-group"
            >
              <Button
                intent="secondary"
                size="medium"
                className="text-md font-normal"
              >
                View Biography
              </Button>
            </motion.div>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
