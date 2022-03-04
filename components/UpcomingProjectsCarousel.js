import { Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './UpcomingProjectsCarousel.Styles'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { IconButton } from '@mui/material'


const UpcomingProjectsCarousel = () => {
  const classes = useStyles()
  const [details, setDetails] = useState([
    {
      title: 'SwipeXYZ (upcoming)', 
      details: 'Similique quis a libero enim quod corporis saepe quis. Perspiciatis velit quae consectetur consequatur eligendi. Omnis officiis quis culpa possimus exercitationem nesciunt commodi mollitia. Aut eum in est. In facere non. Corporis cumque sapiente deleniti placeat magnam sunt excepturi est sit.',
      img1: '/carousel1.png',
      img2: '/carousel2.png'
    },
    {
        title: 'SwipeXYZ 2(upcoming)', 
        details: 'Similique quis a libero enim quod corporis saepe quis. Perspiciatis velit quae consectetur consequatur eligendi. Omnis officiis quis culpa possimus exercitationem nesciunt commodi mollitia. Aut eum in est. In facere non. Corporis cumque sapiente deleniti placeat magnam sunt excepturi est sit.',
        img1: '/carousel2.png',
        img2: '/carousel1.png'
    },
    {
        title: 'SwipeXYZ3 (upcoming)', 
        details: 'Similique quis a libero enim quod corporis saepe quis. Perspiciatis velit quae consectetur consequatur eligendi. Omnis officiis quis culpa possimus exercitationem nesciunt commodi mollitia. Aut eum in est. In facere non. Corporis cumque sapiente deleniti placeat magnam sunt excepturi est sit.',
        img1: '/carousel1.png',
        img2: '/carousel2.png'
    },
  ])
  const [position, setPosition] = useState(0)

  return (
    <div className='columns'>
        <div className='column is-half'>
            <Typography variant='h2'>
            {details[position].title}
            </Typography>
            <Typography variant='p'>
                {details[position].details}
            </Typography>
            
        </div>
        <div className='column is-1'>

        </div>
        <div className={classes.row}>
          <IconButton 
            onClick={()=> position !== 0? setPosition(position-1):setPosition(2)}
            sx={{ color: '#C6C6C6'}} aria-label="upload picture" component="span">
            <ArrowBackIos sx={{ color: '#C6C6C6'}}/>
          </IconButton>

          <img className={`column ${classes.image}`} src={details[position].img1} height='20px'/>
          <img className={`column ${classes.image}`}src={details[position].img2} />
          
          <IconButton  
            aria-label="upload picture" 
            component="span"
            onClick={()=> position !== 2? setPosition(position+1):setPosition(0)}
            >
            <ArrowForwardIos sx={{ color: '#C6C6C6'}}/>
          </IconButton>
            

        </div>



        {/* <div className='column is-2'>

        
            
            <div className='columns'>
            <ArrowBackIos style={{ marginTop:20 }} outlined sx={{ color: '#C6C6C6'}} />

              <img className={`column ${classes.image}`} src='/carousel1.png' height='20px'/>
              <img className={`column ${classes.image}`} src='/carousel2.png'/>
        <ArrowForwardIos style={{ marginTop:20 }} className='column' sx={{ color: '#C6C6C6'}}/>


            </div>


        </div> */}
        {/* <div className='column is-1'>
        <ArrowForwardIos style={{ marginTop:20 }} className='column' sx={{ color: '#C6C6C6'}}/>
        

        </div> */}

    </div>
  )
}

export default UpcomingProjectsCarousel