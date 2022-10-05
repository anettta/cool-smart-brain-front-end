import React from "react";

const Rank = ({ name, entries }) => {
  const timeOrTimes = entries > 1 ? "times" : "time";
  return (
    <div className="flex justify-center">
      <div className="white f5 w-60 ">
        {`${name.toUpperCase()}, THANK YOU FOR TRYING ME FOR ${entries} ${timeOrTimes.toLocaleUpperCase()} `}
      </div>
      {/* <div className="white f1">{entries}</div> */}
    </div>
  );
};

export default Rank;
