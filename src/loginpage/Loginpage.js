import React,{useState, useRef, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import empdata from '../empdata';

function Loginpage(){
    const [empId,setEmpId]=useState("");
    const [password,setPassword]=useState("");
    const userRef = useRef();
    const errRef = useRef();
    const navigate=useNavigate();

    useEffect(() => {
      userRef.current.focus();
  }, [])

    const changeEmpId=(event)=>{
        event.preventDefault();
        setEmpId(event.target.value);
    }
    const changePassword=(event)=>{
        event.preventDefault();
        setPassword(event.target.value);
    }
    const submitHandler=()=>{
      let empDataObj=JSON.parse(empdata);
      let userFound=false;
      empDataObj.map((obj)=>{
      if(obj.empName===empId){
       userFound=true;
       if(obj.empPassword===password){
         console.log("loginsuccess");
         sessionStorage.setItem("username",obj.empName);
         sessionStorage.setItem("Access",obj.empAccess);
         navigate('/loginsuccess');
       } 
       else{
        window.alert("Invalid Password");
       }
      }
     }
     );

     if(!userFound){
       window.alert("Username not found");
     }
    

   } 
    
    
    return (
    
    <div>
      
    <h3>Sign In</h3>
    <div className="mb-3">
    <label htmlFor="empid" className="col-sm-2 col-form-label">Username</label>
    <div className="col-sm-12">
      <input type="text" autoComplete="off" className="form-control" ref={userRef} id="empid" value={empId} onChange={changeEmpId}/>
    </div>
    </div>
    <div className="mb-3">
      <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
      <div className="col-sm-12">
        <input type="password" className="form-control" id="inputPassword" value={password} onChange={changePassword}/>
      </div>
    </div >
    <div className="d-grid">
      <button type="submit" className="btn btn-primary" onClick={submitHandler}>Login</button>
    </div>
    
    </div>
    );
}


export default Loginpage;