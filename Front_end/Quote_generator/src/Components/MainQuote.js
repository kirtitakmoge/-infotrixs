

import { useState, useEffect } from "react";

import QuoteBox from "./QuoteBox";
import SearchBox from "./SearchBox";
import TrendQuote from "./TrendQuote";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainQuote() {

  const [data, setData] = useState({ "quoteText": "Nothing happens unless first we dream.",
  "author": "Carl Sandburg",
  "id":1
   
  });
  const[trendingquote,setTrendingQuote]=useState();
  const[trendingflag,setTrendingFlag]=useState(false);
  const[searchFlag,setSearchFlag]=useState(false);
  const[searchQuote,setSearchQuote]=useState();
  const [quote, setQuote] = useState({
    "quoteText": "Nothing happens unless first we dream.",
  "author": "Carl Sandburg",
  "id":1
  });
  const [author,setAuthor] = useState("");
  const api_url = "http://localhost:8080/api/quotes/";




/*this will every page reload*/
  useEffect(() => {
   
    getapi(api_url);
  },[]);



//for retriving all quotes from rest api
   function getapi(url) {
    
    fetch( "http://localhost:8080/api/quotes/allquotes")
  .then(response => {
    if (!response.ok) {
      throw new Error('response is not ok.');
    }
    return response.json();
  })
  .then(respdata=> {
    if (respdata === null || respdata.length === 0) {
      console.log('API response is null or empty.');
      
    } else
    {
        console.log(respdata);
        setData(respdata);
        getQuote();
    }
  })
  .catch(error => {
    console.error('not able to fetch api:', error);
  }); 
   
  }


//to like particular quote
  async function addLikes(quoteId) {

    console.log("quoteId:", quoteId);
    const response = await fetch(
      `http://localhost:8080/api/quotes/update/${quoteId}`
    );
    var data1 = await response.json();
    console.log(data1);
    toast('This quote is liked', { autoClose: 2000 });
  }

  const clearInput = () => {
    //alert("clear")
    //setAuthor('');
  };

  //to search quote by author
   function searchQuoteFn(author)
  { 
    fetch(  `http://localhost:8080/api/quotes/findquotes/${author}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(' response is not ok.');
    }
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return response.json();
    } else {
      return null; 
    }
  })
  .then(respdata=> {
    console.log(respdata);
    setSearchFlag(true);
    setAuthor("");
    console.log(searchFlag);
    setSearchQuote(respdata);
    setTrendingFlag(false);

    
  })
  .catch(error => {
    console.error('not able to fetch Api:', error);
  });
 }



//to get random qoute index  data fetched from restapi
  function getQuote() {
    setAuthor("");
    if (data && data.length > 0) {
      const index = Math.floor(Math.random() * data.length);
      
      const randomQuote = data[index];
      console.log("  random index is generated :",index);
      console.log(" quote:",data[index]);
      setQuote(randomQuote);
      setTrendingFlag(false);
      setSearchFlag(false);
    }
  }



  //to get trending quote in descending order of likes
   async function getTrendingQuote()
  {
    const response = await fetch(
      `http://localhost:8080/api/quotes/trendingquote`
    );
    var data1 = await response.json();
    console.log(data1);
    setAuthor("");
    setTrendingFlag(true);
    setTrendingQuote(data1);
  }



  //this is main website component
  return (
    <div className="App">


      {/*  //this is website header */}
      <div className="header">
       <img  className="logo" alt="logo" src="/quotelogo.png"></img>
      
          <h2>Inspirational And Motivational Quotes</h2>
         
      </div>

    

{/* this is background video */}
      <div className="main-content">
        <video autoPlay muted loop id="myVideo">
          <source
            src="/bgvideo.mp4"
            type="video/mp4"
          />
          
        </video>



  {/*  //this is website quote main content */}
{!searchFlag && !trendingflag &&<QuoteBox newq={quote} addLikes={addLikes} getQuote={getQuote} getTrendingQuote={getTrendingQuote}/>}

{searchFlag && !trendingflag && <SearchBox newq={searchQuote} addLikes={addLikes}/>}

{trendingflag && !searchFlag && <TrendQuote newq={trendingquote}/>}
      

        <input
          type="text"
          className="userInput"
          placeholder="Enter Author name "
          value={author}
          onBlur={clearInput}
          onChange={(e)=>setAuthor(e.target.value)}
        ></input>

        <button className="q-search" onClick={() => searchQuoteFn(author)}>
          Search Quote
        </button>
        <button className="q-search"  onClick={() => getQuote()}>Home</button>
      
       
      </div>
     

      {/*  //this is website footer */}
      <div className="footer"><p>kirttakmoge@gmail.com
      <br></br>
      All rights Preserved</p></div>
    </div>
  );
}

export default MainQuote;
