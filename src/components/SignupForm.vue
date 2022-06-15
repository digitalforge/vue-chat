<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="Display Name"
      v-model="displayName"
    />
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button v-if="!isPending">Sign Up</button>
    <button disabled v-else>Signing Up...</button>
  </form>
</template>

<script>
import { ref } from "vue"
import useSignup from "@/composables/useSignup"
import { useRouter } from "vue-router"

export default {
  setup(props, context) {
    const displayName = ref("")
    const email = ref("")
    const password = ref("")
    const { error, signup, isPending } = useSignup()
    const router = useRouter()

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        context.emit("signup")
      }
    }

    return { displayName, email, password, handleSubmit, error, isPending }
  },
}
</script>

<style></style>
