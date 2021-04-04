import React from "react";
export const Lang = {
  EN: {
    lang: "en-US",
  },
  MY: {
    lang: "my-MM",
  },
};

export const ChangeLang = React.createContext([Lang.MY, () => {}]);
