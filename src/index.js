import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Doctor } from './doctorsec';
import { Login } from './Login';
import { Main as MainBook } from './Booking';
import { Contact } from './contact';
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'
import {BrowserRouter , Route , Routes, Link} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
function All(){
  return(
   <>
    <Home/>
    <Mobile/>
    <Doctors/>
    <Mobileimg/>
    <DownMobileimg/>
    <LastDoctor/>
    <GetinTouch/>
   </>
  )
}


function MyProfile(){
  return(
    <h1>hai</h1>
  )
}
function MyAppoi(){
  return(
    <h1>Appoiments</h1>
  )
}
function Home(){
  const Navi = useNavigate()
  return(
    <div className='container'>
      <h1>Book An  Appoiment  </h1>
      <p>Make a extensive of trusted doctors heade-free</p>
      <button onClick={()=>{
        Navi('/Alldoctors')
      }}>Book Appoiment</button>
      <div className='container-img'>
        <img id='doctor' src='/assects/doctorap.jpg' alt='do'/>
      </div>
    </div>
  )
}
function Mobile(){
  return(
    <div className='mobile'>
       <div className='mobilepic'>
          <img src='/assects/mobile.png' alt='mob'/>
       </div>
       <div className='parag'>
        <h1>Get Prescription Today</h1>
        <p>Are you ready to improve the quality of your patient relationships? Request a demo and learn more about how we can help you grow your healthcare practice today.</p>
        <button onClick={()=>{
          window.open('https://web.whatsapp.com/9347663579')
        }}>Request Demo</button>
       </div>
    </div>
  )
}
export function Doctors(){
  const Doctor =  [
    {id:1, image:"/assects/doctor1.jpg", Mode:"Available", name:"Dr.Sawithika",  Experience:1.5, Title:"Physician", Appoinment:"$2"},
    {id:2, image:"/assects/doctor2.jpg", Mode:"Available", name:"Dr.Antoni Shkraba ",  Experience:2.5, Title:"Cardiologist"       , Appoinment:"$2"},
    {id:3, image:"/assects/doctor3.avif", Mode:"Available", name:"Dr.Vinod Raina",  Experience:5, Title:"Medical Oncologist"      , Appoinment:"$2"},
    {id:4, image:"/assects/doctor4.jpg", Mode:"Available", name:" Dr.Randhir Sud ",  Experience:2, Title:"Gastroenterologist"     , Appoinment:"$2"},
    {id:5, image:"/assects/doctor5.avif", Mode:"Available", name:" Dr.Sandeep Vaishya ",  Experience:7, Title:"Neurologist"       , Appoinment:"$2"},
    {id:6, image:"/assects/doctor6.avif", Mode:"Available", name:"Dr.Vikram Kalra",  Experience:3, Title:"Urologist"              , Appoinment:"$2"},
    {id:7, image:"/assects/doctor7.jpg", Mode:"Available", name:"Dr.Dhanasekaran D ",  Experience:2, Title:"Nephrologist"         , Appoinment:"$2"},
    {id:8, image:"/assects/doctor8.jpg", Mode:"Available", name:"Dr.Sandeep ",  Experience:1.5, Title:"Ophthalmologist"           , Appoinment:"$2"},
    {id:9, image:"/assects/doctor9.webp", Mode:"Available", name:" Dr.Darilin Dkhar ",  Experience:3, Title:"Psychiatrist"        , Appoinment:"$2"},
{id:10, image:"/assects/doctor10.webp", Mode:"Available", name:"Dr.Deepak Ivan Tauro ",  Experience:3.5, Title:"Anesthesiologist" , Appoinment:"$2"},
    {id:11, image:"/assects/doctor11.jpg", Mode:"Available", name:"Dr.Dominic",  Experience:4, Title:"Geriatrician"               , Appoinment:"$2" },
    {id:12, image:"/assects/doctor12.webp", Mode:"Available", name:"Dr.Shkraba ",  Experience:7, Title:"Colon and Rectal Surgeons", Appoinment:"$2" },

  ]
  const Navi = useNavigate()
  return(
        <div  className='Alldoct'>
          <h1 id='need'>Need a Doctor</h1>
          {
          Doctor.map(( mydoctor, index )=>(
              <div key={index} className='Alldoct1'>
               <img onClick={()=>{
                Navi(`/Doctor-Appoinment/${mydoctor.id}`)
               }} src={mydoctor.image} alt='do'/>
               <p>{mydoctor.Mode}</p>
               <h1>{mydoctor.Title}</h1>
               <h2>{mydoctor.name}</h2>
               <h3>Experience:{mydoctor.Experience}</h3>
                 </div>
          ))
        }
        <button onClick={()=>{
             Navi('/Alldoctors')
        }}>Show More</button>
        </div>
  )
}
 function Mobileimg(){
  return(
    <div className='precption'>
      <div className='precption1'>
        <h1>Do You Spend Hours  Manually Writing <br/> Prescriptions?</h1>
        <p>Do you spend hours manually writing prescriptions? Simplify your workflow and save valuable time. Our app lets you book appointments instantly and manage prescriptions with just a few clicks. No more waiting—get started and focus on what truly matters: your patients.
          Tired of manual prescriptions? Book appointments in seconds and streamline your workflow. Stop waiting—start saving time today
        </p>
      </div>
      <div className='mob-img'>
        <img src='/assects/phonedown.png' alt='ph'/>
      </div>
    </div>
  )
 }
