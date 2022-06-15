import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
//firebase imports for page refresh
import { auth } from "./firebase/config"
import { onAuthStateChanged } from "firebase/auth"

import "./assets/scss/main.scss"

let app

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App).use(router).mount("#app")
  }
})
