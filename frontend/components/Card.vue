<template>
  <transition name="card">
    <div
      v-if="isShow"
      class="mx-auto w-25"
    >
      <v-hover
        v-slot:default="{ hover }"
      >
        <v-card
          v-show="!isWriting"
          outlined
          class="mx-auto"
          :color="colorState()"
        >
          <v-card-text
            @click="writeTodo()"
          >
            {{ todo.task }}
          </v-card-text>
          <v-card-actions>
            <v-spacer style="height:36px" />
            <v-btn
              v-show="hover ? true : false" 
              text 
              icon
              class="mx-0"
              @click="updateDone()"
            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn
              v-show="hover ? true : false" 
              text 
              icon
              class="mx-0"
              @click="writeTodo()"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              v-show="hover ? true : false" 
              text 
              icon 
              color="red"
              class="mx-0"
              @click="removeTodo()"
            >
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-hover>
      <v-textarea
        v-show="isWriting"
        ref="writeArea"
        v-model="task"
        append-icon="mdi-pencil"
        outlined
        rows="6"
        row-height="30"
        auto-grow
        @blur="update()"
        @keydown.enter="update()"
      />
    </div>
  </transition>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            default() { return { task: 'TASK HERE', done: false }; }
        }
    },
    data() {
        return {
            done: '',
            task: '',
            isShow: false,
            overlay: false,
            isWriting: false
        };
    },
    mounted() {
        this.task = this.todo.task;
        this.done = this.todo.done;
        this.isShow = true;
    },
    methods: {
        removeTodo() {
            this.isShow = false;
            this.$store.dispatch('todo/DELETE_TODO', this.todo._id);
        },
        update() {
            const body = {
                task: this.task,
                done: this.done,
                _id: this.todo._id,
            };
            console.log('body', body);
            
            this.$store.dispatch('todo/UPDATE_TODO', body);
            this.isWriting = false;
        },
        updateDone() {
            this.done = !this.done;
            this.update();
        },
        writeTodo() {
            this.isWriting = true;
            this.$nextTick(() => {
                this.$refs.writeArea.focus();
            });
        },
        colorState() {
            return this.done ? 'yellow lighten-2' : '';
        }
    },
};

</script>

<style scoped>
.card-enter-active {
  transition: all .3s ease;
}
.card-leave-active {
  transition: all .8s ease;
}
.card-enter, .card-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

 .todo__done {
        text-decoration: line-through !important
    }

</style>
