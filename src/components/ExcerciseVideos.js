import { BorderTop } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Loader from "./Loader";


const ExcerciseVideos = ({ exerciseVideo, name }) => {
  if (!exerciseVideo.length) return <Loader/>;
  return (
    <Box sx={{ marginTop: { lg: "80px", xs: "20px" } }} p="20px">
      <Typography mb="33px" variant="h5">
        Watch{" "}
        <span
          style={{
            color: "#653b46",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          {name}
        </span>{" "}
        exercise videos.
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { md: "row" }, gap: { lg: "20px", xs: "0px" } ,width: "100%"}}
      >
        {exerciseVideo?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderRadius: '10px',border: "4px solid pink"}} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="subtitle1" color='#653b46' sx={{fontWeight:'bold'}}>
                {item.video.title}
              </Typography>
              <Typography variant="subtitle2" color='#653b46'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
          
        ))}
      </Stack>
    </Box>
  );
};

export default ExcerciseVideos;
