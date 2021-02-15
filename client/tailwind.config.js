module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        junta:
          "url('https://bn1301files.storage.live.com/y4mtXJT13kO3O77QcIpqL--4xHIS26m1Aq7TV9uitXduzQmPy06VLpbW8kQ5VlDRlOPqHMsgQf17Jg4bwQc0n3NTOe45LswZ09JQPWG0bI3sc9cmmqVOF6pDxjitcmNuM7Fwv0j5M1zoWj5fBecgAL6hOz9siQzub0c7DyvG-dVZeE?width=1440&height=1440&cropmode=none')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
