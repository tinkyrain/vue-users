<script setup>

</script>

<template>
  <div class="loader-block">
    <v-progress-circular
        color="primary"
        indeterminate
        class="loader"
    ></v-progress-circular>
  </div>
</template>

<style scoped>
.loader-block {
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  width: 70px;
  height: 70px;
}
</style>