<template>
  <div class="nav-wrapper">
    <div class="nav-container">
      <nav>
        <h3>Chat App</h3>
        <div class="links" v-if="user">
          <p class="links-text">Welcome {{ user.displayName }}</p>
          <button @click="handleClick">Logout</button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import getUser from "../composables/getUser"
import useLogout from "../composables/useLogout"
import { useRouter } from "vue-router"

export default {
  setup(props, context) {
    const { user } = getUser()
    const { logout } = useLogout()
    const router = useRouter()

    const handleClick = async () => {
      await logout()

      //router.push({ name: "home" })
    }

    return { user, handleClick }
  },
}
</script>

<style></style>
