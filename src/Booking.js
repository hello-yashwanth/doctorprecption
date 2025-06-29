import { useNavigate, useParams } from "react-router-dom"
import './App.css'
import { Doctors } from "."
import axios from "axios"
import { useEffect, useState } from "react"
export function Main(){
  return(
<>
    <Default/>
    <Related/>
</>
  )
}
export function Default(){
  const {id} = useParams()
  const[selectedTime, setSelectedTime] = useState('0')
  const [slotSlots , setSlot] = useState([])
  const [docInfo , setDocInfo ] = useState(null)
  const days = ['Sun' , 'Mon' , 'Tue' , 'Wed','Thu' ,'Fri','Sat' ];
    const DoctorList = [
    {id:1, image:"/assects/doctor1.jpg", Mode:"Available", name:"Dr.Sawithika",  Experience:1.5, Title:"Physician", Appoinment:"$2"},
    {id:2, image:"/assects/doctor2.jpg", Mode:"Available", name:"Dr.Antoni Shkraba ",  Experience:2.5, Title:"Cardiologist"       , Appoinment:"$2"},
    {id:3, image:"/assects/doctor3.avif", Mode:"Available", name:"Dr.Vinod Raina",  Experience:5, Title:"Medical Oncologist"      , Appoinment:"$2"},
    {id:4, image:"/assects/doctor4.jpg", Mode:"Available", name:" Dr.Randhir Sud ",  Experience:2, Title:"Gastroenterologist"     , Appoinment:"$2"},
    {id:5, image:"/assects/doctor5.avif", Mode:"Available", name:" Dr.Sandeep Vaishya ",  Experience:7, Title:"Neurologist"       , Appoinment:"$2"},
    {id:6, image:"/assects/doctor6.avif", Mode:"Available", name:"Dr.Vikram Kalra",  Experience:3, Title:"Urologist"              , Appoinment:"$2"},
    {id:7, image:"/assects/doctor7.jpg", Mode:"Available", name:"Dr.Dhanasekaran D ",  Experience:2, Title:"Neurologist"         , Appoinment:"$2"},
    {id:8, image:"/assects/doctor8.jpg", Mode:"Available", name:"Dr.Sandeep ",  Experience:1.5, Title:"Ophthalmologist"           , Appoinment:"$2"},
    {id:9, image:"/assects/doctor9.webp", Mode:"Available", name:" Dr.Darilin Dkhar ",  Experience:3, Title:"Neurologist"        , Appoinment:"$2"},
{id:10, image:"/assects/doctor10.webp", Mode:"Available", name:"Dr.Deepak Ivan Tauro ",  Experience:3.5, Title:"Anesthesiologist" , Appoinment:"$2"},
    {id:11, image:"/assects/doctor11.jpg", Mode:"Available", name:"Dr.Dominic",  Experience:4, Title:"Geriatrician"               , Appoinment:"$2" },
    {id:12, image:"/assects/doctor12.webp", Mode:"Available", name:"Dr.Shkraba ",  Experience:7, Title:"Neurologist", Appoinment:"$2" },

  ]
  useEffect(()=>{
    const found = DoctorList.find(doc=>doc.id === Number(id))
      setDocInfo(found || null)
    
  },[id]);
  const getAvailableTime =async  ()=>{
let allSlots = [];
    let todaySlots = [];
  let now = new Date();
  let endTime = new Date();
  endTime.setHours(21, 0, 0, 0);

  let startTime = new Date(now);
  if (startTime.getHours() < 10) {
    startTime.setHours(10, 0, 0, 0);
  } else {
    if (startTime.getMinutes() <= 30) {
      startTime.setMinutes(30);
    } else {
      startTime.setHours(startTime.getHours() + 1, 0, 0, 0);
    }
  }

  while (startTime < endTime) {
    let formatted = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    todaySlots.push({
      datetime: new Date(startTime),
      time: formatted,
      day: days[startTime.getDay()],
      date: startTime.toLocaleDateString()
    });
    startTime.setMinutes(startTime.getMinutes() + 30);
  }

  setSlot([todaySlots]);
  }
const handleBooking = async (date, time) => {
  if (!time) {
    alert('Please select a time slot');
    return;
  }
  try {
    await axios.post('http://localhost:5000/api/appointments', {
      doctorId: Number(id),
      time,
      date
    });
    alert('Appointment booked successfully!');
  } catch (error) {
    console.error(error);
    alert('login booking Success');
  }
};

useEffect(()=>{
  getAvailableTime()
},[setDocInfo])
  if(!docInfo) return <p>not found</p>

  const doctor = DoctorList.find((doc)=>doc.id === Number(id))
  if(!doctor) return <p className="not-found">Doctor not found</p>
 return(
    <div className="Details">
            <img src={doctor.image} alt="d"/>
            <h1>Name:{doctor.name}</h1>
            <h2>MBBS-{doctor.Title}</h2>
            <p>Hello I am good Doctor. I had Experience {doctor.Experience}. We prioritize open communication and patient education, empowering you to make informed decisions about your health. From preventive check-ups to advanced treatments, we’re committed to delivering high-quality, ethical, and patient-centered care you can trust. Because your well-being is our greatest purpose.</p>
            <p1>Experience:{doctor.Experience}</p1>
            <h3>{doctor.Appoiment}</h3>
         <div className="slots-section">
          <h2>Available Slots</h2>
          {
            slotSlots.map((day, ind)=>(
              <div key={ind} className="day-slots">
                <h4>{day[0]?.day} - {day[0]?.date}</h4>
                <div className="slots">
                 {
                  day.map((slot , sidx)=>(
                    <span onClick={()=>setSelectedTime(slot.time)} key={sidx} className="slot">{slot.time}</span>
                  ))
                 }
                </div>
                <button onClick={()=> handleBooking(day[0]?.date , selectedTime)
                }>Book Appoinment</button>
                </div>
            )

            )
          }
         </div>
    </div>
 )
}
function Related(){
  const Navi = useNavigate()
        const DoctorList1 = [
    {id:1, image:"/assects/doctor1.jpg", Mode:"Available", name:"Dr.Sawithika",  Experience:1.5, Title:"Physician", Appoinment:"$2"},
    {id:2, image:"/assects/doctor2.jpg", Mode:"Available", name:"Dr.Antoni Shkraba ",  Experience:2.5, Title:"Cardiologist"       , Appoinment:"$2"},
    {id:3, image:"/assects/doctor3.avif", Mode:"Available", name:"Dr.Vinod Raina",  Experience:5, Title:"Medical Oncologist"      , Appoinment:"$2"},
        ]
  return(
 <>
    <div className="related">
    <h1>Related Doctord</h1>
    {
        DoctorList1.map((list , index)=>(
             <div key={index} className="related1">
               <img onClick={()=>{
Navi(`/Doctor-Appoinment/${list.id}`)
               }} src={list.image} alt="do"/>
               <h3 >{list.name}</h3>
               <p1 >Appoinment:{list.Appoinment}</p1>
         </div>
        ))
      }
    </div>
  
 </>
  )

}         