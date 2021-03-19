module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      cardContent: "9rem",
      cardHeader: "5rem",
      full: "100%",
      screen: "100vh",
    },
    extend: {
      backgroundImage: (theme) => ({
        junta:
          "url('https://bn1301files.storage.live.com/y4mtXJT13kO3O77QcIpqL--4xHIS26m1Aq7TV9uitXduzQmPy06VLpbW8kQ5VlDRlOPqHMsgQf17Jg4bwQc0n3NTOe45LswZ09JQPWG0bI3sc9cmmqVOF6pDxjitcmNuM7Fwv0j5M1zoWj5fBecgAL6hOz9siQzub0c7DyvG-dVZeE?width=1440&height=1440&cropmode=none')",
      }),
    },
  },
  variants: {
    extend: {
      borderWidth: ["last"],
    },
  },
  plugins: [],
};
