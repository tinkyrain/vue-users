<script setup>
import UserListTable from "../components/tables/UserListTable.vue";
import SearchBar from "../components/search-bars/SearchBar.vue";

</script>

<template>
  <h1 class="users-list__text">Users List</h1>
  <SearchBar class="users-list__search-bar" />
  <UserListTable/>
</template>

<style scoped>
.users-list__text {
  text-align: center;
  margin: 1rem 0;
}

.users-list__search-bar {
  margin: 20px 0;
}
</style>