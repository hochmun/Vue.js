<template>
  <h4>Component2</h4>
  <p>
    vuex value : {{ value }}<br />
    vuex count : {{ count }}<br />
  </p>
  <button @click="btnDecrement">감소</button>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

// vuex 전역스토어 가져오기
const store = useStore();

const value = store.getters.getValue;
const count = computed(() => store.getters.getCount);

const btnDecrement = () => {
  store.dispatch("decrement");
};
</script>

<style scoped></style>
