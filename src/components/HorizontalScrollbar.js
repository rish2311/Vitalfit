import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu} from "react-horizontal-scrolling-menu";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import ExcerciseCard from "./ExcerciseCard";

import cardioimg from "../assets/icons/equipment.png";
import allimg from "../assets/icons/gym.png";
import backimg from "../assets/icons/back.png";
import chestimg from "../assets/icons/bodybuilder.png";
import armimg from "../assets/icons/muscle.png";
import legimg from "../assets/icons/running.png";
import neckimg from "../assets/icons/side.png";
import shoulderimg from "../assets/icons/shoulder.png";
import waistimg from "../assets/icons/people.png";

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const imgs = [
  { part: "all", img: allimg },
  { part: "back", img: backimg },
  { part: "cardio", img: cardioimg },
  { part: "chest", img: chestimg },
  { part: "lower arms", img: armimg },
  { part: "lower legs", img: legimg },
  { part: "neck", img: neckimg },
  { part: "shoulders", img: shoulderimg },
  { part: "upper arms", img: armimg },
  { part: "upper legs", img: legimg },
  { part: "waist", img: waistimg },
];

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, bodyParts }) => {
  return (

    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          margin="0,40px"
          sx={
            !bodyParts
              ? {
                  "&:hover": {
                    borderTop: "15px solid #653b46",
                  },
                }
              : {}
          }
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
              imgs={imgs}
            />
          ) : (
            <ExcerciseCard excercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
