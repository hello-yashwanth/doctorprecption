import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Doctors } from ".";
import './index.css'
export function Doctor({doctors}){
    const {specialist} = useParams()
  const [filterDoct , setFilt] = useState([])
    const Navi = useNavigate()

  useEffect(()=>{
    if(specialist){
        setFilt(doctors.filter(doc => doc.Title && doc.Title.toLowerCase().includes(specialist.toLowerCase())))
    }
    else{
        setFilt(doctors)
    }
  
  },[doctors , specialist])

    return(
        <div className="doctor-grid">
            <div className="side-bar" >
                <p onClick={()=> Navi('/Alldoctors')}>All</p>
                <p onClick={()=> Navi('/Alldoctors/Physician')}>Physician</p>
                <p onClick={()=> Navi('/Alldoctors/Dermatologist')}>Dermatologist</p>
                <p onClick={()=> Navi('/Alldoctors/Neurologist')}>Neurologist</p>
                <p onClick={()=> Navi('/Alldoctors/Gastroenterologis')}>Gastroenterologis</p>
                <p onClick={()=> Navi('/Alldoctors/Urologist')}>Urologist</p>
            </div>
            <div>
                {
                    filterDoct.map(( mydoctor, index )=>(
              <div key={index} className='doctor-grid-item'>
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
            </div>
        </div>
    )
}