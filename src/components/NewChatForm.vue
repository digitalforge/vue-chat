<template>
  <form class="chat-form">
    <textarea
      placeholder="Type a message and hit enter to send"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue"
import { timestamp } from "../firebase/config"
import getUser from "../composables/getUser"
import useCollection from "../composables/useCollection"
export default {
  setup(props, context) {
    const message = ref("")
    const { user } = getUser()
    const { addDocument, error, isPending } = useCollection("messages")
    const handleSubmit = async () => {
      let chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp,
      }

      addDocument(chat)
      if (!error.value) {
        message.value = ""
      }
    }

    return { message, handleSubmit, error }
  },
}
</script>

<style scoped></style>
