<template>
  <footer>
    <button @click="btnClearAll">Clear ALL</button>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  setup(porps, context) {
    const btnClearAll = () => {
      //alert("클릭");
      context.emit("btnClearAll");
    };

    return { btnClearAll };
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
