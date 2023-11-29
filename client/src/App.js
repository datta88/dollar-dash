import react, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [transition, setTransition] = useState([]);
  const [debit, setDebit] = useState();
  const [credit, setCredit] = useState();



  let creditSum =0;
  let debitSum=0;


  
  
  const ALL_EMOJI = {
    "shopping":"👜",
    "food":"🥪",
    "rent":"🎪",
    "entertainment":"🍷",
    "travel":"🚕",
    "other":"🧞‍♂️",
    "education":"📝",
    "gift":"🎁"
  }

  const onLoadTransition = async () => {
    const response = await axios.get('/api/transitions');
    const dataRe = response?.data?.data;
    console.log(dataRe);
    setTransition(dataRe)
  }

  useEffect(() => { onLoadTransition() }, []);

  return (
    <>
      <div>
        {
          transition?.map((transition, i) => {
            const { amount, category, description, type, createdAt } = transition
            const date = new Date(createdAt).toLocaleDateString();
            const time = new Date(createdAt).toLocaleTimeString();
            
            return (
                
              <div className='app-container' key={i}>

                <span className={`${type === 'credit' ? 'credit-con' : 'debit-con'}`}>{type === "credit" ? '+' : '-'}{amount}</span>

                <span className='type-container'>{type === 'credit' ? 'Credited' : 'Debited'}</span>
                <span className='date-container'>{date}</span>
                <span className='time-container'>{time} </span>
                
                <span className='category-container'>[ALL_EMOJI {category}]</span>
                <hr />
                <span>{description}</span>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
