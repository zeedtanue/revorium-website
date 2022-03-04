import { Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import useStyles from '../../styles/Blog.Styles'
import { useEffect, useState } from 'react'
import { CardActionArea } from '@mui/material'
import axios from 'axios'

export default function Blog() {
  const classes = useStyles()
  const category= ['Main', 'Crypto', 'Blockchain', 'AI', 'Finances', 'Innovations']
  const [activeCategory, setActiveCategory] = useState('Main')

  const [articles, setArticles] = useState([
    {author: 'Jonny Liam',date: '12 Februari 2022', title: '5 Facts to Know About Blockchain & Cryptocurrency', desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'},
    {author: 'Jonny Liam',date: '12 Februari 2022', title: '5 Facts to Know About Blockchain & Cryptocurrency', desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'},
    {author: 'Jonny Liam',date: '12 Februari 2022', title: '5 Facts to Know About Blockchain & Cryptocurrency', desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'},

  ])
  const getCategory = async () => {
    const { data } = await axios({
      url: 'https://admin.revorium.com/api/category/getallcategory',
      method: 'GET'
    })
    console.log('hey')
    alert('hey')
  }
  useEffect(() => {
    getCategory
  }, [])
  
  return (
    <div>
      <Head>
        <title>Revorium</title>
        <meta name="description" content="Generated by create next app" />
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
              <p className='title' style={{ color:'white', alignSelf:'center' }}>Blog</p>

              <p className='subtitle' style={{ color:'white', alignSelf:'center' }}>
                Home > Blog 
               </p>
               
            </div>
          </div>
          <div className={styles.title}> 
            <Typography className='title mt-6 mb-4' variant='h4' component='div'>
            The Revorium Blog

            </Typography>
          </div>


          <div className={classes.row}>{category.map(item =>
            <a 
              onClick={()=> setActiveCategory(item)}
              className={ activeCategory==item? classes.bold : classes.normal}> <Typography className={classes.category} variant='span'>{item}</Typography> </a>
            )}</div>


            <div className={`columns ${classes.blogContainer}`}>
              {articles.map(item=> 
                <Card className={`column ${classes.card}`}>
                  <CardActionArea>
                    <img src='/deleteLater.png'/>
                    <CardContent>
                      <div style={{ marginTop: 10, marginBottom:10 }}>
                        <span class="tag is-rounded" style={{ backgroundColor:'#4F75C1', color: 'white', fontWeight:'bold', }}>{activeCategory}</span><span style={{ paddingLeft: 10 }}>{item.date}</span>
                      </div>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.desc}
                      </Typography>

                      <Typography variant='h6' component="div">
                        {item.author}
                      </Typography>
                      <Typography variant='p'>
                        Blockchain Expert
                      </Typography>
                    </CardContent>
                  </CardActionArea>
        
                </Card>
                )}
            
            </div>

            <div className={classes.trendingBlogsContainer} >
              <div className={` ${styles.title}`}> 
                <Typography className='title mt-6 mb-4' variant='h4' component='div'>
                Trending Articles

                </Typography>
              </div>
                {articles.map(item =>
                <div className={`columns`}>
                  <img className={`column is-one-third`} src='/deleteLater2.png'/>
                  <div className={`column is-two-third`}>
                    <Typography className='title' variant='h6' component='div'>
                      {item.title}

                    </Typography>
                    <span className={classes.bold}>{item.author}</span><span style={{ paddingLeft: 10 }}>{item.date}</span>
                    <Typography className=' mt-2' variant='p' component='div'>
                      {item.desc}

                    </Typography>

                    <a className={`mt-6 ` } style={{ fontWeight:'bold', marginTop:50 }}>READ MORE</a>
                  </div>

                </div>
                )}


            </div>

        
      </main>

      
    </div>
  )
}
