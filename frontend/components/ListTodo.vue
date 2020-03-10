<template>
  <div class="mx-auto">
    <h2>TODOS</h2>
    <card
      v-for="todo in todoList"
      :key="todo._id"
      :todo="todo"
      class="my-3"
    /> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '~/components/Card.vue';

export default {
    components: {
        Card,
    },
    data() {
        return {
            todos: [{ done: true,
                task: 'dev Update',
                __v: 0,
                _id: '5d3866ddda50172e346502e0' }]
        };
    },
    computed: {
        ...mapGetters({ todoList: 'todo/todo_list' }),
    },
    mounted() {
        this.$store.dispatch('todo/FETCH_TODO_LIST');
    },
    methods: {
      
    }
};

</script>
