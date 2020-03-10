<template>
  <div class="w-50 mx-auto">
    <v-text-field
      v-show="!isWriting"
      :placeholder="labelCreateTodo"
      outlined
      prepend-inner-icon="mdi-lead-pencil"
      @focus="writeTodo()"
      @click="writeTodo()"
      @click:prepend="writeTodo()"
      @click:prepend-inner="writeTodo()"
    />
    <v-textarea
      v-show="isWriting"
      ref="writeArea"
      v-model="form.todo"
      :label="labelCreateTodo"
      clearable
      clear-icon="mdi-close-circle"
      outlined
      rows="4"
      row-height="30"
      auto-grow
      @keydown.enter="addTodo($event)"
      @blur="isWriting = false"
    />
  </div>
</template>

<script>

export default {
    data() {
        return {
            form: {
                todo: ''
            },
            todos: '',
            typing: false,
            labelCreateTodo: 'Créer une note...',
            isWriting: false
        };
    },
    methods: {
        async addTodo(event) {
            if (event) {
                event.preventDefault();
            }
            
            this.typing = false;
            const param = {
                task: this.form.todo 
            };
            console.log('param add', param);
			
            this.$store.dispatch('todo/ADD_TODO_LIST', param);
            this.clearTodo();
        },
        clearTodo() {
            this.form.todo = '';
            this.isWriting = false;
        },
        refreshTodo() {
        },
        writeTodo() {
            this.isWriting = true;
            this.$nextTick(() => {
                this.$refs.writeArea.focus();
            });
        }
    }
};
</script>
