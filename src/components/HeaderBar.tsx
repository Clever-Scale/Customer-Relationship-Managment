import React from "react";

function HeaderBar() {
  return (
    <>
      <div className="flex border-b border-slate-300 h-[64px] justify-between bg-white items-center">
        <div className="w-[10%] bg-blue-500 h-full flex justify-center items-center">
          <h1 className="text-white text-2xl">Logo</h1>
        </div>
        <div>
          <h1>Search Bar</h1>
        </div>
      </div>
    </>
  );
}

export default HeaderBar;
