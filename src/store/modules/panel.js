export default {
    namespaced: true,
    state: {
        lang: "en",
        langindex:0
    },
    getters: {},
    mutations: {
        setLang(state,lang) {
            state.lang = lang.langCode;
            state.langindex=lang.index;

        }
    },
    actions: {},
    modules: {}
}