"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";



export default function UserCommentCard({ src, name }) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar alt="Travis Howard" src={src} className={classes.avatar} />
        }
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          className="text-center default_text-size my-[10px] py-[20px] px-[15px]"
        >
          Zephyr moonlit dance cast a spell upon enchanted forest. Whispering
        </Typography>
        <hr className='w-1/2 my-[10px] mx-[auto]'/>
      </CardContent>
      <CardContent>
        <Typography
          gutterBottom
          variant="p"
          component="div"
          className="flex justify-center text-mute font-extrabold text-[18px] -mt-[30px] capitalize px-4"
        >
          {name}
        </Typography>
        <CardActions className="flex justify-center">
          <Button
            size="small"
            className="primary_font text-center text-[12px]"
            href="/tribute"
          >
            Learn More
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
