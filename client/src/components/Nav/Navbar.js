import React, { useState } from "react";
import {
  FaBars,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
import useDarkMode from "../Parts/DarkMode";

function Navbar(props) {
  const LoggedStatus = props.loggedIn;
  const [isOpen, setOpen] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  function toggle(e) {
    if (isOpen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }
  return (
    <div className="fixed w-full shadow-md z-50 top-0">
      <nav className="bg-red-800">
        <div className="lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center justify-between h-31">
            <div className="flex lg:flex flex-grow items-center xs:mx-auto">
              <div className="setting">
                <FaBars className="w-8 h-auto" onClick={toggle} />
              </div>
              <aside
                className={`transform top-0 left-0 w-64 text-white bg-gray-800 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
              >
                <FaTimes className="w-5 h-auto right" onClick={toggle} />
                <img
                  className="w-14 block mx-auto py-2"
                  src="/images/logo.png"
                  alt="010221.org"
                />
                <ul className="leading-10 text-xl mt-4 text-center uppercase">
                  <li className="border-b border-t py-2">
                    <Popup
                      trigger={<span>ကျွန်တော်တို့ အကြောင်း</span>}
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal bg-white dark:bg-gray-500 px-6 py-2 shadow-md rounded-md">
                          <button
                            className="close focus:outline-none float-right"
                            onClick={close}
                          >
                            &times;
                          </button>
                          <div className="header text-center text-red-500 border-b py-2 mb-2 text-2xl">
                            010221.org
                          </div>
                          <div className="content px-6 leading-7 dark:text-white tracking-wide">
                            မြန်မာ့နွေဦးတော်လှန်ရေးကာလအတွင်း အောက်ပါ
                            အချက်အလက်များကို စုစည်းဖော်ပြပေးထားပါသည်။
                            <ol className="list-decimal">
                              <li>
                                ထင်ရှားသောအဖြစ်အပျက်များကို မှတ်တမ်းတင်ခြင်း၊
                              </li>
                              <li>
                                CDM Support facebook စာမျက်နှာများကို
                                မြို့နယ်အလိုက် စုစည်းပေးခြင်း၊
                              </li>
                              <li>
                                စစ်တပ်၏ စီးပွားရေး လုပ်ငန်းများကို
                                ရှောင်နိုင်ရန် စုစည်းပေးခြင်း၊
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
                  </li>
                  <li className="border-b py-2">
                    <a
                      href="https://forms.gle/42hirfQ4AkTg13rcA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      လောက်ကောင် ထည့်မယ်
                      <FaExternalLinkAlt className="inline-block ml-2" />
                    </a>
                  </li>
                  <li className="border-b py-2">အချက်အလက် ပြင်မယ်</li>
                  <li onClick={() => setTheme(colorTheme)}>
                    {colorTheme === "light" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="30%"
                        height="auto"
                        className="block mx-auto border mt-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="30%"
                        height="auto"
                        className="block mx-auto"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    )}
                  </li>
                </ul>
              </aside>
              <div
                className={`transform top-0 right-0 w-full bg-black opacity-50 fixed h-full overflow-auto
                ${!isOpen ? "hidden" : ""}`}
                onClick={toggle}
              ></div>
              <div className="lg:self-center lg:flex-shrink-0 flex-auto sm:flex-0 text-center">
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
                        <FaInfoCircle className="float-right text-white cursor-pointer focus:outline-none w-8 h-auto" />
                      </span>
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="modal bg-white dark:bg-gray-500 px-6 py-2 shadow-md rounded-md">
                        <button
                          className="close focus:outline-none float-right"
                          onClick={close}
                        >
                          &times;
                        </button>
                        <div className="header text-center text-red-500 border-b py-2 mb-2 text-2xl">
                          010221.org
                        </div>
                        <div className="content px-6 leading-7 dark:text-white tracking-wide">
                          မြန်မာ့နွေဦးတော်လှန်ရေးကာလအတွင်း အောက်ပါ
                          အချက်အလက်များကို စုစည်းဖော်ပြပေးထားပါသည်။
                          <ol className="list-decimal">
                            <li>
                              ထင်ရှားသောအဖြစ်အပျက်များကို မှတ်တမ်းတင်ခြင်း၊
                            </li>
                            <li>
                              CDM Support facebook စာမျက်နှာများကို
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
