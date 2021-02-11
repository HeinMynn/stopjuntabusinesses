import React from "react";

function Home(props) {
  return (
    <div className=" w-full h-full">
      {/* <div className="mainBanner block bg-red-500 w-full h-96 text-center">
        <h3 className="font-extrabold text-lg py-4">
          စစ်အာဏာရှင်စနစ် ကျဆုံးပါစေ
        </h3>
      </div> */}
      <div class="container mx-auto">
        <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          {/* left */}
          <div class="flex flex-row-reverse md:contents">
            <div class="bg-red-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">
                စစ်တပ်မှ အဓမ္မ အာဏာသိမ်းယူ
              </h3>
              <p class="leading-tight text-justify">
                စစ်တပ်မှ နိုင်ငံတော်သမ္မတ ဦးဝင်းမြင့်နှင့် အတိုင်ပင်ခံ
                ဒေါ်အောင်ဆန်းစုကြည်ကို ဖမ်းဆီးပြီး နိုင်ငံတော်အာဏာကို အဓမ္မ
                သိမ်းယူ။ ယာယီသမ္မတ ဦးမြင့်ဆွေမှ နိုင်ငံတော်အာဏာကို
                မင်းအောင်လှိုင်ထံ ပေးအပ်။
              </p>
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-16 flex items-center justify-center">
                <div class="h-full w-1 bg-red-800 pointer-events-none"></div>
              </div>
              <div class="flex flex-col justify-center w-16 h-16 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                <span>1 Feb</span>
              </div>
            </div>
          </div>
          {/* right */}
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="h-full w-16 flex items-center justify-center">
                <div class="h-full w-1 bg-red-800 pointer-events-none"></div>
              </div>
              <div class="flex flex-col justify-center w-16 h-16 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                <span>2 Feb</span>
              </div>
            </div>
            <div class="bg-red-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">
                သံပုန်းတီး လှုပ်ရှားမှု စတင်
              </h3>
              <p class="leading-tight text-justify">
                စစ်အာဏာရှင်စနစ်ကို မကျေနပ်ကြောင်း ပြသသည့်အနေဖြင့် ပြည်သူများမှ ည
                (၈) နာရီတွင် သံပုန်းတီး
              </p>
            </div>
          </div>
          {/* left */}
          <div class="flex flex-row-reverse md:contents">
            <div class="bg-red-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">
                စစ်အုပ်ချုပ်ရေးအဖွဲ့ဖွဲ့
              </h3>
              <ul className="list-disc ml-2">
                <li>
                  စစ်အာဏာရှင်များမှနိုင်ငံတော် စီမံအုပ်ချုပ်ရေးကောင်စီကို
                  ၎င်းတို့၏ သဘောဆန္ဒအလျောက်ဖွဲ့စည်းပြီး ဝန်ကြီးများ အသစ်ခန့်အပ်။
                </li>
                <li>
                  သမ္မတဦးဝင်းမြင့်နှင့် ဒေါ်အောင်ဆန်းစုကြည်ကို တရားစွဲဆို။
                </li>
                <li>
                  စည်ပင်ရိပ်သာတွင် ကျန်ရစ်သော ကိုယ်စားလှယ်များမှ လွှတ်တော် စတင်။
                </li>
                <li>ဆရာဝန်များမှ Civil Disobedience Movement စတင်။</li>
              </ul>
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-16 flex items-center justify-center">
                <div class="h-full w-1 bg-red-800 pointer-events-none"></div>
              </div>
              <div class="flex flex-col justify-center w-16 h-16 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                <span>3 Feb</span>
              </div>
            </div>
          </div>
          {/* left */}
          <div class="flex flex-row-reverse md:contents">
            <div class="bg-red-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">
                Social Media များကို စတင် ပိတ်ဆို့
              </h3>
              <ul className="list-disc ml-2">
                <li>Facebook လူမှုကွန်ယက်ကို စတင် ပိတ်ဆို့။ </li>
                <li>မန္တလေးတွင် ပထမဆုံး လူထုလှုပ်ရှားမှု စတင်။</li>
                <li>
                  မင်းအောင်လှိုင်နှင့် ကုန်သည်/စက်မှု အသင်းချုပ်မှ
                  လုပ်ငန်းရှင်များ တွေ့ဆုံ။
                </li>
              </ul>
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-16 flex items-center justify-center">
                <div class="h-full w-1 bg-red-800 pointer-events-none"></div>
              </div>
              <div class="flex flex-col justify-center w-16 h-16 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                <span>4 Feb</span>
              </div>
            </div>
          </div>
          {/* right */}
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="h-full w-16 flex items-center justify-center">
                <div class="h-full w-1 bg-red-800 pointer-events-none"></div>
              </div>
              <div class="flex flex-col justify-center w-16 h-16 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                <span>5 Feb</span>
              </div>
            </div>
            <div class="bg-red-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">
                ပြည်ထောင်စုလွှတ်တော် ကိုယ်စားပြုကော်မတီဖွဲ့စည်း
              </h3>
              <ul className="list-disc ml-2">
                <li>
                  ရွေးကောက်ခံ ကိုယ်စားလှယ်များမှ​
                  ပြည်ထောင်စုလွှတ်တော်ကိုယ်စားပြု ကော်မတီ - Committee
                  Representing Pyidaungsu Hluttaw(CRPH) ကို စတင်ဖွဲ့စည်း။
                </li>
                <li>CDM လှုပ်ရှားမှု အရှိန်မြင့်တက်။</li>
                <li>
                  တပ်မတော်ဆေးရုံများမှ အရပ်သားများ လက်ခံကုသပေးမည်ဟု ကြေညာ။
                </li>
              </ul>
            </div>
          </div>
          {/* left */}
          <div class="flex flex-row-reverse md:contents">
            <div class="bg-red-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">
                မြို့ကြီးများတွင် ဆန္ဒထုတ်ဖော်မှုများ စတင်
              </h3>
              <ul className="list-disc ml-2">
                <li>
                  ရန်ကုန်၊ မန္တလေး၊ နေပြည်တော် မြို့ကြီးများတွင် လမ်းပေါ်ထွက်၍
                  စစ်အာဏာရှင်ကို ဆန့်ကျင်ကြောင်း ပြသကြ
                </li>
                <li>အင်တာနက်လိုင်းများ အားလုံးကို ဖြတ်တောက်</li>
              </ul>
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-16 flex items-center justify-center">
                <div class="h-full w-1 bg-red-800 pointer-events-none"></div>
              </div>
              <div class="flex flex-col justify-center w-16 h-16 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                <span>6 Feb</span>
              </div>
            </div>
          </div>
          {/* right */}
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="h-full w-16 flex items-center justify-center">
                <div class="h-full w-1 bg-red-800 pointer-events-none"></div>
              </div>
              <div class="flex flex-col justify-center w-16 h-16 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                <span>7 Feb</span>
              </div>
            </div>
            <div class="bg-red-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">
                တိုင်းဒေသကြီး၊ ပြည်နယ်လွှတ်တော်များ စတင်
              </h3>
              <ul className="list-disc ml-2">
                <li>ရန်ကုန်တိုင်းဒေသကြီး လွှတ်တော် စတင်ခေါ်ယူ</li>
                <li>
                  ရန်ကုန်၊ မန္တလေး၊ မြောင်းမြ၊ ပုသိမ်၊ ပေါင်းတည်၊ မကွေး အပါအဝင်
                  မြန်မာနိုင်ငံအနှံ့ လူထုဆန္ဒပြပွဲများ အရှိန်မြင့်တက်
                </li>
                <li>မြဝတီမြို့တွင် ဆန္ဒပြပွဲကို သေနတ်ပစ်ဖောက် ဖြိုခွဲ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
