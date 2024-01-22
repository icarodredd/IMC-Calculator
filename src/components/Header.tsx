import * as React from "react";

function Header() {
  return (
    <div className="flex justify-center p-10">
      <div className=" w-3/4 rounded-md flex justify-center p-4 red-950 bg-black border-white border">
        <h1 className="font-bold text-3xl text-white">IMC Calculator</h1>
      </div>
    </div>
  );
}

export default Header;