function DownMobileimg(){
  const [showMore , show] = useState(false)
  const [showMore1 , show1] = useState(false)
  const [showMore2 , show2] = useState(false)
  const [showMore3 , show3] = useState(false)
  return(
    <div className='window'>
      <div className='window1'>
        <h1>Made For Doctors, With Doctors.
These Are The Features That Make Prescrip Popular</h1>
      </div>
      { 
        
        
  <div className='responses'>
            <h1>Quick Responses</h1>
            <p>Make a quick responses if you dont know</p>
            <button id='quick' onClick={()=>{
              show(!showMore)
            }}>{showMore ? show :'Learn More'}</button>
{
  showMore&&(
            <p id= "quick1">Prescrip is easily accessible on your Android or (iOS) smartphone, tablet and even on laptop. You can connect easily to any popular printer, quickly create your personalized prescriptions and print out professional looking, compliant prescriptions instantly. You can even share the e-copy of the same prescription via SMS, WhatsApp or email</p>
)}

</div> 

     

}
     { 
<div className='responses1'>
            <h1>Favourite Prescriptions</h1>
            <p>You can spend more time making your diagnosis and less time writing the similar prescriptions</p>
            <button id='quick1' onClick={()=>{
              show1(!showMore1)
            }}>{showMore1 ? show1 :'Learn More'}</button>
{
  showMore1&&(
            <p id= "quick2">Based on our research, we have found that most doctors tend to often prescribe a certain type of medicines for many ailments.Knowing this we have built Prescrip to allow you to quickly create prescriptions with commonly prescribed drugs, similar complaints & diagnosis and save them as favourites.</p>
)}

</div> 
}

     { 
<div className='responses2'>
            <h1>Track Treatment History</h1>
            <p>Save hours by getting history of each patient’s medical records right from the app</p>
            <button id='quick2' onClick={()=>{
              show2(!showMore2)
            }}>{showMore2 ? show2 :'Learn More'}</button>
{
  showMore2&&(
            <p id= "quick3">With increasing number of patients it can become challenging to keep track of all their unique needs and history. It is important that you have complete information about each patient, no matter how long it has been since their last visit.</p>
)}

</div> 
}

     { 
<div className='responses3'>
            <h1>Easy Patient Management</h1>
            <p>Easily access all your patient data anytime anywhere.</p>
            <button id='quick3' onClick={()=>{
              show3(!showMore3)
            }}>{showMore3 ? show3 :'Learn More'}</button>
{
  showMore3&&(
            <p id= "quick4">The success of any healthcare practice lies in the effective and efficient management of its patients. To ensure that you are able to provide the best care and advice, Prescrip tracks patient records and helps you build stronger relationships with each of them.</p>
)}

</div> 
}
    </div>
  )
}

