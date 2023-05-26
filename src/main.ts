import {createApp} from "vue";
import App from "./App.vue";

/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
import router from "./router";
import store from "./store";

import i18n from "@/core/plugins/i18n";
import apiInstance from "./plugins/apiInstance.js";
// import vuetify from "./plugins/vuetify.js";

// imports for app initialization
import MockAdapter from "@/core/mock/MockService";
import ApiService from "@/core/services/ApiService";


import {initInlineSvg} from "@/core/plugins/inline-svg";
import {initVeeValidate} from "@/core/plugins/vee-validate";


import Antd from "ant-design-vue";
import VueBarcode from "@chenfengyuan/vue-barcode";

import numbro from "numbro";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import JsonExcel from "vue-json-excel";

import "@/core/plugins/keenthemes";
import "@/core/plugins/prismjs";
import "bootstrap";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.use(store);
app.use(router);

app.use(apiInstance);
app.use(Antd);

app.use(numbro);
app.use(VueGoogleMaps);

app.component(VueBarcode.name, VueBarcode);
app.component("downloadExcel", JsonExcel);

ApiService.init(app);
MockAdapter.init(app);
initInlineSvg(app);
initVeeValidate();

app.use(i18n);
app.mount("#app");
