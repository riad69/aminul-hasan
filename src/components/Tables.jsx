import { useState } from "react";
import DataTable from "react-data-table-component"
import Modal from "./Modal"

const Tables = ({leads}) => {
  const [shortBox, setShortBox]= useState(false)

// Colums for table
const coloums= [
  {
    name: '#',
    selector: row => <input type="checkbox"/>,
  },
  {
  name: "Name",
  selector: row=> row.client_name,
  sortable: true,
},
  {
  name: "Project Link",
  selector: row=> row.project_link,
  sortable: true,
},
  {
  name: "Project Id",
  selector: row=> row.id,
  sortable: true,
},
  {
  name: "Project Budget",
  selector: row=> row.value+"$",
  sortable: true,
},
  {
  name: "Bid Value",
  selector: row=> row.bid_value +"$",
  sortable: true,
},
  {
  name: "Created",
  selector: row=> row.deadline,
  sortable: true,
},
  {
  name: "Created By",
  selector: row=> row.added_by,
  sortable: true,
},
  {
  name: "Bidding Delay Time",
  selector: row=> row.deadline,
  sortable: true,
},
{
  name: 'Status',
  selector: (row) => {
    return (
      <span style={{
          backgroundColor: row.deal_status === 1 ? 'green' : 'red',
          color: "white",
          padding: ".25rem .75rem",
          borderRadius: "5px",
          display: "block",
          fontSize: ".6rem",
          fontWeight: "bold"
       }}>
        {row.deal_status===1? "Converted to Deal": "Not Converted to Deal"}
      </span>
    );
  },
  sortable: true,
},
  {
  name: "Deal Status",
  selector: row=> {
    return(
<div style={{
          backgroundColor: row.deal_status === 1 && 'orange',
          padding: ".25rem .75rem",
          borderRadius: "5px",
          fontSize: ".7rem",
          fontWeight: "bold"
          }}>
{row.deal_status===1? "No Activity Yet": "Not Applicable"}
</div>
    )
  }
},
{
  name: 'Action',
  selector: (row) => <button className="border border-slate-400 px-3 py-1 rounded-s">:</button>,
},
]

  return (
    <div className="relative shadow-sm shadow-slate-400 rounded-md w-[1640px] m-auto p-4 mt-8" > 
    {shortBox && <Modal/>}
    <div className="flex justify-between px-4 py-2">
      <button className="bg-blue-600 rounded-md px-4 py-2 text-white font-semibold">Add Lead +</button>
      <button onClick={()=> setShortBox(p=>!p)} className="rounded-md px-4 py-2 border border-blue-600 font-semibold hover:bg-blue-600 hover:text-white">Short By</button>
    </div>
  <DataTable 
      columns={coloums}
      data={leads}
      pagination
      customStyles={{
        table:{
          style:{
          maxWidth: "1600px",
          margin: "0 auto"
        }
        },
        pagination:{
          style:{
            maxWidth: "1640px",
          margin: "0 auto"
          }
        }
      }
      }
  />
    </div>
  )
}

export default Tables