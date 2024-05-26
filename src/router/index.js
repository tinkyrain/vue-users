import UserList from "../pages/UserList.vue";
import UserDetails from "../pages/UserDetails.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: '/', component: UserList },
    { path: '/user/:id', component: UserDetails }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
