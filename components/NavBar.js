import React,{useEffect,useState} from 'react'
import Link from 'next/link'


const NavBar = () => {
    
    const [isActive, setisActive] = useState(false);

    return (
        <div>  
            <nav className="navbar is-tranparent is-bold">
                <div className="container">
                    <Link passHref href={"/"}>
                <div className="navbar-brand">
                    
                    <a className="navbar-item is-size-2 has-text-weight-bold" href="../">
                    <img src="/logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="268" height="100"/>

                    </a>
                    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
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
                        <a className='navbar-item'>
                            HOME
                        </a>
                    </Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <Link passHref href={'/service'}>
                    
                        <a className="navbar-link">
                          SERVICE
                        </a>
                      </Link>
                      <div className="navbar-dropdown">
                      <Link passHref href={'/service/Service 1'}>
                          <a className="navbar-item">
                            Service 1
                          </a>
                        </Link>
                        <Link passHref href={'/service/Service 2'}>
                          <a className="navbar-item">
                            Service 2
                          </a>
                        </Link><Link passHref href={'/service/service 2'}>
                          <a className="navbar-item">
                            Service 3
                          </a>
                        </Link>
          
                        </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <Link passHref href={'/our-products'}>
                        <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
                          OUR PRODUCTS
                        </a>
                      </Link>
                      
                      <div className="navbar-dropdown">
                        <Link passHref href={'/our-products/Product 1'}>
                          <a className="navbar-item">
                            Product 1
                          </a>
                        </Link>
                        <Link passHref href={'/our-products/Product 2'}>
                          <a className="navbar-item">
                            Product 2
                          </a>
                        </Link><Link passHref href={'/our-products/Product 3'}>
                          <a className="navbar-item">
                            Product 1
                          </a>
                        </Link>
          
                        </div>
                    </div>
                    <Link passHref href={'/blog'}>
                        <a className='navbar-item'>
                            BLOG
                        </a>
                    </Link>
                    
                    <Link passHref href={'/company'}>
                        <a className='navbar-item'>
                            COMPANY
                        </a>
                    </Link><Link passHref href={'/contact-us'}>
                        <a className='navbar-item'>
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
