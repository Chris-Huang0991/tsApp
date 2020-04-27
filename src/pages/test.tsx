import React from 'react';

const Test: any = (props) => {
  console.log(props)
  return (
  <div>
    <h1>0</h1>
    <h1>{props.a}</h1>
    <h1>{props.b}</h1>
    <h1>{props.c}</h1>
    <h1>{(props.d)[0]}</h1>
    <h1>{(props.d)[1]}</h1>
  </div>
)}
export default Test