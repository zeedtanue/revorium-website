import React,{useEffect,useState} from 'react'
import Link from 'next/link'

const NavBar = () => {
    
    const [isActive, setisActive] = useState(false);

    return (
        <div style={{ minHeight:70, display:'flex' }}>  
            <nav className="container navbar is-tranparent is-bold">
                <div className="container">
                    <Link passHref href={"/"}>
                <div className="navbar-brand">
                    
                    <a className="navbar-item is-size-2 has-text-weight-bold" href="../">
                    <img style={{ minHeight:50,  maxWidth:200 }} src="/logoBig.png" alt="Bulma: a modern CSS framework based on Flexbox" width="268" height="100"/>

                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                      <a onClick={() => {
                        setisActive(!isActive);
                        }}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </a>
                        
                    </div>
                </div>
                </Link>
                <div id="navbarExampleTransparentExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                  <div className="navbar-end">
                    <Link passHref href={'/'}>
                        <a style={{ fontSize:14, font: 'Nunito' }} className='navbar-item'>
                            HOME
                        </a>
                    </Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <Link passHref href={'/service'}>
                    
                        <a  style={{ fontSize:14, font: 'Nunito' }} className="navbar-link">
                          SERVICE
                        </a>
                        </Link>
                      <div className="navbar-dropdown">
                      <Link passHref href={'/service'}>
                          <a style={{ fontSize:14, font: 'Nunito' }} className="navbar-item">
                            Software Development
                          </a>
                        </Link>
                        </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <Link passHref href={'/our-products'}>
                        <a style={{ fontSize:14, font: 'Nunito' }} className="navbar-link" href="https://bulma.io/documentation/overview/start/">
                          OUR PRODUCTS
                        </a>
                      </Link>
                      
                      <div className="navbar-dropdown">
                        <Link passHref href={'/our-products'}>
                          <a style={{ fontSize:14, font: 'Nunito' }} className="navbar-item">
                            Fair Ride
                          </a>
                        </Link>
                        
          
                        </div>
                    </div>
                    <Link passHref href={'/blog'}>
                        <a style={{ fontSize:14, font: 'Nunito' }} className='navbar-item'>
                            BLOG
                        </a>
                    </Link>
                    
                    <Link passHref href={'/company'}>
                        <a style={{ fontSize:14, font: 'Nunito' }}  className='navbar-item'>
                            COMPANY
                        </a>
                    </Link><Link passHref href={'/contact-us'}>
                        <a style={{ fontSize:14, font: 'Nunito' }} className='navbar-item'>
                            CONTACT US
                        </a>
                    </Link>
                    

                    
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
