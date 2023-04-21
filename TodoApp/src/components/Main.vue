<template>
  <main>
    <ul>
      <Item
        v-for="(todo, index) in todos"
        :todo="todo"
        :index="index"
        v-on:deleteTodo="deleteTodoHandler"
      />
    </ul>
  </main>
</template>

<script>
import Item from "./Item.vue";
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";
import axios from "axios";

export default {
  name: "Main",
  components: {
    Item,
  },
  setup() {
    const store = useStore();

    const todos = computed(() => store.getters.todos);

    const deleteTodoHandler = (todoNum, index) => {
      //alert(index);
      store.dispatch("removeTodo", { todoNum: todoNum, index: index });
    };

    onBeforeMount(async () => {
      axios
        .get("http://localhost:8080/Todo/vue/index")
        .then((response) => {
          response.data.forEach((todo) => {
            store.dispatch("addTodo", todo);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    return { todos, deleteTodoHandler };
  },
};
</script>

<style scoped>
main {
  width: 100%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
}
main > ul {
  width: 100%;
  height: auto;
  list-style: none;
  box-sizing: border-box;
  padding: 0;
}
</style>
