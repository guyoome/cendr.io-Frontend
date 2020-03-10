/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const strict = false;

/**
 * Mutation declaration
 */
const SET_TODO_LIST = 'SET_TODO_LIST';

/**
 * Store attributes
 */
export const state = () => ({
    todoList: [],
});

/**
 * Actions (server calls & mutations)
 */
export const actions = {

    async FETCH_TODO_LIST({ state, commit }) {
        try {
            const response = await this.$axios.$get('/api/all');
            commit(SET_TODO_LIST, response);
        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }
    },

    async ADD_TODO_LIST({ dispatch, commit }, body) {
        try {
            await this.$axios.$post('/api/add', body);
            dispatch('FETCH_TODO_LIST');
        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }
    },
    async DELETE_TODO({ dispatch, commit }, params) {
        try {
            await this.$axios.$delete(`/api/delete/${params}`);
            dispatch('FETCH_TODO_LIST');
        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }  
    },
    async UPDATE_TODO({ dispatch, commit }, body) {
        try {
            const todoID = body._id;
            delete body._id;            
            await this.$axios.$patch(`/api/update/${todoID}`, body);
            dispatch('FETCH_TODO_LIST');
        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }  
    },

};

/**
 * Modify State
 */
export const mutations = {
    [SET_TODO_LIST](state, payload) {
        state.todoList = payload;
    },
};

/**
 * Get state value from other .vue
 */
export const getters = {
    todo_list: (state) => state.todoList,
};
