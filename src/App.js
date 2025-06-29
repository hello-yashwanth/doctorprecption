
import './index.css'

function App() {
  return (
<>

    <div className='top-About'>
      <h1>About Us</h1>
      <div className='top-About1'>
        <img src={'/assects/aboutup.png'} alt='t'/>
      </div>
      <div className='top-par'>
        <p>Welcome to DoctorCare, your trusted partner in health and wellness. At DoctorCare, we believe that quality healthcare should be accessible, compassionate, and patient-focused. Our mission is to connect you with experienced, qualified doctors who prioritize your well-being at every step. From routine check-ups to specialized treatments, DoctorCare makes it easy to find and book appointments with the right healthcare professional for your needs. We are committed to providing a seamless, secure, and reliable experience, empowering you to take control of your health with confidence. Because at DoctorCare, your health is our highest priority.</p>
      </div>
    </div>

    <div className='choose'>
        <h1>Why Choose Us</h1>
        <div className='choose1'>
           <img src='/assects/aboutimg1.png' alt='p' />
        </div>
        <div className='choose-par'>
          <h2>Get your prescription online <br/> No doctor visits needed!</h2>
          <p>Take control of your health with ease. Whether managing chronic conditions or treating sudden symptoms, our board-certified doctors are ready to assess, diagnose, and prescribe medication from the comfort of your home. No pre-booking, insurance, or delays.<br/>

✔ 24/7 access to online doctors<br/>
✔ Fast prescriptions delivered in minutes<br/>
✔ Trusted by 500,000+ members</p>
        </div>
    </div>
</>
  )
}

export default App;
