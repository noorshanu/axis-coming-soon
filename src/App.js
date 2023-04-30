import { useEffect, useState } from "react";
import Top from "./assets/top.svg";
import Logo from "./assets/logo.svg";
import ellipse1 from "./assets/Ellipse1.png";
import Social from "./Components/Social";
// import "./index.css";
import OneSignal from 'react-onesignal';

function App() {
  useEffect (() => {
    OneSignal.init({
      // appId: "4adb1626-9939-4d4c-8f5c-92cce7be454a",
      appId: "6342aaf4-7319-4569-b711-f4bb2d2feb3e",
    
    });
  })
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-05-08T18:20:00+05:30") - +new Date();
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
    <div className="main relative">
      <img src={Top} alt="" className="top-img" />
      <div className="sub-main h-screen">
        <div className="header h-[286px]  sm:h-auto">
          <div className="logo-div slide-top">
            <img src={Logo} alt="" />
          </div>
          <div className="coming">
            <h1 className="text-3xl sm:text-5xl md:text-7xl">Coming Soon</h1>
            <p className="md:w-[70%] mx-auto slide-to-bottom">
              Discover a new level of financial freedom with our innovative
              decentralized solutions
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
            <p className="flex flex-wrap space-y-2 justify-center items-center">
              <span className="btn-gradient mt-2  w-[130px] h-[55px] sm:w-[150px] sm:h-[63px]  md:w-[250px] md:h-[70px] slide-fwd-left">
                <span className="font-extrabold"> {timeLeft.days} </span>{" "}
                <span className="font-bold ml-1.5 text-black opacity-60">
                  {" "}
                  Days{" "}
                </span>
              </span>

              <span className="colon md:mx-2.5 sm:mx-1.5 mx-1">:</span>
              <span className="btn-gradient  w-[130px] h-[55px] sm:w-[150px] sm:h-[63px]  md:w-[250px] md:h-[70px] scale-up-center">
                <span className="font-extrabold"> {timeLeft.hours} </span>{" "}
                <span className="font-bold ml-1.5 text-black opacity-60">
                  {" "}
                  hours{" "}
                </span>
              </span>

              <span className="colon md:mx-2.5 sm:mx-1.5 mx-1">:</span>

              <span className="btn-gradient  w-[130px] h-[55px] sm:w-[150px] sm:h-[63px]  md:w-[250px] md:h-[70px] slide-fwd-right delay-1000">
                <span className="font-extrabold"> {timeLeft.minutes} </span>{" "}
                <span className="font-bold ml-1.5 text-black opacity-60">
                  {" "}
                  minutes{" "}
                </span>
              </span>
            </p>
          ) : (
            <p>Time is up 🔥</p>
          )}
        </div>
          <Social />
      </div>
      {/* <div className="relative top-0 left-0 right-0 bottom-0"> */}
      <img
        src={ellipse1}
        className=" absolute top-0 right-0 left-0 slide-bottom-main h-auto w-screen z-10"
      />
      <div className="bg-[url('/src/assets/Ellipse1.png')] absolute top-0 -left-44 bg-cover h-80 w-80 md:h-96 md:w-96 slide-bottom1"></div>
      <div className="bg-[url('/src/assets/Ellipse2.png')] absolute top-0 -right-28 bg-cover h-72 w-72 md:h-96 md:w-96 slide-bottom1"></div>
      <div className="bg-[url('/src/assets/Ellipse3.png')] absolute top-0 -left-7 bg-cover h-16 w-16 bg-no-repeat slide-bottom2"></div>
      <div className="bg-[url('/src/assets/Ellipse4.png')] absolute top-0 -right-12 bg-cover h-24 w-24 slide-bottom5"></div>

      {/* </div> */}
    </div>
  );
}

export default App;
