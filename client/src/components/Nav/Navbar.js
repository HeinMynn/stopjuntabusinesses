import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Popup from "reactjs-popup";

function Navbar(props) {
  const LoggedStatus = props.loggedIn;
  return (
    <div className="fixed w-full shadow-md z-50 top-0">
      <nav className="bg-red-800">
        <div className="lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center justify-between h-31">
            <div className="block md:flex lg:flex flex-grow items-center xs:mx-auto">
              <div className="mx-auto lg:self-center lg:flex-shrink-0 text-center">
                <Link to="/">
                  <img
                    className="h-15 w-10 py-1 inline-block"
                    src="/images/logo.png"
                    alt="010221.org"
                  />
                  <h1 className="inline-block md:hidden ml-4 text-2xl tracking-widest font-black text-white text-center">
                    010221.org
                  </h1>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    exact
                    to="/"
                    className="px-3 py-2 rounded-md text-sm font-medium text-white focus:bg-gray-900"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/juntabusinesses"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    activeClassName="active"
                  >
                    Junta Business List
                  </NavLink>

                  <NavLink
                    to="/cdm"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:bg-gray-900"
                    activeClassName="active"
                  >
                    CDM Information Center
                  </NavLink>
                  <NavLink
                    to="/publicshame"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:bg-gray-900"
                    activeClassName="active"
                  >
                    Shame
                  </NavLink>
                  {LoggedStatus ? (
                    <NavLink
                      to="/logout"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:bg-gray-900"
                      activeClassName="active"
                    >
                      Log Out
                    </NavLink>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="right hidden flex-1 justify-self-end md:block">
                <div className="about">
                  <Popup
                    trigger={
                      <span>
                        <FaInfoCircle className="float-right text-white cursor-pointer focus:outline-none" />
                      </span>
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="modal bg-white dark:bg-gray-700 px-6 py-2 shadow-md rounded-md">
                        <button
                          className="close focus:outline-none float-right"
                          onClick={close}
                        >
                          &times;
                        </button>
                        <div className="header text-center text-2xl dark:text-white">
                          01 02 21 . org
                        </div>
                        <div className="content px-6 leading-7 tracking-wide dark:text-white">
                          010221.org website သည်
                          မြန်မာ့နွေဦးတော်လှန်ရေးကာလအတွင်း အောက်ပါ
                          အချက်အလက်များကို စုစည်းဖော်ပြပေးထားပါသည်။
                          <ol className="list-decimal">
                            <li>
                              ထင်ရှားသောအဖြစ်အပျက်များကို မှတ်တမ်းတင်ခြင်း၊
                            </li>
                            <li>
                              CDM ဝန်ထမ်းများကို အထောက်အပံ့ပေးသည့်
                              အဖွဲ့အစည်းများ၏ facebook စာမျက်နှာများကို
                              မြို့နယ်အလိုက် စုစည်းပေးခြင်း၊
                            </li>
                            <li>
                              စစ်တပ်၏ စီးပွားရေး လုပ်ငန်းများကို ရှောင်နိုင်ရန်
                              စုစည်းပေးခြင်း၊
                            </li>
                            <li>
                              စစ်အာဏာသိမ်းလုပ်ရပ်ကို ထောက်ခံသူများ၊ ပြည်သူကို
                              အနိုင်ကျင့် နှိပ်စက်သူများကို Social Punishment
                              ပြုလုပ်နိုင်ရန် စုစည်းပေးခြင်း။
                            </li>
                          </ol>
                          <br />
                          အချက်အလက်များ ပေးပို့လိုပါက contact@010221.org သို့
                          email ပေးပို့ အကြောင်းကြားနိုင်ပါသည်။
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
