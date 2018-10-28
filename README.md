# Auth-Me-Plug

## Instalation

You will need to have **Vue** and **Vuex** installed, as well as a `store` where to add the necessary Vuex `modules` for the components to function. Also, this package uses `Axios` to comunicate with the server that you might be using to authnticate your users.


## Usage

Add the modules `server` and `user` to the `store`, like this:

```javascript

import Vue from 'vue'
import Vuex from 'vuex'

import users from '@/auth-my-vue/modules/users'
import server from '@/auth-my-vue/modules/server'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        users,
        server
    }
})

```