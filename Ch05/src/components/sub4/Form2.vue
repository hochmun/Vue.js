<template>
  <h4>Form2</h4>
  <form v-on:submit.prevent="submitHander">
    <table border="1">
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user.name" /></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="number" v-model="user.age" /></td>
      </tr>
      <tr>
        <td>주소</td>
        <td>
          <select v-model="user.addr">
            <option>서울</option>
            <option>대전</option>
            <option>대구</option>
            <option>부산</option>
            <option>광주</option>
          </select>
        </td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="전송" />
        </td>
      </tr>
    </table>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const user = reactive({
  name: "",
  age: 0,
  addr: "",
});

const submitHander = () => {
  // router를 이용한 컴포넌트 라우팅
  router.push({
    name: "FormResult2",
    params: user,
  });
};
</script>

<style scoped></style>
