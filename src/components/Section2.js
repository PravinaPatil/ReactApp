import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
const Section2=()=>{
    const [data, setData] = useState([]);

 useEffect(() => {
        axios.get('http://localhost:3333/EmployeeDetails')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    return(
        <div>
        <h5>Employee Details</h5>
     <table id="Employee">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Qualification</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.Name}</td>
            <td>{item.Qualification}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    );
}
export default Section2;