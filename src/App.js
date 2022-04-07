import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [quote,setQuote] = useState("");
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    quotes();
  },[])
  function quotes()
  {
    axios.get('https://api.adviceslip.com/advice').then(res=>{
      console.warn(res.data.slip)
      setQuote(res.data.slip);
      setLoading(false);
      console.warn(res.data.slip);
    }).catch(error=>{
      console.log("error",error)
    });
  }

  function getQoute()
  {
    setLoading(true);
    quotes();
  }

  // let quotes = '';
  // if(loading)
  // {
  //   quotes = 'loading...';
  // }
  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{loading === true? "loading...":quote.advice}</h1>
        <button className='btn' onClick={getQoute}>Give me Advice</button>
      </div>
     
    </div>
  );
}

export default App;
