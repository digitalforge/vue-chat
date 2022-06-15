import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import Chatroom from "../views/Chatroom.vue"

import { auth } from "../firebase/config"

const requireAuth = (to, from, next) => {
  let user = auth.currentUser

  if (!user) {
    next({ name: "home" })
  } else {
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  let user = auth.currentUser

  if (user) {
    next({ name: "chatroom" })
  } else {
    next()
  }
}

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/chatroom",
    name: "chatroom",
    component: Chatroom,
    beforeEnter: requireAuth,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
