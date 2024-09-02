import React, { memo } from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = memo(() => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full xl:w-full 2xl:w-5/6">
        <div className="flex flex-col py-4 px-6">{<Outlet />}</div>
      </div>
    </div>
  );
});

export default DefaultLayout;
