<template>
  <header>
    <div>
      <input type="text" placeholder="할일을 입력하세요" v-model="newTodo" />
      <button @click="btnAddTodo">등록</button>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Header",
  setup(props, context) {
    const newTodo = ref("");

    const btnAddTodo = () => {
      if (newTodo.value !== "") {
        // 상위 컴포넌트에 addTodo 이벤트 발생 시킴
        context.emit("addTodo", newTodo.value);
        newTodo.value = "";
      }
    };

    return { newTodo, btnAddTodo };
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  background-color: white;
  padding: 10px;
}
header > div {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
header > div > input {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 6px;
  border: none;
  outline: none;
}
header > div > button {
  width: 40px;
  height: 40px;
  border: none;
  background-color: #44ba81;
  color: white;
  position: absolute;
  right: 0;
  top: 0;
}
header > div > button:active {
  background-color: #ff0f0f;
}
</style>
