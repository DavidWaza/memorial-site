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
        <Grid className="mt-52 g-0">
          {Photos.map(({ id, src}) => (
            <Grid md={4} key={id}>
              <img src={src} alt="photo" className="img-size" />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default GalleryPage;
