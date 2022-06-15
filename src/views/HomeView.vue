<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @signin="enterChat" />
      <p>
        Not a member? <span @click="showLogin = !showLogin">Sign Up Here</span>
      </p>
    </div>
    <div v-else>
      <h2>Sign Up</h2>
      <SignupForm @signup="enterChat" />
      <p>
        Already a member?
        <span @click="showLogin = !showLogin">Login Here</span>
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SignupForm from "../components/SignupForm.vue"
import LoginForm from "../components/LoginForm.vue"
import { useRouter } from "vue-router"

import { ref } from "vue"

export default {
  name: "HomeView",
  components: { SignupForm, LoginForm },
  setup(props, context) {
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      router.push({ name: "chatroom" })
    }

    return { showLogin, enterChat }
  },
}
</script>
<style lang="scss"></style>
