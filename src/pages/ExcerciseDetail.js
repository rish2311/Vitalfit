import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { excerciseOptions, fetchData, options } from '../utils/fetchData'
import Detail from '../components/Detail'
import SimilarExcercise from '../components/SimilarExcercise'
import ExcerciseVideos from '../components/ExcerciseVideos'


const ExcerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const {id}=useParams();
  console.log(id)

  

  useEffect(()=>{
    const fetchExercisesData=async ()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, excerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData=await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,options);
      setExerciseVideo(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, excerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, excerciseOptions);
      setEquipmentExercises(equimentExercisesData);

    }
    fetchExercisesData();

  },[id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExcerciseVideos exerciseVideo={exerciseVideo} name={exerciseDetail.name}/>
      <SimilarExcercise targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExcerciseDetail