import React from "react";
import { FcSelfServiceKiosk } from "react-icons/fc";

const Content = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-2/5 bg-yellow-500 absolute">
      </div>
      <div className="flex w-20 h-20 rounded-[50%] bg-slate-800 relative m-2">
        <FcSelfServiceKiosk className="m-auto text-5xl" />
      </div>
    </div>
  );
};

export default Content;