function LastDoctor(){
  const Navi = useNavigate()
  return(
    <div className='down'>
      <div className='down1'>
          <img src='/assects/lastDoctor.png' alt='ld'/>
      </div>
      <div className='down2'>
        <h1>Book Your Appoinment Now</h1>
      <button onClick={()=>Navi('/login')}>CreateAccount </button>
       
      </div>
    </div>
        
    
  
  )
  
}
function GetinTouch(){
  return(
    <div className='getin'>
           <div className='getin1'>
                <ul>
          <li>Company</li>
          <li>Home</li>
          <li>About</li>
          <li>Privacy</li>
         </ul>
           </div>
           <div className='getin2'>
            <h1>GetInTouch</h1>
            <p>+91-800-122-44-666</p>
            <p1>doctor@gmail.com</p1>
           </div>
           <div className='copy'>
            <p>Copyright 2025 @Doctorcare - All Right Reserved.</p>
           </div>
    </div>
  )
}
function Navigator(){
    const yourlist =  [
    {id:1, image:"/assects/doctor1.jpg", Mode:"Available", name:"Dr.Sawithika",  Experience:1.5, Title:"Physician", Appoinment:"$2"},
    {id:2, image:"/assects/doctor2.jpg", Mode:"Available", name:"Dr.Antoni Shkraba ",  Experience:2.5, Title:"Dermatologist"       , Appoinment:"$2"},
    {id:3, image:"/assects/doctor3.avif", Mode:"Available", name:"Dr.Vinod Raina",  Experience:5, Title:"Neurologist"      , Appoinment:"$2"},
    {id:4, image:"/assects/doctor4.jpg", Mode:"Available", name:" Dr.Randhir Sud ",  Experience:2, Title:"Gastroenterologist"     , Appoinment:"$2"},
    {id:5, image:"/assects/doctor5.avif", Mode:"Available", name:" Dr.Sandeep Vaishya ",  Experience:7, Title:"Neurologist"       , Appoinment:"$2"},
    {id:6, image:"/assects/doctor6.avif", Mode:"Available", name:"Dr.Vikram Kalra",  Experience:3, Title:"Urologist"              , Appoinment:"$2"},
    {id:7, image:"/assects/doctor7.jpg", Mode:"Available", name:"Dr.Dhanasekaran D ",  Experience:2, Title:"Neurologist"         , Appoinment:"$2"},
    {id:8, image:"/assects/doctor8.jpg", Mode:"Available", name:"Dr.Sandeep ",  Experience:1.5, Title:"Dermatologist"           , Appoinment:"$2"},
    {id:9, image:"/assects/doctor9.webp", Mode:"Available", name:" Dr.Darilin Dkhar ",  Experience:3, Title:"Psychiatrist"        , Appoinment:"$2"},
{id:10, image:"/assects/doctor10.webp", Mode:"Available", name:"Dr.Deepak Ivan Tauro ",  Experience:3.5, Title:"Physician" , Appoinment:"$2"},
    {id:11, image:"/assects/doctor11.jpg", Mode:"Available", name:"Dr.Dominic",  Experience:4, Title:"Dermatologist"               , Appoinment:"$2" },
    {id:12, image:"/assects/doctor12.webp", Mode:"Available", name:"Dr.Shkraba ",  Experience:7, Title:"Gastroenterologis", Appoinment:"$2" },

  ]
  return(
    <BrowserRouter>
    <Linked/>
    <Routes>
      
      <Route  path="/"  element= {<All/>} ></Route>
      <Route  path="/My-profile"  element= {<MyProfile/>} ></Route>
      <Route  path="/My-login"  element= {<Login/>} ></Route>
      <Route  path="/Doctor-Appoinment"  element= {<Doctors/>} ></Route>
      <Route  path="/Doctor-Appoinment/:id"  element= {<MainBook/>} ></Route>
      <Route  path="/My-appoinments"  element= {<MyAppoi/>} ></Route>
      <Route  path="/Alldoctors"  element= {<Doctor doctors={yourlist} />} ></Route>
      <Route  path="/Alldoctors/:specialist"  element= {<Doctor doctors={yourlist} />} ></Route>
      <Route  path="/About"  element= {<App/>} ></Route>
      <Route  path="/contact"  element= {<Contact/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}
function Linked(){
  const [token  , SetToken] = useState(true)
  const Navi = useNavigate()
  return(
   <ul className='nav'>
    <li><h1 id='navi-Text'>DoctorCare</h1> </li>
    <li><Link to="/">Home</Link> </li>
     <li><Link to="/Alldoctors">Doctors</Link> </li>
    <li><Link to="/about">About</Link> </li>
    <li><Link to="/contact">Contact</Link> </li>
    <div className='profile'>
      {
        token 
      ? (<><img src='/assects/profile.avif' alt='p'/>
       <div className='profile1'>
        <p onClick={()=>{
            Navi('/My-profile')
        }} >My profile</p>
        <p onClick={()=>{
          Navi('/My-appoinments')
        }} >Appoiments</p>
        <p onClick={()=>{
          SetToken(false)
        }} >Logout</p>
       </div>
       </>
      )
       :(<button onClick={()=>Navi('/My-login')}>CreateAccount </button>
    )
}
    </div>
   </ul>
  )
}

root.render(
  <Navigator/>
);


