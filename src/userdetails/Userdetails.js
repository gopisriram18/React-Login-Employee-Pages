import React,{useEffect,useState} from 'react';
import { Navigate } from 'react-router';
import empdata from '../empdata';

function Userdetails(){
    const [empData,setEmpData]=useState([]);

    useEffect(()=>{
        setEmpData(JSON.parse(empdata));
       },[]);


    if(!sessionStorage.getItem("username")){
        return (<Navigate to='/'/>)
    }
  

    return(
    <div className='container'>
        <h3>Employee Details</h3>
        <div className='table-responsive'>
        <table className='table table-striped'>
        <thead>
            <tr>
                <td>Employee Name</td>
                <td>Employee ID</td>
                <td>Employee Phone no</td>
                <td>Employee Address</td>
        {sessionStorage.getItem("Access")==="Admin"&& <td>Employee salary</td>}    
            </tr>  
        </thead> 
        <tbody>
        {  empData.map((obj)=>(<tr key={obj.empId}>
                <td>{obj.empName}</td>
                <td>{obj.empId}</td>
                <td>{obj.empPhone}</td>
                <td>{obj.empAddress}</td>
            { sessionStorage.getItem("Access")==="Admin"&&  <td>{obj.empSalary}</td>}</tr>))
        }
        </tbody>
        </table>
     </div>
    </div>);
}

export default Userdetails;

