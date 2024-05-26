<script setup>
import {useRoute} from 'vue-router'
import {useUsersStore} from "../stores/users/user-list.js";
import SpinnerLoader from "../components/loaders/spinner-loader/SpinnerLoader.vue";
import ErrorsModal from "../components/modals/errors/ErrorsModal.vue";

const route = useRoute();
const userId = Number(route.params.id);

const store = useUsersStore();

store.actionGetUserData(userId);
</script>

<template>
  <h1 class="users-details__header-text">User Details</h1>
  <router-link to="/" class="users-details__back-link">
    <v-btn>Back</v-btn>
  </router-link>
  <SpinnerLoader
      v-if="store.getIsLoading"
  />
  <ErrorsModal
    v-else-if="store.getIsErrors"
    error-text="Error get details user data ;("
  />
  <div class="users-details__container" v-else>
    <v-card
        :title="store.getUserData.firstname"
        subtitle="First Name"
        class="users-details__details-card"
    />
    <v-card
        :title="store.getUserData.lastname"
        subtitle="Last Name"
        class="users-details__details-card"
    />
    <v-card
        :title="store.getUserData.email"
        subtitle="Email"
        class="users-details__details-card"
    />
    <v-card
        :title="store.getUserData.phone"
        subtitle="Phone"
        class="users-details__details-card"
    />
    <v-card
        :title="store.getUserData.birthDate"
        subtitle="Birth Date"
        class="users-details__details-card"
    />
  </div>
</template>

<style scoped>
.users-details__header-text {
  text-align: center;
  margin: 1rem 0;
}

.users-details__back-link {
  margin: 3rem 0;
  width: 100%;
  text-align: center;
  display: block;
}

.users-details__container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1rem;
}

.users-details__details-card {
  width: 70% !important;
  display: flex;
}

</style>