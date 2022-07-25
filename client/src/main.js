import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import Breadcrumbs from './components/bread-crumbs.vue'
import VueFeather from 'vue-feather';
import firebase from 'firebase/app';
import 'firebase/firestore';

import VueApexCharts from 'vue-apexcharts';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
//import CKEditor from "@ckeditor/ckeditor5-vue";
import { VueEditor } from "vue2-editor";
import StarRating from "vue-star-rating";

import VueDropzone from 'vue2-dropzone';
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import Toasted from 'vue-toasted';
import moment from 'moment'
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
import vueNumeralFilterInstaller from 'vue-numeral-filter';
import {
    ValidationObserver,
    ValidationProvider,
    extend,
    localize,

} from "vee-validate";
import ZoomOnHover from "vue-zoom-on-hover";
Vue.use(ZoomOnHover);
import env from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";
// Multi language add
import { defaultLocale, localeOptions } from './constants/config'
import VueI18n from 'vue-i18n';
// import i18n translation languages
import en from './locales/en.json';
import es from './locales/es.json';
import pt from './locales/pt.json';
import fr from './locales/fr.json';


Object.keys(rules).forEach((rule) => {
    extend(rule, rules[rule]);
});
localize("en", env);
// config for firebase
import config from '../config.json'

Vue.use(Toasted, {
    iconPack: 'fontawesome'
});

Vue.prototype.moment = moment

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.use(VueI18n);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component('VueEditor', VueEditor);
Vue.component('VueDropzone', VueDropzone);
Vue.use(VueDropzone);

Vue.component('StarRating', StarRating);
Vue.use(VueEditor);
//Vue.use(CKEditor);
Vue.config.productionTip = false
Vue.use(BootstrapVue);
import './assets/scss/app.scss'
import './assets/scss/admin.scss'
Vue.component('Breadcrumbs', Breadcrumbs);
Vue.use(VueFeather);
Vue.use(require('vue-chartist'))

Vue.use(vueNumeralFilterInstaller, { locale: 'en-gb' });
Vue.use(VueSweetalert2);

firebase.initializeApp(config.firebase);
const messages = { en: en, es: es, pt: pt, fr: fr };
const locale = (localStorage.getItem('currentLanguage') && localeOptions.filter(x => x.id === localStorage.getItem('currentLanguage')).length > 0) ? localStorage.getItem('currentLanguage') : defaultLocale;
const i18n = new VueI18n({
    locale: locale,
    fallbackLocale: 'en',
    messages,
    silentTranslationWarn: true
});
export const db = firebase.firestore();

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')