<template>
  <v-app>
    <b-row>
      <b-col>
        <create-todo class="m-5" />
        <list-todo class="m-5" />
      </b-col>
    </b-row>
  </v-app>
</template>

<script>
import CreateTodo from '~/components/CreateTodo';
import ListTodo from '~/components/ListTodo';

export default {
    components: {
        CreateTodo,
        ListTodo
    }
};
</script>

<style scoped>
body{
font-family: 'Roboto Slab', serif;
}
</style>
