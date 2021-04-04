import React, { useContext, useState } from "react";
import {
  FaBars,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
import useDarkMode from "../Parts/DarkMode";
// import { ChangeLang } from "../Parts/ChangeLang";

function Navbar(props) {
  const LoggedStatus = props.loggedIn;
  const [isOpen, setOpen] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();
  const [locale, setLocale] = useContext("ChangeLang");
  const [langOpen, setLangOpen] = useState(false);

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
                <FaBars
                  className="w-8 h-auto text-white cursor-pointer"
                  onClick={toggle}
                />
              </div>
              <aside
                className={`transform top-0 left-0 w-64 text-gray-800 bg-white dark:text-white dark:bg-gray-800 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
              >
                <FaTimes
                  className="w-5 h-auto float-right mt-2 mr-2 text-white bg-red-500 cursor-pointer"
                  onClick={toggle}
                />
                <img
                  className="w-14 block mx-auto py-2"
                  src="/images/logo.png"
                  alt="010221.org"
                />
                <ul className="leading-10 text-sm mt-4 text-center uppercase">
                  <li className="border-b border-t py-2 cursor-pointer">
                    <Popup
                      trigger={
                        locale === "MY" ? (
                          <span>ကျွန်တော်တို့ အကြောင်း</span>
                        ) : (
                          <span>About Us</span>
                        )
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
                          <div className="header text-center text-red-700 border-b py-2 mb-2 text-2xl">
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
                      href="/magazine"
                      target="_blank"
                      rel="noreferrer"
                    >
                      မိုလိုတော့ဗ် စာစဉ် ဖတ်ရန်
                    </a>
                  </li>
                  <li className="border-b py-2">
                    <a
                      href="https://forms.gle/42hirfQ4AkTg13rcA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {locale === "MY"
                        ? "လောက်ကောင် ထည့်မယ်"
                        : "Add Social Punishment"}
                      <FaExternalLinkAlt className="inline-block ml-2" />
                    </a>
                  </li>
                  <li className="border-b py-2">
                    <a
                      href="https://forms.gle/mnqJ37yqo2cUaJZE6"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {locale === "MY"
                        ? "အချက်အလက် ပြင်မယ်"
                        : "Notice the wrong fact?"}
                      <FaExternalLinkAlt className="inline-block ml-2" />
                    </a>
                  </li>
                  <li className="border-b py-2">
                    <a
                      href="https://www.heroesofmyanmar.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {locale === "MY"
                        ? "ကျဆုံးသူရဲကောင်းများ"
                        : "Fallen Heroes"}
                      <FaExternalLinkAlt className="inline-block ml-2" />
                    </a>
                  </li>

                  <li className="border-b py-2">
                    <a
                      href="https://www.crphmyanmar.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      CRPH Website
                      <FaExternalLinkAlt className="inline-block ml-2" />
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      setTheme(colorTheme);
                      localStorage.theme = colorTheme;
                    }}
                  >
                    <div className="wrapper bg-gray-300 dark:bg-gray-600 overflow-hidden w-1/2 mx-auto rounded-2xl mt-4 shadow-inner cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className={`light mr-4 w-10 h-auto inline-block mx-auto transition-all transform duration-150 ease-in-out 
                        ${
                          colorTheme === "dark"
                            ? "-translate-y-full"
                            : "translate-y-0"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className={`dark w-10 inline-block h-auto mx-auto overflow-hidden z-30 transition-all transform duration-150 ease-in-out 
                        ${
                          colorTheme === "dark"
                            ? "translate-y-0"
                            : "translate-y-full"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    </div>
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
                    {locale === "MY" ? "မူလစာမျက်နှာ" : "Home"}
                  </NavLink>

                  <NavLink
                    to="/juntabusinesses"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    activeClassName="active"
                  >
                    {locale === "MY"
                      ? "ရှောင်ရန် လုပ်ငန်းများ"
                      : "Military Businesses"}
                  </NavLink>
                  <NavLink
                    to="/cdm"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:bg-gray-900"
                    activeClassName="active"
                  >
                    {locale === "MY"
                      ? "CDM ထောက်ပံ့ရေး"
                      : "CDM Supporting Teams"}
                  </NavLink>
                  <NavLink
                    to="/publicshame"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:bg-gray-900"
                    activeClassName="active"
                  >
                    {locale === "MY" ? "လောက်ကောင်များ" : "Social Punishment"}
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
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
