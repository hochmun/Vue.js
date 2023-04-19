<template>
  <h5>User1 등록</h5>
  <form @submit.prevent="registerUser1">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" /></td>
      </tr>
      <tr>
        <td>비밀번호</td>
        <td><input type="password" v-model="user.pass" /></td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user.name" /></td>
      </tr>
      <tr>
        <td>휴대폰</td>
        <td><input type="text" v-model="user.hp" /></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="number" v-model="user.age" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="등록" />
        </td>
      </tr>
    </table>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const user = reactive({
  uid: null,
  name: null,
  pass: null,
  hp: null,
  age: 0,
});

const registerUser1 = () => {
  axios
    .post("http://localhost:8081/Ch09/user1", user)
    .then((response) => {
      console.log(response);
      alert("등록 완료");

      router.push("/user1/list");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style scoped></style>
