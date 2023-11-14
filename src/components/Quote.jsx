import React, { useEffect, useState } from 'react'

export default function Quote() {
  
  const [quote, setQuote] = useState("");


    const fetchQuote = async () => {
        try {
          const response = await fetch("https://api.quotable.io/random");
          const data = await response.json();
    
          const { content, author } = data;
          setQuote(`${content} - ${author}`);
        } catch (error) {
          setQuote("Error muchas peticiones `(*>﹏<*)′ ");
          console.error("Error fetching quote:", error);
        }
      };
    

  return (
    <article className= {quote ? "" : "card-skeleton"}>
      <p className="text-gray-700 mb-4">
        {quote}
      </p>
      <button
          onClick={fetchQuote}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
          >
          Click Me
        </button>
    </article>
  )
}


