import * as React from "react";
import useInterval from "use-interval";
import { FcAlarmClock } from "react-icons/fc";

const TimeClock = () => {
  const [time, setTime] = React.useState(" ?? : 00 : 00 ");

  const date = new Date();

  useInterval(() => {
    setTime(date.toLocaleTimeString());
  }, 1000);

  return (
    <div>
      <FcAlarmClock style={{ marginBottom: "-15", marginRight: "10" }} />
      {time}
    </div>
  );
};

export default TimeClock;
