"use client";
import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const UserCommentCard = ({src, name}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={src} title="green iguana" />
      <CardContent>
        <Typography variant="body2" color="text.secondary" className='mobile-text'>
          Zephyr moonlit dance cast a spell upon enchanted forest. Whispering
          leaves pirouetted through the night,while starlight painted a
          celestial tapestry overhead. Mystical creatures gathered in the
          glen,their eyes shimmering with ethereal magic. The ancient trees
          stood as silent witnesses, their branches swaying to the rhythm of a
          secret melody.
        </Typography>
      </CardContent>
      <Typography
        gutterBottom
        variant="p"
        component="div"
        className="flex justify-end font-extrabold capitalize px-4"
      >
        {name}
      </Typography>
    </Card>
  );
}
export default UserCommentCard;
