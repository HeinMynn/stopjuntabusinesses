import React from "react";

function NotFound(props) {

  return (
    <div className="w-full max-w-4xl px-2 mx-auto text-center">
      <h3
        className="font-bold text-red-400 text-xl text-center font-google-font"
      >ERROR 404!</h3>
      <div className="leading-7 mb-4 font-google-font text-red-700">
        <div className="notfound relative text-4xl md:text-5xl font-black mb-7">
          Democracy Not Found.
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
        </div>
        <br />
        <span className="text-sm text-black dark:text-gray-300">
          ညာဖက်ခလုတ်ကို နှိပ်ပြီး ဆဲရင် မူလစာမျက်နှာကို ပြန်ရောက်ပါမယ်။ <br />
          ဘယ်ဖက်က ခလုတ်ကို နှိပ်ပြီး ဆဲရင်လည်း တူတူပါပဲ။ <br />
          ဒါပေမယ့် သူက အနီရောင်။
        </span>
      </div>
      <span>
        <a
          href="/"
          className="bg-red-500 text-white font-bold px-6 py-2 mr-4 rounded-md hover:bg-red-800"
        >
          Mad A Loe MAL
        </a>
        <a
          href="/"
          className="bg-blue-500 text-white font-bold px-6 py-2 rounded-md hover:bg-blue-800"
        >
          MAL Mad A Loe
        </a>
      </span>
    </div>
  );
}

export default NotFound;
