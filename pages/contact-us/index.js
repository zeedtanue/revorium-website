import Head from 'next/head'
import Image from 'next/image'
import { SubBanner } from '../../components/SubBanner'
import styles from '../../styles/Home.module.css'
import contactstyles from  '../../styles/ContactUs.module.css'
import HeaderMedium from '../../components/HeaderMedium'
export default function ContactUs() {
  
  const contactUsSubmit = async event => {
    event.preventDefault()
    
    const res = await fetch('https://admin.revorium.com/api/contact/add', {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        mobile_number: event.target.mobile_number.value,
        topic: event.target.topic.value,
        message: event.target.message.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json();
    if(result.success)
    {
      
      alert("We have successfully recevied your enquiry. we will contact to you soon !!");
      event.target.reset();
    }
    else 
    {
      alert("Sorry some problem occurs !!");
    }
    // result.user => 'Ada Lovelace'
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Revorium</title>
        <meta name="Contact Us" content="Leave us a message for your project to come true" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <HeaderMedium title='Contact Us' subTitle='Home > contact-us'/>
        <h1 className={styles.title}>
          We Are Ready To Help Grow Your Idea
        </h1>
        <h3 className={contactstyles.subheading}>
          Send us a message and will respond <br/> as quickly as possible.
        </h3>
        <div className='container'>
          <section class="articles">
            <div class="column is-8 is-offset-2">
              <div class="">
                <div class="">

                
          <form onSubmit={contactUsSubmit}>
              <div className={contactstyles.row}>
                <div className={contactstyles.colmd6}>
                  <label className={contactstyles.label}>Name</label><br/>
                  <input type="text" id="name" name="name" placeholder='Name' className={contactstyles.formcontrol} required />
                </div>
                <div className={contactstyles.colmd6}>
                  <label className={contactstyles.label}>Email</label><br/>
                  <input type="email" name="email" placeholder='Email' className={contactstyles.formcontrol} required/>
                </div>
              </div>

              <div className={[contactstyles.row]}>
                <div className={contactstyles.colmd12}>
                  <label className={contactstyles.label}>Mobile Number</label><br/>
                  <input type="text" name="mobile_number" placeholder='Mobile Number' className={contactstyles.formcontrol}  required/>
                </div>
              </div>

              <div className={[contactstyles.row]}>
                <div className={contactstyles.colmd12}>
                  <label className={contactstyles.label}>Topic</label><br/>
                  <select className={contactstyles.formcontrol}  name="topic" required>
                      <option value="0">Cryptocurrency</option>
                      <option value="1">Payment Gateway</option>
                      <option value="2">Blockchain</option>
                      <option value="3">Artificial Intelligence</option>
                      <option value="4">Other</option>
                  </select>
                </div>
              </div>

              <div className={[contactstyles.row]}>
                <div className={contactstyles.colmd12}>
                  <label className={contactstyles.label}>Message</label><br/>
                  <textarea className={contactstyles.textareaformcontrol}  name="message" rows="10" required></textarea>
                </div>
              </div>


              <div className={[contactstyles.row]}>
                <div className={contactstyles.btncolmd12}>
                    <button type="submit" className={contactstyles.btnsubmit}>Submit</button>
                </div>
              </div>
          </form>
          </div>
                </div>
                </div>
                </section>
        </div>
        
      </body>

      
    </div>
  )
}
