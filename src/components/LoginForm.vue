<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button v-if="isPending === false">Login</button>
    <button disabled v-if="isPending === true">Logging in ...</button>
  </form>
</template>

<script>
import { ref } from "vue"
import useLogin from "@/composables/useLogin"
import { useRouter } from "vue-router"

export default {
  setup(props, context) {
    const email = ref("")
    const password = ref("")
    const { login, error, isPending } = useLogin()
    const router = useRouter()

    const handleSubmit = async () => {
      const res = await login(email.value, password.value)
      if (!error.value) {
        //router.push({ name: "chatroom" })
        context.emit("signin")
      }
    }

    return { email, password, error, handleSubmit, isPending }
  },
}
</script>

<style></style>
