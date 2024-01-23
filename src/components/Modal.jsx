
const Modal = () => {
    const options=["Name",
    "Link","Budget","Value", "Id","Date", "Created By","Deadline","Status","Action"
    ]
  return (
    <div className="absolute bg-slate-100 min-w-40
     right-40 top-20 z-10 rounded-md h-4/5 p-4">
        <ul>

        {options.map(op=> <li key={op}><input type="checkbox" /> {op}</li> )}
        </ul>
     </div>
  )
}

export default Modal