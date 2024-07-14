import { Box ,Typography,Stack,Button} from '@mui/material'
import React from 'react'
import bannerImage from '../assets/images/girl_running.png'

const Banner = () => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'40px'},ml:{sm:'50px'}}} position='relative'  p='20px'>
      
      <Typography sx={{fontFamily:'Space Grotesk',fontWeight:'bold',fontSize:{lg:'19px',xs:'13px'},color:'#653b46'}}>
        Fitness Club
        </Typography>
        <Typography sx={{fontFamily:'Space Grotesk',fontWeight:'bold',fontSize:{lg:'44px',xs:'40px'}}} mb={3}>
        Transform your body,<br/> Elevate your fitnesss
        </Typography>
        <Button variant='contained' style={{ backgroundColor:'#653b46'}} href="#excercises" >Get started</Button>
        <Typography fontWeight={600} color='pink' sx={{opacity:0.2,display:{lg:'block',xs:'none'}}} fontSize={200}>Exercises</Typography>
        <Box className='hero-banner-img'>
        <img src={bannerImage} alt='banner' className='hero-banner-imgs' />
        </Box>
        
    </Box>
  )
}

export default Banner