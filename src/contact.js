import './index.css'
export function Contact(){
    return(
        <>
        <div className='contact'>
            <h1>Contact Us</h1>
            <div className='contact1'>
                <img src={'/assects/aboutimg.png'} alt='po' />
            </div>
            <div className='contact-par'>
                <h2>Our Office</h2>
                <p>Andhrapradesh , Kakinada</p>
                <p>Tele-28828888</p>
                <p>Email-doctorcare@gmail.com</p>
                <p>Learn more about our teams</p>
            </div>
        </div>
  <div className="getin-left">
    <ul>
      <li>Company</li>
      <li>Home</li>
      <li>About</li>
      <li>Privacy</li>
    </ul>
  </div>
  <div className="getin-right">
    <div className="contact">
      <h1>Get In Touch</h1>
      <p>+91-800-122-44-666</p>
      <p>doctor@gmail.com</p>
    </div>
  </div>


        </>
    )
}