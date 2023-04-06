<template>
  <h4>UComponent1</h4>
  <p>
    name : {{ name }}<br />
    age : {{ age }}
  </p>
</template>

<script>
export default {
  name: "UComponent1",
  props: ["name", "age"],
};
</script>

<style scoped></style>
