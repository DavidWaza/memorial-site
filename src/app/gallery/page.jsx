"use client";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Photos } from "../../../lib/data";
import Container from "@mui/material/Container";
import Image from "next/image";
import NavRest from "../components/NavRest";

const GalleryPage = () => {
  const [data, setData] = useState({ src: "", id: 0 });

  const viewImage = (src, id) => {
    setData({ src, id });
  };

  const imageAction = (action) => {
    let id = data.id;
    if (action === "next-img") {
      setData({ src: Photos[id + 1], i: id + 1 });
    }
    if (action === "prev-img") {
      setData({ src: Photos[id - 1], i: id - 1 });
    }
    if (!action) {
      setData({ src: "", id: 0 });
    }
  };
  return (
    <>
      {data.src && (
        <div className="mt-[5%]">
          <div className="image-lightbox-wrapper">
            <button onClick={() => imageAction()} className="button-cancel">
              X
            </button>
            <button
              onClick={() => imageAction("prev-img")}
              className="bg-white p-3"
            >
              Previous
            </button>
            <img src={data.src} className="image-lightbox" />
            <button
              onClick={() => imageAction("next-img")}
              className="bg-white p-3"
            >
              Next
            </button>
          </div>
        </div>
      )}
      <Container>
        {/* <NavRest /> */}

        <Box>
          <Grid container spacing={2}>
            {Photos.map(({ id, src }) => (
              <Grid item md={4} key={id}>
                <img
                  src={src}
                  alt="photo"
                  className="img-size mt-[18%]"
                  onClick={() => viewImage(src, id)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default GalleryPage;
