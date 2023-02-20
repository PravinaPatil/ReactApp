import React, { useState } from "react";
import Section1 from  "./Section1.js";
import Section2 from  "./Section2.js";
import Footer from "./Footer.js";
import Section from "./Section.js"
import "./Header.css";
import logo from "./logo.png";
const Header=()=>{
    const [active,setactive]=useState(" ");
    return(
        <>
        <div className="HeaderContent"> 
        <img src={logo} alt="Employeelogo"/>
        <button onClick={()=>setactive("Timesheet")}>Timesheet</button>
        <button onClick={()=>setactive("EmployeeDetails")}>EmployeeDetails</button>
        </div>
        <div className="SectionContent">
        <h2> Welcome To Employee Portal</h2>
        {active===" " && <Section/>}
        {active==="Timesheet" && <Section1/>}
        {active==="EmployeeDetails" && <Section2/>}
        </div>
        <div className="FooterContent">
        <Footer/>
        </div>
        </>
    );
}
export default Header;
