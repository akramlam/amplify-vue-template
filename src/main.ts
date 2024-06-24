import "./assets/css/themify-icons.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import outputs from "./amplify_outputs.json";
import router from './router/index.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


Amplify.configure(outputs);


createApp(App).use(router).mount("#app");
