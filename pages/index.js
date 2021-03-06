import { Card, 
  CardContent, 
  Typography, 
  CardActionArea, 
  CardActions } from '@material-ui/core'
import Head from 'next/head'
import Link from 'next/link'
import { Button } from '../components/StyledComponent'
import useStyles from '../styles/Home.Styles'
export default function Home() {

  const classes = useStyles()

  const servicesData = [
    {title: 'Software Development', desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.', image: '/softwareDevelopment.png'},
    {title: 'Blockchain Technology', desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.', image: '/blockchain-vector.png'},
    {title: 'AI Technology', desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.', image: '/ai-vector.png'},
    {title: 'Software Developmen', desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.', image: '/softwareDevelopment.png'},
    {title: 'AI Technology', desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.', image: '/ai-vector.png'},

  ]

  return (
    <div>
      <Head>
        <title>Revorium</title>
        <meta name="Revorium" content="A European IT company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className=' has-text-centered ourcompany' 
          style={{ 
            justifyContent:'center',
            padding:80 ,
            background: '#2A3CA6', 
            display:'flex', 
            flex:1, 
            backgroundImage: " url('/deleteLaterMain.png')",  
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
            }}>
            <div className='has-text-centered' > 
              <Typography variant='h2' component='div' style={{ color:'white', fontWeight:'400', fontFamily:'Nunito' |  'sans-serif' }}>
                BUILDING AN <span style={{ color:'#62d1cf' }}>UPRIGHT</span> WORLD <br/>WITH BLOCKCHAIN AND AI <br/>TECHNOLOGY

              </Typography>
              <div style={{ maxWidth:'100vh', marginTop:30,marginBottom:30 }}>
              <Typography variant='p' style={{ color:'white',lineHeight:2 }}>
              We focus on the future to improve the present. By developing our own technology based on Blockchain and AI, we are aiming to empower companies from different facets of the corporate world by providing personalized, accessible, effective, and practical solutions for them. We strive to eliminate  the necessary presence of the midtdlemen in your business and provide you with an opportunity to pave the road for your business the way you see fit.
              </Typography>
              </div>
              <Link passHref href='/contact-us'>
                <Button  color='#020283'>Let's Talk</Button>
              </Link>

              
               
            </div>
          </div>
        
        <div className='columns mt-6 mb-6'>
         
          <div className='column is-half is-offset-2'>
          <Typography variant='h4' component='div' style={{ fontWeight:'400', fontFamily:'Nunito' |  'sans-serif' }}>
            <span style={{ minWidth:4, minHeight:34, backgroundColor:'#FED576' }}></span>Special Service That We Provide <br/>
            to You
              </Typography>
          </div>
          <div className='column is-half is-offset-1 mt-4'>
            <Link passHref href='/service'>

              <Button backgroundColor='#020283' color='white'>See More</Button>
            </Link>
          </div>

        </div>



        {/* Carousel for the products */}
        <div className='columns'>
        {servicesData.map(item =>
           <div class={`column ${classes.mainFeatureBox}`} >    
            <Card className={classes.card}>
              <CardActionArea>
                <img className={classes.cardImage} src={item.image} />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          
          )}
          </div>


           {/* Upcoming projects */}

           <div className={`has-text-centered mt-6 ${classes.bottomContainer}`} style={{ 
             backgroundColor: '#F9F9FC' ,
             display: 'flex',
             flexDirection: 'column',
             padding: 50,
             paddingTop:90}}>
             <Typography variant='h4' component="div">
               Upcoming Projects that We <br/>
              are Making
             </Typography>

             <div className='mt-6 is-offset' style={{ 
               padding:30,
               maxWidth: 964,
               alignSelf:'center',
               backgroundColor:'white' }}>
               <div className='columns'>
                 <img className='column' src='/logoBig.png' style={{ height:100, maxWidth:400}}/>
                 <Typography variant='h3' className='column mt-8'>Fair Ride</Typography>

               </div>
               <Typography>
               Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
               </Typography>

             </div>
             <Link passHref href='/our-products'>
               <Button className='mt-4' style={{ alignSelf:'center' }} backgroundColor='#020283' color='white'>See More</Button>
             </Link>



             <div className=' has-text-centered ourcompany columns' 
          style={{ 
            alignSelf:'center',
            justifyContent:'center',
            padding:80 ,
            zIndex:999,
            marginTop:40,
            color: 'white',
            maxWidth: 1100,
            minHeight: 220,
            marginBottom:-100,
            background: '#020283', 
            display:'flex', 
            flex:1, 
            backgroundImage: " url('/Polygon.png')",  
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
            }}>
              <div className='column is-half is-offset-2'>
              <Typography variant='h2' component='h2' style={{ color:'white' }}>
              Have an idea in mind? 
Get in touch with us and let's begin working on it!
              </Typography>
              </div>
              <div className='column is-half is-offset-1 mt-4'>
              <Link passHref href='/contact-us'>

                <Button  color='#020283'>See More</Button>
              </Link>
                </div>            
          </div>



           </div>


           


        
      </main>

      
    </div>
  )
}
