import React from 'react'
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExcercise = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'10px',xs:'0px'}}} id='excercises'>
       <Typography sx={{ fontSize: { lg: '30px', xs: '20px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: 'brown', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
    {targetMuscleExercises && targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
    </Stack>
    <Typography sx={{ fontSize: { lg: '30px', xs: '20px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: 'brown', textTransform: 'capitalize' }}>equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative'}}>
    {equipmentExercises && equipmentExercises.length !== 0 ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
    </Stack>

    </Box>
  )
}

export default SimilarExcercise