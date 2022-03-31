import React from "react";

import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

import "./splashScreen.scss";

import SplashLogo from "../../assets/splashLogo.png";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function SplashScreen() {
  return (
    <div className="splash-screen">
      <img className="splash-logo" src={SplashLogo} alt="Splash screen logo" />
      <PulseLoader color={"#30475e"} css={override} size={15} margin={2} />
    </div>
  );
}
