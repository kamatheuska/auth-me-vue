// Import vue component
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import server from './modules/server'
import users from './modules/users'

// Declare install function executed by Vue.use()
export function install (Vue) {
    if (install.installed) return
    install.installed = true
    Vue.component('Login', Login)
    Vue.component('Signup', Signup)
}

// Create module definition for Vue.use()
const plugin = {
    install
}

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue
}
if (GlobalVue) {
    GlobalVue.use(plugin)
}

// To allow use as module (npm/webpack/etc.) export component
export { Login, Signup, users, server }
