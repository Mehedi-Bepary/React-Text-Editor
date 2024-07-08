import React from 'react'

export default function Alert(props) {
const capitalize=(string )=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
}
    if (!props.alert) {
        return null; // or you can return a default message or JSX here
      }
  return (
   <>
  
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
         <strong>{capitalize(props.alert.type)}</strong>{   props.alert.msg}
         <button type="button" className="close" data-dismiss="alert" aria-label="Close">
         <span aria-hidden="true">&times;</span>
         </button>
    </div>
   </>
  )
}
