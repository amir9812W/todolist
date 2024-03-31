import './App.scss';
import { motion} from 'framer-motion'
import { Form } from './componetes for testing/formSubmit';
import { useState , useEffect} from 'react';
import { Fuck } from './componetes for testing/items';
import Select from './componetes for testing/select';
import {query , collection , getDocs, onSnapshot} from 'firebase/firestore'
import {db} from'./firebase.js'
import AnimatedWave from './background.js';



function App() {

  const [data , setData] = useState([])

  useEffect(() => {
    const q =  query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedItems = [];
      snapshot.forEach((doc) => {
        updatedItems.push(doc.data())
      });
      setData(updatedItems)
    })

    return () => unsubscribe()
  },[])

  const variants = {
    initial : {
      opacity : 0
    },
    animate : {
      opacity : 1,
      transition : {
        duration : 2,
        delay : 1,
      }
    }
  }

  
  const [button , setButton] = useState(false)


  const [year , setYear ] = useState('2020')


  const filterYearHandler = (selectedYear) => {
    setYear(selectedYear)
  }


  

  const falseOrTrueHandlter = () =>{
    setButton(prev => !prev)
  }

  const Component = (prop) => {

    return (
      <motion.div className='header-someshit' style={{zIndex : 1000, padding : '100px 140px' , display : 'flex', alignItems : 'center', justifyContent : 'center',}} initial = {{opacity : 0.3}} animate={{opacity : prop.value ? 0 : 1, transition : {duration : 1}}}>
        <button onClick={falseOrTrueHandlter}>add New</button>
      </motion.div>
    )
  }
  


  return (
    <motion.div className="App" variants={variants} initial = 'initial' animate = 'animate'>
      <AnimatedWave/>
      {button ? <Form fuckWithYou = {falseOrTrueHandlter} value = {button}/> : <Component value = {button}/>}
      <div className='items_container'>
        <div className='header'>
          <p>Filter By year</p>
          <Select onYear = {year} onFilterYear = {filterYearHandler}/>
        </div>
        <Fuck year = {year} fuck = {data}/>
      </div>
    </motion.div>
  );
}

export default App;
