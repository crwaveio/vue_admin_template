export default {
    namespaced: true,
    state: {
        username:"",
        password:"",
        logged_in:0
    },
    getters: {},
    mutations: {
        auth_user(state,user) {
            state.username = user.username;
            state.password=user.password;
            state.logged_in=1

        },
        logout(state){
            state.username = '';
            state.password='';
            state.logged_in=0
        }

    },
    actions: {},
    modules: {}
}
