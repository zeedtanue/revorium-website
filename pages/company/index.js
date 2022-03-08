import { Card, Typography } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Home.module.css'
import useStyles from '../../styles/OurCompany.Styles'
export default function Company() {
  const classes = useStyles()
  const [goals, setGoals] = useState([
    {title: 'Nature of Grow', desc: 'To nurture and grow a team of specialized professionals accustomed to working with future-based software (such as blockchain technology and artificial intelligence) in order to build owned products and platforms'},
    {title: 'Modern Technology' , desc: 'To allow individual customers, corporate clients, and government institutions to become acquainted with modern technology and put it to good use for the betterment of society and its aspects' },
    {title: 'Businesses & entrepreneurs', desc: 'To provide secure, stable, and self-sufficient solutions in software development meant to give a headstart to new businesses and entrepreneurs around the world, helping them to develop quicker and more effectively'},

  ])
  return (
    <div>
      <Head>
        <title>Revorium - Company </title>
        <meta name="Company" content="Company description Revorium" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
              <p className='title' style={{ color:'white', alignSelf:'center' }}>Our Mission</p>

              <p className='subtitle' style={{ color:'white', alignSelf:'center' }}>
                Home &gt; Mission 
               </p>
               
            </div>
          </div>
      <div className={classes.container}>
      <h2 className='mb-6'>
        About Us

      </h2>
      <div className='columns'>
        <div className='column'>
          <div className={classes.row}>
            <img className={classes.image} src='/star-vector.png'/>
            <div>
              <h5> Our Vision</h5>
              <div className={classes.paragraphWidth}>

                <p>Building an upright world with blockchain technology.
The constant evolution of our society and innovative implementation of tools we create and use in our daily lives proves a point – the world is changing more rapidly with each day, and we need to keep up the pace</p>
              </div>
            </div>

          </div>
        </div>
        <div className='column'>

        <div className={classes.row}>
            <img className={classes.image} src='/star-vector.png'/>
            <div>
              <h5> Our Mission</h5>
              <div className={classes.paragraphWidth}>
                <p> Revorium is a future-focused information technology company that concentrates on progressive trends of modern-day technology and aims to provide services related to blockchain and artificial intelligence industries by implementing personalized solutions that are accessible, effective, and practical for everyone to use.</p>
              </div>
            </div>
            </div>


        </div>


      </div>
      
      
      </div>


        {/* <div className={`has-text-centered ${classes.topContainer}`}>
          <h1 className='title'>
          Our Mission
          <p class="title">
            Our Mission
            
          </p>

          </h1>
          <h3 className={classes.text}>
          </h3>

          </div> */}

        
        <div className={`has-text-centered ${classes.valuesContainer}`}> 
          <h2 className='mb-8'>
            Values

          </h2>
          {/* <p>
          The core values of Revorium act as a foundattion of our company, and are directly reflected in the services that we’re providing to our clients and users. By committing to uphold these values, we strive to deliver you products as if we were developing them for ourselves, and as such, our main principles are based on:
          </p> */}
          <Typography className={classes.valuePara}>The core values of Revorium act as a foundattion of our company, and are directly reflected in the services that we’re providing to our clients and users. By committing to uphold these values, we strive to deliver you products as if we were developing them for ourselves, and as such, our main principles are based on:</Typography>
        <div style={{ paddingBottom: 80}} >
          <div className={`columns ${classes.valueContainerRow}`}>
            <div className={`column ${classes.valueBox}`}>
              <img className={classes.valueImg} src='/light-vector.png' />
              <p>Aspiration & <br/> Inovation</p>
             </div>

             <div className={`column ${classes.valueBox}`}>

            <img className={classes.valueImg} src='/dedication-vector.png' />
            <p>Dedication</p>
            </div>

            <div className={`column ${classes.valueBox}`}>

            <img className={classes.valueImg} src='/reliability-vector.png' />
            <p>Reliability </p>
            </div>

          </div>
          
          <div className={`columns ${classes.valueContainerRow}`}>
          <div className={`column ${classes.valueBox}`}>
            <img className={classes.valueImg} src='/security-vector.png' />
            <p>Safety & <br/> Security</p>
            </div>

            <div className={`column ${classes.valueBox}`}>
            <img className={classes.valueImg} src='/responsibility.png' />
            <p>Responsibility</p>
            </div>

            <div className={`column ${classes.valueBox}`}>
            <img className={classes.valueImg} src='/unity-vector.png' />
            <p>Unity</p>
            </div>

          </div>
        </div>
        </div>


        <div className='has-text-centered mt-6'>
          <h2>Goals of <br/> Revorium Are:</h2>
          <div className={`columns ${classes.goalCardContainer}`}>
            <div className='column'></div>
            {goals.map((item)=>
            <Card className={`column ${classes.card}`}>
              <h4>{item.title}</h4>
              <p>
                {item.desc}
              </p>
            </Card>
            
            )}
            <div className='column'></div>

            

          </div>
        </div>

      </main>

      
    </div>
  )
}
