import { useEffect, useState } from "react";
import './App.css';
import Top from './assets/top.png'
import Logo from './assets/logo.png'
function App() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-04-28T18:20:00+05:30") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  return (
    <div className="main ">
      <img src={Top} alt='' className='top-img'/>
      <div className='logo-div'>
        <img src={Logo} alt=''/>

      </div>
      <div>
      <h1>Coming Soon</h1>
      <p>Discover a new level of financial freedom with our innovative decentralized solutions</p>
      </div>

<div>
{timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <p>
          <span>{timeLeft.hours}</span>
          <span>:</span>
          <span>{timeLeft.minutes}</span>
          <span>:</span>
          <span>{timeLeft.seconds}</span>
        </p>
      ) : (
        <p>Time is up 🔥</p>
      )}
</div>
    
    </div>
  );
}

export default App;
