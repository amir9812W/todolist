import { useState } from 'react';
import '../componetes for testing/formSubmit.scss';
import {db} from '../firebase.js'
import { addDoc, collection } from 'firebase/firestore';
import {motion} from 'framer-motion'

const Form = (prop) => {

  const [text, setText] = useState('')
  const [number, setNumber] = useState('')
  const [date, setDate] = useState('')
  


  const textChanger = (event) => {
    const value = event.target.value


    setText(value)
  }

  const numberChanger = (event) => {
    const value = event.target.value

    setNumber(value)
  }

  const dataChanger = (event) => {
    const value = event.target.value

    setDate(value)
  }
   
  const changeHandler = (e) => {
    e.preventDefault()
    document.querySelector('.t').value = ''
    document.querySelector('.d').value = ''
    document.querySelector('.n').value = ''

    const expenseData = {
      id : 'e__' + Math.random().toString(),
      title : text,
      amount : number ,
      date : new Date(date)
    }
    setNumber('')
    setText('')
    setDate('')

    try {
      const docRef = addDoc(collection(db, 'items'), expenseData);
      console.log('sucsess', docRef)
    } catch (e) {
      console.log('Error')
    } 
  }

  return (
    <motion.form className='formContainer' onSubmit={changeHandler} initial = {{opacity : 0.2}} animate={{opacity : prop.value ? 1 : 0, transition : {duration : 1}}}>
      <div className='form'>
        <div className='input__text'>
          <label>Title</label>
          <input value={text} type="text" className='t' onChange = {textChanger} />
        </div>

        <div className='input__number'>
          <label>value</label> 
          <input value = {number}type="number"
          min='1.99' max='10000' className='n' onChange = {numberChanger} />
        </div>

        <div className='input__date'>
          <label>date</label>
          <input type="date" value={date} 
          min='2019-01-01'
          max='2030-12-12' className='d' onChange = {dataChanger}/>
        </div>
        <button>Submit</button>
        <button className = 'grid'onClick={prop.fuckWithYou}>nah </button>
      </div>
    </motion.form>
  )
}

export {Form}