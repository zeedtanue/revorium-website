import { Card, 
  CardContent, 
  Typography, 
  CardActionArea, 
  CardActions } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import UpcomingProjectsCarousel from '../../components/UpcomingProjectsCarousel'
import styles from '../../styles/OurProducts.module.css'
import useStyles from '../../styles/Products.Styles'

export default function Product() {
  const [featureData, setFeatureData] = useState([
    {image: '/blockchain-vector.png', title: 'Blockchain Tecnology', details: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'},
    {image: '/blockchain-vector.png', title: 'Blockchain Tecnology', details: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'},
    {image: '/blockchain-vector.png', title: 'Blockchain Tecnology', details: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'},
    {image: '/blockchain-vector.png', title: 'Blockchain Tecnology', details: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'},

  ])

  const classes = useStyles()
  return (
    <div className={styles.container}>
      <Head>
        <title>Products - Revorium</title>
        <meta name="Our Products" content="Products of Revorium" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
          <div className='columns ourcompany' style={{ background: '#324A9F', display:'flex', flex:1, marginTop:20,marginBottom:20 }}>
            <div className='has-text-centered column' style={{ alignItems:'center', justifyContent:'center',alignContent:'center',textAlign:'center',padding:80 }}> 
              <Typography variant='h2' style={{ color:'white', alignSelf:'center' }}>OUR PRODUCT</Typography>
              <Typography variant='h6' style={{ color:'white', alignSelf:'center' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
               </Typography>
               <Typography variant='p' style={{ color:'white', alignSelf:'center' }}>
                Home &gt; Our Products &gt; Fair Ride
               </Typography>
            </div>
            <img className='column is-half' src='/our-company.png' style={{ maxHeight: 500 }} />
          </div>
          <div className='mt-6'></div>
          <UpcomingProjectsCarousel/>
          <div className='mt-6'></div>

        <div className='has-text-centered' style={{ alignItems:'center', justifyContent:'center',alignContent:'center',textAlign:'center',padding:20 }}> 
        
          <p className='title' style={{ alignSelf:'center' }}>The Main Feature That <br/> We Will Make</p>
          
        </div>  


        <div class="columns">
        
          {featureData.map((item)=>
          <div class={`column ${classes.mainFeatureBox}`} >
            
          <Card className={classes.card}>
          <CardActionArea>
           <img className={classes.cardImage} src={item.image} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.details}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        </div>
          )}
          
          
          
          
        </div>
        <div className={classes.spacing }>

          </div>
      </body>

      
    </div>
  )

}




