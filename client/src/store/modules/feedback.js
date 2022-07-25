

import axios from 'axios'
const API_URL = `${process.env.BASE_URL}/api/c12/`;
const state = {
    feedbacks: [],
    feedback_dv: {}
};
const getters = {
    feedbacksList: state => state.feedbacks,
    feedbacksDv: state => state.feedback_dv
};
const actions = {
    async fetchFeeds({ commit }) {
        const response = await axios.get('http://14.224.129.177:8888/api/c12/getallfeeds');
        commit("setFeeds", response.data)
    },
    async addFeed({ commit }, feedback) {
        const response = await axios.post(`http://14.224.129.177:8888/api/c12/feedbackfromcus`, feedback);
        commit("addNewFeed", response.data)
    },
    /* lấy feedback theo đơn vị */
    async fetchFeedDv({ commit }, madonvi) {
        const response = await axios.get(`http://14.224.129.177:8888/api/c12/getmdvfeeds?madonvi=${madonvi}`);
        commit("setFeed", response.data)
        /* return this.$axios.$get(`/api/docthu/${docthuId}`).then((docthu) => {
            commit("setDocthu", docthu);
            return state.item;
        }); */
    },
    /* async deleteUser({commit}, id){
      await axios.delete(`http://localhost:3000/users/${id}`);
      commit("removeUser", id)
    } */
};
const mutations = {
    setFeeds: (state, feedbacks) => (
        state.feedbacks = feedbacks
    ),
    setFeed: (state, feedback_dv) => (
        state.feedback_dv = feedback_dv
    ),
    addNewFeed: (state, feedback) => state.feedbacks.unshift(feedback),
    /* removeUser: (state, id) => (
        state.users.filter(user => user.id !== id),
        state.users.splice(user => user.id, 1)
    ) */
};
export default {
    state,
    getters,
    actions,
    mutations
}