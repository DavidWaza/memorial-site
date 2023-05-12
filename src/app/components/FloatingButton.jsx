"use client";
import Fab from "@mui/material/Fab";
import EditIcon from '@mui/icons-material/Edit';

const FloatingButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Fab
      className="floating-button"
      color="secondary"
      aria-label="edit"
      onClick={scrollToTop}
    >
      <EditIcon />
    </Fab>
  );
};

export default FloatingButton;
