<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
      height="64"
    >
      <v-app-bar-nav-icon />

      <v-toolbar-title>
        <v-icon>mdi-heart</v-icon>Todo
      </v-toolbar-title>

      <div class="flex-grow-1" />
      <v-text-field 
        v-show="isSearching"
        ref="writeArea"
        prepend-inner-icon="mdi-magnify"
        label="Search..."
        solo
        flat
        dark
        style="transform:translateY(15px);width:10px"
        @blur="isSearching=!isSearching"
      />
      <v-btn
        v-show="!isSearching"
        icon
        @click="writeSearch()"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn
        icon
        href="https://github.com/guillaumeMECE"
        target="_blank"
      >
        <v-icon>mdi-heart</v-icon>
      </v-btn>
     

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            isSearching: false
        };
    },
    mounted() {},
    methods: {
        writeSearch() {
            this.isSearching = true;
            this.$nextTick(() => {
                this.$refs.writeArea.focus();
            });
        }
    },
};
</script>
