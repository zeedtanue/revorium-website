import React from 'react'

const HeaderMedium = ({ title, subTitle }) => {
  return (
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
              <p className='title' style={{ color:'white', alignSelf:'center' }}>{title}</p>

              <p className='subtitle' style={{ color:'white', alignSelf:'center' }}>
                {subTitle}
               </p>
               
            </div>
    </div>
  )
}

export default HeaderMedium