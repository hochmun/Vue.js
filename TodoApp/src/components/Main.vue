<template>
  <main>
    <ul>
      <Item></Item>
    </ul>
  </main>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "Main",
  components: {
    Item,
  },
  setup() {
    return {};
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
