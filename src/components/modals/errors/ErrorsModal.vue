<script setup>
const props = defineProps({
  errorText: String
})
</script>

<template>
  <v-alert
      density="compact"
      :text="props.errorText"
      title="Error"
      type="error"
      class="error-modal__alert"
  ></v-alert>
</template>

<style scoped>
.error-modal__alert {
  width: 70%;
  margin: 0 auto;
}
</style>