import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      keyframes: {
        // load: {
        //   "0%": "background-color: #eee",
        //   "50%": "background-color: #eaeaea",
        //   "100%": "background-color: #eee",
        // },
        load: {
          "0%": { transform: "rotate(7deg)" },
          "50%": { transform: "rotate(7deg)" },
          "100%": { transform: "rotate(7deg)" },
        },
      },
      animation: {
        load: "load 1s linear infinite",
      },
    },
  },
});
