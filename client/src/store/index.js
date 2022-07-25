import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu.js'
import { auth } from './modules/auth';
import feedback from './modules/feedback';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        feedback,
        menu,
        auth,

    }
})