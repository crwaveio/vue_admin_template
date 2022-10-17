import tr from './locales/tr.js'
import en from './locales/en.js'
import store from "@/store/index";


export const defaultLocale = store.state.panel.lang ? store.state.panel.lang : "tr"

export const languages = {
    tr: tr,
    en:en

}
