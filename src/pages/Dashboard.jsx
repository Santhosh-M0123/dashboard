import React from 'react';
import Cards from '../ReusableComponent/Cards';
import DashboardData from '../DummyData/DashboardData';
import "../styles/Dashboard.css";
import { useEffect,useState } from 'react';
import Axios from "axios"
import Graph from '../ReusableComponent/Graph';
import {BarGraph} from "../ReusableComponent/Graph" 

// export const GetDashboardData = () => {
//   let [data,setData] = useState([]);

//   useEffect(async ()=>{
//   let dashData = await Axios.get("http://localhost:3001/dashboard");
//   console.log(dashData.data);
//   setData(dashData.data)
// },[])
// }
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="graph_display" style={{display: 'flex',justifyContent:'center'}}>
        <Graph />
      </div>
      <div className='Dashboard_content'>
      {DashboardData.map(i => {
        return <Cards title={i.title} value={i.Value} class={i.class} link={i.link}/>
      })}
      {/* <Cards /> */}
    </div>
    {/* <div className="graph_display" style={{display: 'flex',justifyContent:'center'}}>
        <Graph />
      </div> */}
    </div>
  )
}
export default Dashboard