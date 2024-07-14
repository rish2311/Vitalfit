import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {

    const {name,bodyPart,gifUrl,target,equipment}=exerciseDetail;

    const extraDetail = [
        {
          icon: BodyPartImage,
          name: bodyPart,
        },
        {
          icon: TargetImage,
          name: target,
        },
        {
          icon: EquipmentImage,
          name: equipment,
        },
      ];
  return (
    <Stack gap='60px' sx={{flexDirection:{lg:'row'},p:'20px', alignItems:'center'}}>
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image'/>
        <Stack sx={{gap:{lg:'35px',xs:'20px'}}}>
            <Typography variant='h4' fontWeight='bold' textTransform='capitalize' color='brown'>
                {name}
            </Typography>
            <Typography variant='h6'>
            Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span>  is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
            </Typography>
            {extraDetail.map((item,index)=>(
                <Stack key={index} direction='row' gap='24px' alignItems='center'>
                    <Button sx={{background:'#fff2db',width:'100px',height:'100px',borderRadius:'50%'}}>
                        <img src={item.icon}/>
                    </Button>
                    <Typography textTransform='capitalize' variant='h5' alt={bodyPart} style={{width:'50px',height:'50px'}} >
                        {item.name}
                    </Typography>

                </Stack>

            ))}

        </Stack>

    </Stack>
  )
}

export default Detail