<template>
  <li>
    <i class="fa fa-check" aria-hidden="true"></i>
    <span>청소하기</span>
    <button>삭제</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  setup() {
    return {};
  },
};
</script>

<style scoped>
li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  margin-bottom: 6px;
  background-color: white;
  box-sizing: border-box;
}
li > i {
  color: #62acde;
}
li > span {
  margin-left: 10px;
}
li > button {
  float: right;
  width: 40px;
  height: 40px;
  border: none;
  color: #de4343;
}
li > button:active {
  background-color: #a2e7cd;
}
</style>
