<template>
  <Header v-on:addTodo="addTodoHandler" />
  <Main />
  <Footer v-on:btnClearAll="clearAllHandler" />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";
import { useStore } from "vuex";

export default {
  name: "app",
  components: {
    Header,
    Main,
    Footer,
  },
  setup() {
    const store = useStore();

    const addTodoHandler = (value) => {
      //alert(value);
      store.dispatch("insertTodo", value);
    };

    const clearAllHandler = () => {
      store.dispatch("clearTodo");
    };

    return { addTodoHandler, clearAllHandler };
  },
};
</script>

<style scoped></style>
