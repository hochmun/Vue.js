<template>
  <li>
    <i class="fa fa-check" aria-hidden="true"></i>
    <span>{{ todo.todoContent }}</span>
    <button @click="btnDelete(todo.todoNum)">삭제</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    todo: Object,
    index: Number,
  },
  setup(props, context) {
    const todo = props.todo;
    const index = props.index;

    const btnDelete = (todoNum) => {
      context.emit("deleteTodo", todoNum, index);
    };

    return { todo, index, btnDelete };
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
