import React from "react";

function NotFound(props) {

  return (
    <div className="w-full max-w-4xl px-2 mx-auto text-center">
      <h3 className="font-bold text-red-400 text-3xl text-center">
        404 Not Found.
      </h3>
      <p className="leading-7 mb-4">
        သင်ရှာနေသော စာမျက်နှာကို မတွေ့ရပါ။ <br />
        <span className="text-sm dark:text-gray-300">
          ညာဖက်က ခလုတ်ကို နှိပ်ရင် မူလစာမျက်နှာကို ပြန်ရောက်ပါမယ်။ ဘယ်ဖက်က
          ခလုတ်ကို နှိပ်ရင်လည်း တူတူပါပဲ။ ဒါပေမယ့် သူက အနီရောင်။
        </span>
      </p>
      <span>
        <a
          href="/"
          className="bg-red-500 px-6 py-2 mr-4 rounded-md hover:bg-red-800"
        >
          Mad A Loe MAL
        </a>
        <a
          href="/"
          className="bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-800"
        >
          Mad A Loe MAL
        </a>
      </span>
    </div>
  );
}

export default NotFound;
