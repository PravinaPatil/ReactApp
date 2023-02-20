import React, { useState } from 'react';
import "./Section1.css"
function Section1() {
 const [name, setName] = useState({
  Name:"Pravina",
  ID:"12345",
  Designation:"Software Engineer"
 });   
const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  
};
  return (
    <>
    <h2 style={mystyle}>Employee Timesheet</h2>
    <h3>Employee Name:{name.Name}</h3>
    <h3>Employee ID:{name.ID}</h3>
    <h3>Employee Designation:{name.Designation}</h3>
    <table>
  <tr>
    <th>Date</th>
    <th>IN Time(HH)</th>
    <th>IN Time(MM)</th>
    <th>AM/PM</th>
    <th>Out Time(HH)</th>
    <th>Out Time(MM)</th>
    <th>AM/PM</th>
    <th>HRS</th>
    <th></th>
  </tr>
  <tr>
    <td>
      <h3>11 FEB 2023</h3>
    </td>                 
    <td>
      <select>
        <option value=" "> </option>
        <option value=" 01">01 </option>
        <option value=" 02"> 02</option>
        <option value=" 03"> 03</option>
        <option value="04"> 04</option>
        <option value="05"> 05</option>
      </select>
    </td>
    <td>
      <select>
        <option value=" "> </option>
        <option value=" 00">00 </option>
        <option value=" 01"> 01</option>
        <option value=" 02"> 02</option>
        <option value="03"> 03</option>
        <option value="04"> 04</option>
      </select>
    </td>
    <td>
      <select>
        <option value=" "> </option>
        <option value=" AM">AM </option>
        <option value="PM"> PM</option>
      </select>
    </td>
    <td>
      <select>
        <option value=" "> </option>
        <option value=" 01">01 </option>
        <option value=" 02"> 02</option>
        <option value=" 03"> 03</option>
        <option value="04"> 04</option>
        <option value="05"> 05</option>
      </select>
    </td>
    <td>
      <select>
        <option value=" "> </option>
        <option value=" 00">00 </option>
        <option value=" 01"> 01</option>
        <option value=" 02"> 02</option>
        <option value="03"> 03</option>
        <option value="04"> 04</option>
      </select>
    </td>
    <td>
       <select>
        <option value=" "> </option>
        <option value=" AM">AM </option>
        <option value="PM"> PM</option>
      </select>
    </td>
    <td>
      <h5><input type="text"/></h5>
    </td>
</tr>
<td>
      <h3>12 FEB 2023</h3>
    </td>                 
    <td>
      <select>
        <option value=" "> </option>
        <option value=" 01">01 </option>
        <option value=" 02"> 02</option>
        <option value=" 03"> 03</option>
        <option value="04"> 04</option>
        <option value="05"> 05</option>
      </select>
    </td>
    <td>
      <select>
        <option value=" "> </option>
        <option value=" 00">00 </option>
        <option value=" 01"> 01</option>
        <option value=" 02"> 02</option>
        <option value="03"> 03</option>
        <option value="04"> 04</option>
      </select>
    </td>
    <td>
      <select>
        <option value=" "> </option>
        <option value=" AM">AM </option>
        <option value="PM"> PM</option>
      </select>
    </td>
    <td>
      <select>
        <option value=" "> </option>
        <option value=" 01">01 </option>
        <option value=" 02"> 02</option>
        <option value=" 03"> 03</option>
        <option value="04"> 04</option>
        <option value="05"> 05</option>
      </select>
    </td>
    <td>
      <select>
        <option value=" "> </option>
        <option value=" 00">00 </option>
        <option value=" 01"> 01</option>
        <option value=" 02"> 02</option>
        <option value="03"> 03</option>
        <option value="04"> 04</option>
      </select>
    </td>
    <td>
       <select>
        <option value=" "> </option>
        <option value=" AM">AM </option>
        <option value="PM"> PM</option>
      </select>
    </td>
    <td>
      <h5><input type="text"/></h5>
    </td>
<tr>
</tr>
<tr>
<td>
      <h3>13 FEB 2023</h3>
    </td>                 
    <td>
      <select>
        <option value=" "> </option>
        <option value=" 01">01 </option>
        <option value=" 02"> 02</option>
        <option value=" 03"> 03</option>
        <option value="04"> 04</option>
        <option value="05"> 05</option>
      </select>
    </td>
    <td>
      <select>
        <option value=" "> </option>
        <option value=" 00">00 </option>
        <option value=" 01"> 01</option>
        <option value=" 02"> 02</option>
        <option value="03"> 03</option>
        <option value="04"> 04</option>
      </select>
    </td>
    <td>
      <select>
        <option value=" "> </option>
        <option value=" AM">AM </option>
        <option value="PM"> PM</option>
      </select>
    </td>
    <td>
      <select>
        <option value=" "> </option>
        <option value=" 01">01 </option>
        <option value=" 02"> 02</option>
        <option value=" 03"> 03</option>
        <option value="04"> 04</option>
        <option value="05"> 05</option>
      </select>
    </td>
    <td>
      <select>
        <option value=" "> </option>
        <option value=" 00">00 </option>
        <option value=" 01"> 01</option>
        <option value=" 02"> 02</option>
        <option value="03"> 03</option>
        <option value="04"> 04</option>
      </select>
    </td>
    <td>
       <select>
        <option value=" "> </option>
        <option value=" AM">AM </option>
        <option value="PM"> PM</option>
      </select>
    </td>
    <td>
      <h5><input type="text"/></h5>
    </td>
</tr>
<tr>
<td>
      <h3>14 FEB 2023</h3>
    </td>                 
    <td>
      <select>
        <option value=" "> </option>
        <option value=" 01">01 </option>
        <option value=" 02"> 02</option>
        <option value=" 03"> 03</option>
        <option value="04"> 04</option>
        <option value="05"> 05</option>
      </select>
    </td>
    <td>
      <select>
        <option value=" "> </option>
        <option value=" 00">00 </option>
        <option value=" 01"> 01</option>
        <option value=" 02"> 02</option>
        <option value="03"> 03</option>
        <option value="04"> 04</option>
      </select>
    </td>
    <td>
      <select>
        <option value=" "> </option>
        <option value=" AM">AM </option>
        <option value="PM"> PM</option>
      </select>
    </td>
    <td>
      <select>
        <option value=" "> </option>
        <option value=" 01">01 </option>
        <option value=" 02"> 02</option>
        <option value=" 03"> 03</option>
        <option value="04"> 04</option>
        <option value="05"> 05</option>
      </select>
    </td>
    <td>
      <select>
        <option value=" "> </option>
        <option value=" 00">00 </option>
        <option value=" 01"> 01</option>
        <option value=" 02"> 02</option>
        <option value="03"> 03</option>
        <option value="04"> 04</option>
      </select>
    </td>
    <td>
       <select>
        <option value=" "> </option>
        <option value=" AM">AM </option>
        <option value="PM"> PM</option>
      </select>
    </td>
    <td>
      <h5><input type="text"/></h5>
    </td>
</tr>
</table>

    </>
  );
}

export default Section1;
