"use client";
import GalTributeSection from "../components/GalTributeSection";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styles from "./bio.module.css";
import NavRest from "../components/NavRest";
import Container from "@mui/material/Container";


export default function Biography() {
  return (
    <main>
      <NavRest />
      <div className={styles.hero}></div>
      <Container maxWidth='lg'>
      <Box>
        <Grid>
          <Grid>
            <div className="mt-16">
              <p className="primary_font secondary_font-size">Early life</p>
            </div>
          </Grid>
        </Grid>
        <Grid>
          <GalTributeSection />
        </Grid>
      </Box>
      </Container>
    
    </main>
  );
}
