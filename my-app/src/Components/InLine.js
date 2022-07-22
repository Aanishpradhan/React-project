import React from 'react';

const headings ={
    fontSize:'73px',
    color:'blue'
}
export default function InLine() {
  return( <div>
  {/* <h1 className={style.success}>success</h1>
  <h1 className="error">error</h1> */}
      <h1 style={headings}>Inline</h1>
  </div>)
}
