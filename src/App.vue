<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
  components: { Navbar },
  setup(props, context) {},
}
</script>

<style lang="scss"></style>
