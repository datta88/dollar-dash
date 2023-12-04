import react, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Img from './dustbin.png';
import Imgwritting from './writing.png'
import { json } from 'react-router-dom';
//import Update from './views/Update/Update.js'

function App() {

  const [transition, setTransition] = useState([]);
  const [debit, setDebit] = useState(0);
  const [credit, setCredit] = useState(0);

  const ALL_EMOJI = {
    "shopping": "👜",
    "food": "🥪",
    "rent": "🎪",
    "entertainment": "🍷",
    "travel": "🚕",
    "other": "🧞‍♂️",
    "education": "📝",
    "gift": "🎁"
  }


  const onLoadTransition = async () => {
    
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user._id;
    console.log(userId);
    
    const response = await axios.get(`/api/transition/user/${userId}`)
    const transitionData = response?.data?.data;

    let creditSum = 0;
    let debitSum = 0;

    transitionData.forEach((element )=> {
      if (element.type === 'credit') {
        creditSum += element.amount;
      }
      else {
        debitSum += element.amount;
      }
    });

    setCredit(creditSum);
    setDebit(debitSum);

    setTransition(transitionData);
  }
  useEffect(()=>{
     onLoadTransition() 
  },[]);

  const deleteTransition = async (_id)=>{
    const response = await axios.delete(`/api/transition/delete/${_id}`);
   if(response?.data?.success){
    alert(response?.data?.message)
    onLoadTransition()
   }
  
  }

  const editButton = async(_id)=>{
    window.location.href =`/updateTransition/${_id}`
}

  return (
    <>
      <div className='cr-dr-container'>
        <h2 className='cr-dr-amount'>Credit : {credit}</h2>
        <h2 className='cr-dr-amount'>Debit : {debit}</h2>
      </div>
      <div>
        {
          transition?.map((transition, i) => {
            const { _id ,amount, category, description, type, createdAt} = transition
            const date = new Date(createdAt).toLocaleDateString();
            const time = new Date(createdAt).toLocaleTimeString();

            return (
              <>
                <div className='app-container' key={i}>
                  <span className={`${type === 'credit' ? 'credit-con' : 'debit-con'}`}>{type === "credit" ? '+' : '-'}{amount}</span>
                  <span className='type-container'>{type === 'credit' ? 'Credited' : 'Debited'}</span>
                  <span className='date-container'>{date}</span>
                  <span className='time-container'>{time} </span>
                  <hr />
                  <span className='category-container'>{ALL_EMOJI[category]} {category}</span>
                  <hr />
                  <span>{description}</span>
                  <span className='delete-btn' onClick={()=>{deleteTransition(_id)}}>
                    <img src={Img} className='img-con'/>
                    </span>

                    <span className='update-img-container' onClick={()=>{ editButton(_id)}}>
                    <img src={Imgwritting} className='img-con' />
                    </span>




                </div>
              </>
            )
          })
        }
      </div>
    </>
  );
}
        
export default App;