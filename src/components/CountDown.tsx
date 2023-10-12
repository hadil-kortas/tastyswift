"use client"
import React from 'react'
import Countdown from 'react-countdown'

 const endingDate = new Date("2023/10/14")

 const CountDown = () => {
   return (
     <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate}/>
   )
 }

 export default CountDown
// WITHOUT A LIBRARY
{/*"use client"

import React, { useState, useEffect } from "react";

const CountDown = () => {
  const futureDate = new Date("2023/10/15");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = futureDate - new Date();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft());
    };

    const timer = setInterval(updateCountdown, 1000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  return (
    <div className="font-bold text-5xl text-yellow-300">
      {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
    </div>
  );
};

export default CountDown;
*/}