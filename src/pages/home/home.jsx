import React from "react";
import ResponsiveAppBar from "../../components/header/header";

//Css
import "./home.scss";

//Libraries
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

//Assets
import LottieAnimation from "../../assets/lottie_animation.json";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="home">
      <header>
        <ResponsiveAppBar />
      </header>
      <section className="home-cntnt">
        <div className="txt">
          <div>
            <h1>
              Lets organise your <br /> day
            </h1>
            <span>
              To do list help you organise your day and perform tasks
              more efficiently
            </span>
            <Link to={'/add_new'}>Get Started</Link>
          </div>
        </div>
        <div className="img">
          <div className="animation">
            <Lottie options={defaultOptions} animationData={LottieAnimation} />
          </div>
        </div>
      </section>
    </div>
  );
}
