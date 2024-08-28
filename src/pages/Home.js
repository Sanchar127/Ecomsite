import React from 'react'
import { useState,useEffect } from 'react';
import Products from '../components/products'
function Home() {
  const [sentence, setSentence] = useState("Hello, world!");
  const sentences = [
    "Welcome to Yoyo store",
    "Shop Your Best",
    "Best in the Market",
    "Have a great day!"
  ];
  useEffect(() => {
    // Set an interval to change the sentence every 1 second
    const interval = setInterval(() => {
      setSentence(prevSentence => {
        // Get the index of the current sentence
        const currentIndex = sentences.indexOf(prevSentence);
        // Determine the next index (loop back to the start if at the end)
        const nextIndex = (currentIndex + 1) % sentences.length;
        // Return the next sentence
        return sentences[nextIndex];
      });
    }, 2000); // 1000ms = 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once
  return (
    <div>
        <h1 className='heading bg-gray-100 font-bold text-rose-500 text-xl   px-2'>{sentence}</h1>
        <section>
            <h3 className=' font-bold text-blue-500 text-xl '>Choose Your Favourite Product</h3>
            <Products/>
        </section>
    </div>
  )
}

export default Home