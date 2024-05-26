<script setup>
import {useUsersStore} from "../../stores/users/user-list.js";
import SpinnerLoader from "../loaders/spinner-loader/SpinnerLoader.vue";
import ErrorsModal from "../modals/errors/ErrorsModal.vue";

const store = useUsersStore();
store.actionGetUsersList();
</script>

<template>
  <SpinnerLoader
    v-if="store.getIsLoading"
  />
  <ErrorsModal
      v-else-if="store.getIsErrors"
      error-text="Error get details user data ;("
  />
  <v-table class="user-list__table" v-else>
    <thead>
    <tr>
      <th class="text-left" v-for="item in store.getUserListTableHead" :key="item.name">
        {{ item.label }}
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="item in store.getUsersList"
        :key="item.id"
    >
      <td>
        <router-link :to="`user/${item.id}`">
          {{ item.firstname }}
        </router-link>
      </td>
      <td>{{ item.lastname }}</td>
      <td>{{ item.email }}</td>
    </tr>
    </tbody>
  </v-table>
</template>

<style scoped>
.user-list__table {
  width: 90%;
  height: 50vh;
  margin: 0 auto;
}
</style>