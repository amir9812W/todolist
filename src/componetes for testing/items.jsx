import '../componetes for testing/items.scss';
import {motion} from 'framer-motion'
import moment from 'moment';



const Items = (props) => {

  const timestamp = props.date; // Assuming 'date' holds the timestamp
  const formattedDate = moment(timestamp.seconds * 1000).format("YYYY-MM-DD HH:mm:ss"); // Use Moment.js for formatting
  const formatInJs = new Date(formattedDate)
  
  const variants = {
    initial : {
      opacity : 0,
      y : 0,
      clipPath : 'circle(32px at 100% 0%)',
      transition : {
        staggerChildren : 10
      }
    },
    animate : {
      opacity : 1,
      y : 20 ,
      clipPath : 'circle(1000px at 50px 50px)',
      transition : {
        duration : 3,
        staggerChildren : 10
      }
    }
  }

  const day = formatInJs.getDate()
  const year = formatInJs.getFullYear()

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const month = formatInJs.getMonth()

  const result = monthNames[month]



  return (
    <motion.div  variants = {variants} initial = {'initial'} animate = {props.filterYear === 0 ? 'initial' : 'animate'}  className="items-container">
      <div className='left-section'>
        <div className='date-container'>
          <p>{result}</p>
          <p>{year}</p>
          <p>{day}</p>
        </div>
          <p className='title-cont'>{props.title}</p>
      </div>
      <div className='priceTag'>
        <p>{props.amount} $</p>
      </div>
    </motion.div>  
  )
}


const Fuck = (props) => {

  const itemVariants = {
    open : {
      transition : {
        staggerChildren : 1
      }
    },
    closed : {
      transition : {
        staggerChildren : 1
      } 
    }
  }

  const nani = (item) => {
    const timestamp = item.date; // Assuming 'date' holds the timestamp
    const formattedDate = moment(timestamp.seconds * 1000).format("YYYY-MM-DD HH:mm:ss"); // Use Moment.js for formatting
    const formatInJs = new Date(formattedDate)
    return formatInJs.getFullYear().toString() === props.year
  }
  const filterYear = props.fuck.filter(nani)

  
  return (
      <motion.div className='whom'  variants={itemVariants} initial = {'open'} animate = {'closed'}>    
        {filterYear.length === 0 ? <p>nothing was found</p> :  filterYear.map( data => {
          return <Items value = {filterYear} title = {data.title} amount = {data.amount} date = {data.date} key = {data.id}/>
        }) }
      </motion.div>       
  )
}

export {Fuck}
