import Link from 'next/link'
import React from 'react'
import Styles from '../styles/Footer.module.css'
function Footer() {
    return (
        <div className={Styles.container}>
            <footer className={`footer`, Styles.footer} >
            <div className="container">
                <div className="columns">
                    <div className="column is-3 is-offset">
                        {/* <p><strong>Revorium</strong></p> */}
                        <p style={{ fontSize: 22, fontWeight:'bold' }}> Revorium</p>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                    </div>
                    <div className="column is-2 is-offset-1">
                    <Link passHref href="/service">
                    <a style={{ fontSize: 22, fontWeight:'bold', paddingBottom:10 }} className={Styles.text} >Our Service</a>
                    </Link>
                      <Link passHref href="/service">
                        <a>Software Developmen</a>
                      </Link>
                      <Link passHref href="/our-products">
                        <a>Fair Ride</a>
                      </Link>
                        


                    </div>
                    <div className="column is-2 is-offset-1">
                      <Link passHref href="/company">
                        <a style={{ fontSize: 22, fontWeight:'bold', paddingBottom:10 }} className={Styles.text} >Our Company</a>
                      </Link>
                      <Link passHref href="/company">
                        <a>Info</a>
                      </Link>


                    </div>
                    <div className="column is-2 is-offset-1">
                    <p style={{ fontSize: 22, fontWeight:'bold' }}>Address</p>
                        <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p> 
                        <p>(270) 555-0117</p>
                        <p>tanya.hill@example.com</p>


                    </div>
                </div>
                <div className='mgt-medium'>

                </div>
                <div className='mgt-medium'>

                </div>

                <div style={{ marginTop: 70 }}>
                  <div className="column is-5 is-offset">
                      <p>?? 2022 Revorium. A European IT company. All rights  served.</p>
                  </div>
                  <div className='column is-1'>
                      <span className="icon has-text-info">
                        <i className="fas fa-info-circle"></i>
                      </span>
                      <span className="icon has-text-success">
                        <i className="fas fa-check-square"></i>
                      </span>
                      <span className="icon has-text-warning">
                        <i className="fas fa-exclamation-triangle"></i>
                      </span>
                      <span className="icon has-text-danger">
                        <i className="fas fa-ban"></i>
                      </span>
                  </div>
                  
                </div>
                
            </div>
            <script src="../js/bulma.js"></script>
        </footer>
        </div>
    )
}

export default Footer
