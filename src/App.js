import { useEffect, useState } from "react";
import './App.css';
import Top from './assets/top.svg'
import Logo from './assets/logo.svg'
function App() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-04-28T18:20:00+05:30") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const days = Math.floor(difference / millisecondsPerDay);
  const remainingTime = difference % millisecondsPerDay;
      timeLeft = {
        days: days,
        hours: Math.floor(remainingTime / (1000 * 60 * 60)),
        minutes: Math.floor((remainingTime / 1000 / 60) % 60),
        seconds: Math.floor((remainingTime / 1000) % 60),
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
      <div className="sub-main">
      <div className='logo-div'>
        <img src={Logo} alt=''/>

      </div>
      <div className="coming">
      <h1>Coming Soon</h1>
      <p>Discover a new level of financial freedom with our innovative decentralized solutions</p>
      </div>

<div>
{timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <p>
           <span className="btn-gradient">{timeLeft.days} Days</span>

           <span className="colon">:</span>
          <span className="btn-gradient">{timeLeft.hours} hours </span>
          
          <span className="colon">:</span>

          <span className="btn-gradient">{timeLeft.minutes} minutes</span>
    
         
        </p>
      ) : (
        <p>Time is up 🔥</p>
      )}
</div>
    
</div>
    
    </div>
  );
}

export default App;
