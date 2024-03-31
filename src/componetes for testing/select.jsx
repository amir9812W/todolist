import React from "react"


const Select = (props) => {

  const selectHanlder = (event) => {
    props.onFilterYear(event.target.value)
  } 

  return (
    <select style={{width : '100px'}} value={props.onYear} onChange={selectHanlder}>
      <option value = '2021'>2021</option>
      <option value = '2022'>2022</option>
      <option value = '2023'>2023</option>
      <option value = '2024'>2024</option>
    </select>
  )
}


export default Select