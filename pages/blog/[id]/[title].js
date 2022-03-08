import React from 'react'
import HeaderMedium from '../../../components/HeaderMedium'
import Head from 'next/head'
import { useRouter } from 'next/router'

const BlogDetails = () => {
  const {query } =  useRouter();
  const { id, title } = query;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name={title} content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeaderMedium title={title} subTitle={`Home > Blog > ${title}`}/>
        <div className='container'>
          <section class="articles">
            <div class="column is-8 is-offset-2">
              <div class="card article">
                <div class="card-content">
                  <div class="media">
                    <div class="media-content has-text-centered">
                      <p class="title article-title"> {title} </p>
                      <div class="tags has-addons level-item">
                        <span class="tag is-rounded is-info"> John Doe </span>
                        <span class="tag is-rounded">11 June 2021</span>
                        {/* Moment Date */}
                        {/* <span class="tag is-rounded">{moment(published).format('ll')}</span> */}

                        
                      </div>
                      
                    </div>
                    
                  </div>
                  <div  class="content article-body">
                    <figure className="image is-16by9">
                      <img src='/deleteLater.png' alt=""/>
                      
                    </figure>
                    {/* <div dangerouslySetInnerHTML={{__html: content}} /> */}
                    <div>
                        Some details
                    </div>

                    
                  </div>
                </div>

              </div>
              
            
            </div>   

          </section>
        </div>
    </main>
    </div>
   
  )
}

export default BlogDetails