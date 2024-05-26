import {defineStore} from "pinia";
import {getUserData, getUsersList} from "../../api/users.js";

export const useUsersStore = defineStore('userList', {
    state: () => {
        return {
            usersList: [],
            userData: [],
            userListTableHead: [
                {
                    name: 'firstname',
                    label: 'First Name',
                },
                {
                    name: 'lastname',
                    label: 'Last Name',
                },
                {
                    name: 'email',
                    label: 'Email',
                },
            ],
            isLoading: false,
            isError: false,
        }
    },

    actions: {
        async actionGetUsersList() {
            try {
                this.isLoading = true;
                this.isError = false;

                this.usersList = await getUsersList();

                this.isLoading = false;
            } catch {
                this.isLoading = false;
                this.isError = true;
            }
        },

        async actionGetUserData(userId) {
            try {
                this.isLoading = true;
                this.isError = false;

                //Проверяем
                if (userId === null || isNaN(userId)) {
                    this.isError = true;
                    return;
                }

                this.userData = await getUserData(userId);

                this.isLoading = false;
            } catch {
                this.isLoading = false;
                this.isError = true;
            }
        },

        //Экшн для поиска
        //В Апишке как я понял нет поиска по подстроке, поэтому пришлось сделать такой затупок
        //В РЕАЛЬНОЙ ЖИЗНИ ТАК НЕ ДЕЛАТЬ!!!
        actionSearchUser(strSearch) {
            this.isLoading = true;
            this.isError = false;
            //Массив пользователей, которых будем отдавать
            let users = [];

            try {
                //Если строка пустая, то просто делаем запрос на всех
                if (strSearch.trim() === '') {
                    this.actionGetUsersList();
                    return;
                }

                //Перебираем основные поля и ищем в них подходящие подстроки
                this.getUsersList.forEach((user) => {
                    if (
                        user.firstname.toLowerCase().indexOf(strSearch.toLowerCase(), 0) > -1 ||
                        user.lastname.toLowerCase().indexOf(strSearch.toLowerCase(), 0) > -1 ||
                        user.email.toLowerCase().indexOf(strSearch.toLowerCase(), 0) > -1
                    ) {
                        users.push(user);
                    }
                })
                this.isLoading = false;
                this.usersList = users;
            } catch {
                this.isLoading = false;
                this.isError = true;
            }
        },
    },

    getters: {
        getUserListTableHead() {
            return this.userListTableHead;
        },

        getUsersList() {
            return this.usersList;
        },

        getUserData() {
            return this.userData;
        },

        getIsLoading() {
            return this.isLoading;
        },

        getIsErrors() {
            return this.isError;
        }
    }
})