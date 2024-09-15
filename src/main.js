import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";
import { WagmiPlugin } from "@wagmi/vue";
import { createApp } from "vue";
import App from "./App.vue";
import AOS from "aos";
import { config } from "./wagmi";
import router from "./router";

import "aos/dist/aos.css";
AOS.init();

const queryClient = new QueryClient();

createApp(App).use(WagmiPlugin, { config }).use(router).use(VueQueryPlugin, { queryClient }).mount("#app");
