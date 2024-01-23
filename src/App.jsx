import Tables from "./components/Tables";
import Graph from "./components/Graph";

import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [leads, setLeads]=useState([])

  // Fetching Data
  useEffect(()=>{
  const url= "https://erp.seopage1.net/api/leads"
  async function getData(link){
    try{
      const res= await axios(link)
      setLeads(res.data.data)
    }catch(err){
      console.log(err)
    }
  }
  getData(url)
  },[])


  return (
    <>
      <Tables leads={leads} />
      <Graph leads={leads} />
    </>
  );
}

export default App;
