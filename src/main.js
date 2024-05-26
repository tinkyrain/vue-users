import {createApp} from 'vue'

import App from './App.vue'
import './style.css';

//MDI
import '@mdi/font/css/materialdesignicons.css'

//routs
import {router} from "./router/index.js";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Pinia
import { createPinia } from 'pinia'

const pinia = createPinia();

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(router)
    .use(pinia)
    .use(vuetify)
    .mount('#app');
