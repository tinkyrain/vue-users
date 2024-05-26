<script setup>
import {ref} from 'vue';
import {useUsersStore} from "../../stores/users/user-list.js";

const store = useUsersStore();

let loading = ref(false);
let search = ref("");

const handlerSearch = () => {
  store.actionSearchUser(search.value);
};
</script>

<template>
  <v-card
      class="mx-auto"
      color="surface-light"
      max-width="800"
  >
    <v-card-text>
      <v-text-field
          :loading="loading"
          append-inner-icon="mdi-magnify"
          density="compact"
          label="Search user"
          variant="solo"
          hide-details
          single-line
          @input="handlerSearch"
          v-model="search"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>