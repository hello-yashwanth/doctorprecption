import React from "react"
import './index.css'
import { useNavigate } from "react-router-dom"
function MyAppois(){
   
      const DoctorList = [
    {id:1, image:"/assects/doctor1.jpg", Mode:"Available", name:"Dr.Sawithika",  Experience:1.5, Title:"Physician", Appoinment:"$2"},
    {id:2, image:"/assects/doctor2.jpg", Mode:"Available", name:"Dr.Antoni Shkraba ",  Experience:2.5, Title:"Cardiologist"       , Appoinment:"$2"},
    {id:3, image:"/assects/doctor3.avif", Mode:"Available", name:"Dr.Vinod Raina",  Experience:5, Title:"Medical Oncologist"      , Appoinment:"$2"},
  ]
    return(
<>
        <p className="my-appoinments">My Appoinments</p>
   <div>
            {DoctorList.slice(0,2).map((item , index)=>(
                <div className="dt">
                    <div>
                        <img src={item.image} alt=""/>
                        </div>
                        <div className="itms">
                            <p>{item.name}</p>
                            <p>{item.Title}</p>
                            <p>{item.Appoinment}</p>
                            </div>

                            <div>
                            <button>Pay Online</button>
                            <button>Cancel Appoiment</button>    
                            </div>
                    </div>
    ))}
           </div>
           </>
  )
    
    
 
}
export default MyAppois