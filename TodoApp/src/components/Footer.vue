<template>
  <footer>
    <button>Clear ALL</button>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  setup() {
    return {};
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  text-align: center;
}
footer > button {
  width: 100px;
  height: 30px;
  color: #e20303;
}
</style>
