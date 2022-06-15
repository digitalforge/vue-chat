<template>
  <div class="chatroom container">
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import { ref } from "vue"
import getUser from "../composables/getUser"
import { useRouter } from "vue-router"
import { watch } from "vue"

import NewChatForm from "../components/NewChatForm.vue"
import ChatWindow from "../components/ChatWindow.vue"

export default {
  components: { NewChatForm, ChatWindow },
  setup(props, context) {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "home" })
      }
    })
  },
}
</script>

<style></style>
