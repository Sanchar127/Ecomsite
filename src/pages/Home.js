import React, { useState, useEffect } from 'react';
import Products from '../components/products';

function Home() {
  const [sentence, setSentence] = useState("Hello, world!");
  const [color, setColor] = useState("text-rose-500");

  const sentences = [
    "Welcome to Yoyo store",
    "Shop Your Best",
    "Best in the Market",
    "Have a great day!"
  ];

  const colors = [
    "text-rose-500",  // Red
    "text-blue-500",  // Blue
    "text-green-500", // Green
    "text-yellow-500" // Yellow
  ];

  useEffect(() => {
    // Set an interval to change the sentence and color every 2 seconds
    const interval = setInterval(() => {
      setSentence(prevSentence => {
        const currentIndex = sentences.indexOf(prevSentence);
        const nextIndex = (currentIndex + 1) % sentences.length;
        return sentences[nextIndex];
      });
      
      setColor(prevColor => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h1 className={`heading bg-gray-100 font-bold text-xl px-2 ${color} w-30 bg-green-100`}>
        {sentence}
      </h1>
      <div className='flex justify-center items-center'>
        <img className='h-96 w-full bg-gray-200' src='./HeaderTitle.png' alt='Banner' />
      </div>
      <section>
        <h3 className='font-bold text-blue-500 text-xl my-3'>Choose Your Favourite Product</h3>
        <Products />
      </section>
    </div>
  );
}

export default Home;
