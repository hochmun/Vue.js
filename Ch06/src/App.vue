<template>
  <h3>Ch06.Vuex 실습</h3>

  <h4>App</h4>
  <p>
    vuex value : {{ value }}<br />
    vuex count : {{ count }}<br />
  </p>
  <table border="1">
    <tr>
      <th>번호</th>
      <th>내용</th>
      <th>완료</th>
    </tr>
    <tr v-for="todo in todos">
      <td>{{ todo.no }}</td>
      <td>{{ todo.text }}</td>
      <td>{{ todo.done }}</td>
    </tr>
  </table>

  <Component1></Component1>
  <Component2></Component2>
  <Component3></Component3>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import Component1 from "./components/Component1.vue";
import Component2 from "./components/Component2.vue";
import Component3 from "./components/Component3.vue";

// vuex 전역스토어 가져오기
const store = useStore();

const value = store.getters.getValue;
const count = computed(() => store.getters.getCount);
const todos = computed(() => store.getters.getTodos);
</script>

<style scoped></style>
