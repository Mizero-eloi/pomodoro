import React, { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../context/SettingsContext";

function CountdownAnimation({ key, timer, animate, children }) {
  const { stopAnimate } = useContext(SettingsContext);
  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={[
        ["#FE6F68", 0.33],
        ["#FE6F68", 0.33],
        ["#FE6F68", 0.33],
      ]}
      strokeWidth={6}
      size={220}
      trailColor="#151932"
      onComplete={() => {
        stopAnimate();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
}

export default CountdownAnimation;
