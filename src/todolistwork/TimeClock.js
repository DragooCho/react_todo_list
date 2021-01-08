import * as React from "react";
import useInterval from "use-interval";

const TimeClock = () => {
  const [time, setTime] = React.useState("00:00:00");

  const date = new Date();

  useInterval(() => {
    setTime(date.toLocaleTimeString());
  }, 1000);

  return <div>{time}</div>;
};

export default TimeClock;
