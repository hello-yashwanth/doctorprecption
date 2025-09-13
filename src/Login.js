import { useState } from "react";
import './index.css'
import axios from 'axios'
export function Login(){
    const[state , Setstate] = useState('signup')
const [email , SetEmail] = useState('')
const [password, Setpassword] = useState('')
const [name, Setname]= useState('')
const [Lastname, SetLname]= useState('')
const Onsubmit = async (event)=>{
       event.preventDefault();

    try {
      if (state === 'signup') {
        await axios.post('http://localhost:5000/My-login', {
          firstName: name,
          lastName: Lastname,
          email,
          password
        });
        alert('Signup successful! You can now login.');
        Setstate('login');
        Setname('');
        SetLname('');
        SetEmail('');
        Setpassword('');
      } else {
        const res = await axios.post('http://localhost:5000/My-login', {
          email,
          password
        });
        alert('Login successful! Welcome ' + res.data.user.Lastname);
        SetEmail('');
        Setpassword('')
      }
    } catch (err) {
      console.error(err);
      // alert('Error: ' + (err.response?.data?.error || 'Something went wrong'));
    }
}
return(
    <form className="form" onSubmit={Onsubmit}>
        <div className="compound">
          <p className="account">{state === 'signup' ? "create Account" : "Login"}</p>
          <p className="signin" >Please {state === 'signup' ? "signup" : "Login"}  to book Appoinment</p>
      {state === 'signup' &&(
        <>
        <div className="detailsform">
            <p>First Name</p>
            <input type="text" onChange={(e)=>Setname(e.target.value)} value={name} required/>
        </div>
          <div className="detailsform">
            <p>Last Name</p>
            <input type="text" onChange={(e)=>SetLname(e.target.value)} value={Lastname} required/>
        </div>
        </>
      )}
           <div className="detailsform">
            <p>Email</p>
            <input type="email" onChange={(e)=>SetEmail(e.target.value)} value={email} required/>
        </div>
            <div className="detailsform">
            <p>password</p>
            <input type="password" onChange={(e)=>Setpassword(e.target.value)} value={password} required/>
        </div>
        <button type="submit">{state === 'signup' ? 'create':'login' }</button>
          </div> 
             <p style={{ marginTop: '10px', cursor: 'pointer', color: 'blue' }} onClick={() => Setstate(state === 'signup' ? 'login' : 'signup')}>
          {
          state === 'signup'
            ? <>Already have an account? <span>Login</span></>
            : <>Don't have an account?<span>Sign Up</span></>
            }
        </p>
    </form>
)
}