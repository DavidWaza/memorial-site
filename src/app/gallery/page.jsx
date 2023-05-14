"use client";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Photos } from "../../../lib/data";
import Image from "next/image";
import NavRest from "../components/NavRest";

const GalleryPage = () => {
  return (
    <>
    <NavRest />
      <Box>
        <Grid container spacing={2} className="g-0">
          {Photos.map(({ id, src}) => (
            <Grid item md={4} key={id}>
              <img src={src} alt="photo" className="img-size" />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default GalleryPage;
