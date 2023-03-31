import { useEffect, useState } from "react";
import Top from "./assets/top.svg";
import Logo from "./assets/logo.svg";
import ellipse1 from "./assets/Ellipse1.png";
// import "./index.css";

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
      <img src={Top} alt="" className="top-img" />
      <div className="sub-main ">
        <div className="header slide-top">
          <div className="logo-div">
            <img src={Logo} alt="" />
          </div>
          <div className="coming">
            <h1 className="text-3xl sm:text-5xl md:text-7xl">Coming Soon</h1>
            <p>
              Discover a new level of financial freedom with our innovative
              decentralized solutions
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
            <p className="flex flex-wrap space-y-2 justify-center items-center">
              <span className="btn-gradient slide-fwd-left">
                {timeLeft.days} Days
              </span>

              <span className="colon">:</span>
              <span className="btn-gradient scale-up-center">
                {timeLeft.hours} hours{" "}
              </span>

              <span className="colon">:</span>

              <span className="btn-gradient slide-fwd-right delay-1000">
                {timeLeft.minutes} minutes
              </span>
            </p>
          ) : (
            <p>Time is up 🔥</p>
          )}
        </div>
      </div>
      {/* <div className="relative top-0 left-0 right-0 bottom-0"> */}
      <img
        src={ellipse1}
        className=" absolute top-0 right-0 left-0 slide-bottom-main h-auto w-screen z-10"
      />
      <div className="bg-[url('/src/assets/Ellipse1.png')] absolute top-0 -left-44 bg-cover h-96 w-96 slide-bottom1"></div>
      <div className="bg-[url('/src/assets/Ellipse2.png')] absolute top-0 -right-28 bg-cover h-96 w-96 slide-bottom1"></div>
      <div className="bg-[url('/src/assets/Ellipse3.png')] absolute top-0 left-0 bg-cover h-28 w-16 slide-bottom2"></div>
      <div className="bg-[url('/src/assets/Ellipse4.png')] absolute top-0 right-0 bg-cover h-20 w-10 slide-bottom"></div>

      {/* </div> */}
    </div>
  );
}

export default App;
