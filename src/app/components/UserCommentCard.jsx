"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function UserCommentCard({ src, name }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader avatar={<Avatar alt="Travis Howard" src={src} />} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Zephyr moonlit dance cast a spell upon enchanted forest. Whispering
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          gutterBottom
          variant="p"
          component="div"
          className="flex justify-end font-extrabold capitalize px-4"
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
