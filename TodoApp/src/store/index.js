import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    todos: [],
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    REMOVE_TODO(state, index) {
      state.todos.splice(index, 1);
    },
    CLEAR_TODO(state) {
      state.todos = [];
    },
  },
  actions: {
    addTodo(context, todo) {
      context.commit("ADD_TODO", todo);
    },
    async removeTodo(context, value) {
      await axios
        .delete("http://localhost:8080/Todo/vue/index/" + value.todoNum)
        .then((response) => {
          if (response.data > 0) {
            context.commit("REMOVE_TODO", value.index);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async clearTodo(context) {
      await axios
        .delete("http://localhost:8080/Todo/vue/index")
        .then((response) => {
          console.log(response);
          if (response.data > 0) context.commit("CLEAR_TODO");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async insertTodo(context, todo) {
      console.log("insertTodo");
      await axios
        .put("http://localhost:8080/Todo/vue/index", { todoContent: todo })
        .then((response) => {
          console.log(response);
          context.commit("ADD_TODO", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    todos(state) {
      return state.todos;
    },
  },
});

export default store;
