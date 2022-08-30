import React from "react";

function HeaderBar() {
  return (
    <>
      <div className="flex border-b border-slate-300 h-[64px] justify-between bg-white items-center">
        <div className="w-[10%] bg-blue-500 h-full flex justify-center items-center">
          <h1 className="text-white text-2xl">Logo</h1>
        </div>
        <div className="mx-4 flex gap-1">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full w-60 p-2 border border-slate-300"
          />
          <button className="border py-2 px-4 bg-blue-500 text-white rounded">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default HeaderBar;
