import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { proxy } from "ajax-hook";

proxy({
  onError: (err, handler) => {
    console.group("NPM ajax-hook error:");
    console.log("err.type: ", err.type);

    console.groupEnd();

    handler.next(err);
  },
});

createApp(App).mount("#app");
