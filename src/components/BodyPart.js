import { Stack, Typography } from "@mui/material";
import React from "react";


const BodyPart = ({ item, setBodyPart, bodyPart,imgs }) => {

    const imgObject = imgs.find((img) => img.part === item);
    const imgLink = imgObject ? imgObject.img :'';
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid pink" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "200px",
        height: "210px",
        cursor: "pointer",
        gap: "35px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1450, left: 100, behavior: 'smooth' });
      }}
    >
      <img
        src={imgLink}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="18px"
        fontWeight="bold"
        color="#653b46"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
