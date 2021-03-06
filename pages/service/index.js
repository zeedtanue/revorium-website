import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CardWide, Button} from '../../components/StyledComponent'
import Typography from '@material-ui/core/Typography'
import Head from 'next/head'
import UpcomingProjectsCarousel from '../../components/UpcomingProjectsCarousel'
import useStyles from '../../styles/Service.Styles'
import Link from 'next/link'

const getStarted = [
  {
    title: 'ERP System',
    date: 'Nov 12',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. '
  },
  {
    title: 'E-Commerce',
    date: 'Nov 11',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. '
  },
  {
    title: 'Payment',
    date: 'Nov 11',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. '
  }
]

const Service = () => {
  const classes = useStyles()

  return (
    <div>
    <Head>
        <title>Services - Revorium</title>
        <meta name="Our Services" content="Services offered by Revorium" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main >
        <div className=' has-text-centered ourcompany' 
          style={{ 
            justifyContent:'center',
            padding:80 ,
            background: '#324A9F', 
            display:'flex', 
            flex:1, 
            backgroundImage: " url('/polygon-luminary.png')",  
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
            }}>
            <div className='has-text-centered' > 
              <p className='title' style={{ color:'white', alignSelf:'center' }}>Service <br/> Software Development</p>

              <p className='subtitle' style={{ color:'white', alignSelf:'center' }}>
                Home &gt; Service &gt; Software Development
               </p>
               
            </div>
          </div>
          <div className={classes.projectContainer}>

          {/* Software development text */}
          <div className={classes.background}>
            <div className={classes.container}>
              <div className='columns is-8'>
                <div className='column is-4'>
                  <Typography className='title' variant='h4' component='div'>
                    Software Development 
                    Services for Your 
                    Innovative Ideas
                  </Typography> 

                </div>
                <div className='column is-2'>

                </div>

                <div className='column is-6'>
                  <Typography variant='p' component='div'>
                   Similique quis a libero enim quod corporis saepe quis. Perspiciatis velit quae consectetur consequatur eligendi. Omnis officiis quis culpa possimus exercitationem nesciunt commodi mollitia. 
                  </Typography>
                  <Button className='mt-4' color='white' 
                    backgroundColor="#020283">
                    See More
                    </Button>

                </div>

              </div>
            </div>
            <div className={`columns ${classes.container}`}>
              <div className='column'>
                <CardWide className='columns mb-6'>
                  {getStarted.map((item) => 
                  <div className='column'>
                    <div className={classes.aiLogo}>
                      <img src='/ai-logo.png'/>
                    </div>
                    <div className={classes.allign}>
                      <Typography variant='h6' component='div'>
                        {item.title}
                      </Typography>
                      <Typography variant='p' component='div'>
                        {item.description}
                      </Typography>
                    </div>
                  </div>
                  )}
                   
                </CardWide>

              </div>

              <div className='column is-2'>
                <Typography variant='h6' component='div'>
                 Get Started
                </Typography>
                
                <Typography variant='p' component='div'>
                Thinking insights, verified driven research, and metrics data help make decisions! 
                </Typography>
                <Link passHref href='/contact-us'>
                  <Button  className='mt-4' color='white' 
                    backgroundColor="#020283">
                    Contact Us
                    </Button>
                </Link>
              </div>

            </div>
          {/* service team */}

            <div 
            style={{  
              color:'white', 
              paddingTop:'30vh', 
              backgroundImage: " url('/serviceTeam.png')",  
              backgroundRepeat: 'no-repeat',
              backgroundSize:'cover',
              marginBottom:30 }} className={classes.container}>
            <div className={classes.row}>
              <div className={classes.rowColumn}>
                <Typography variant='h4' component='div'>
                  400+
                </Typography>
                <Typography variant='h6' component='div'>
                Project Complete
                </Typography>
                <Typography variant='p' component='div'>
                  Vivamus magna justo, lacinia eget 
                  consectetur sed
                </Typography>
              </div>
              <div className={classes.rowColumn}>

                <Typography variant='h4' component='div'>
                  100+
                </Typography>
                <Typography variant='h6' component='div'>
                Client Served
                </Typography>
                <Typography variant='p' component='div'>
                  Vivamus magna justo, lacinia eget 
                  consectetur sed
                </Typography>
              </div>
              <div className={classes.rowColumn}>

                <Typography variant='h4' component='div'>
                  80%+
                </Typography>
                <Typography variant='h6' component='div'>
                Loyal Clients
                </Typography>
                <Typography variant='p' component='div'>
                  Vivamus magna justo, lacinia eget 
                  consectetur sed
                </Typography>
              </div>


            </div>
         </div>
          </div>
          
         


         

          <div className='mt-6' style={{ padding:40 }}>
            <UpcomingProjectsCarousel/>
          </div>
          </div>
          </main>
          </div>

  )
}

export default Service