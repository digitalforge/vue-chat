<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div class="messages" v-if="documents" ref="messages">
      <div class="single" v-for="doc in formattedDocuments" :key="doc.id">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection"
import { computed, onUpdated, ref } from "vue"
import { formatDistanceToNow } from "date-fns"

export default {
  setup(props, context) {
    const { documents, error } = getCollection("messages")
    const messages = ref(null)

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate())
          return { ...doc, createdAt: time }
        })
      }
    })

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight
    })

    return { documents, error, formattedDocuments, messages }
  },
}
</script>

<style></style>
