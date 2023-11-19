import React, { useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner';

export default function Quote() {

  
  
  const [loading, setLoading] = useState(false);
  
  const [quoteData, setQuoteData] = useState({
    quote: "",
    author: "",
    tags: [],
  });
  

    const fetchQuote = async () => {
        try {
          setLoading(true)
          const response = await fetch("https://api.quotable.io/random");
          const data = await response.json();

          const { content, author, tags } = data;

          setQuoteData({quote:content, author: author , tags: tags});
          setLoading(false)

        } catch (error) {
          setQuote("Error muchas peticiones `(*>﹏<*)′ ");
          console.error("Error fetching quote:", error);
        }
      };
    

  return (
    <article className= {quoteData ? "" : "card-skeleton"}>
      
      {
        quoteData.quote &&
      <p className="text-gray-700 mb-4">
      
        {quoteData.quote} 
        <br />
       ~ {quoteData.author} ~
      </p>

      }


      <button
          onClick={fetchQuote}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
          >
            {
              loading ? <LoadingSpinner/> : "Nueva Frase"
            }
          
        </button>
    </article>
  )
}


