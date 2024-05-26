import axios from "axios";

export const getUsersList = async () =>
    (await axios.get('https://jsonplaceholder.org/users')).data

export const getUserData = async (userId) =>
    (await axios.get(`https://jsonplaceholder.org/users/${userId}`)).data