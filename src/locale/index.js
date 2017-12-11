import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from 'element-ui/lib/locale/lang/en'
import zh from 'element-ui/lib/locale/lang/zh-CN'
import enUs from './en.js'
import zhCN from './zh.js'

Vue.use(VueI18n)
// let language = window.navigator.language || navigator.browserLanguage
// Create VueI18n instance with options
// const i18n = new VueI18n({
//   locale: 'zh', // language.split('-')[0],  // set locale
//   messages  // set locale messages
// })
export default {
  zh: Object.assign(zhCN, zh),
  en: Object.assign(enUs, en)
}
