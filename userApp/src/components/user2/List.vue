<template>
  <h5>user2 목록</h5>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>등급</th>
      <th>휴대폰</th>
      <th>나이</th>
      <th>가입날짜</th>
      <th>관리</th>
    </tr>
    <tr v-for="user in stats.users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.grade }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
      <td>{{ user.rdate }}</td>
      <td>
        <a href="javascript:;" @click.prevent="modifyUser2(user)">수정</a> /
        <a href="javascript:;" @click.prevent="deleteUser2(user)">삭제</a>
      </td>
    </tr>
  </table>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import axios from "axios";

const stats = reactive({
  users: [],
});

const modifyUser2 = () => {};
const deleteUser2 = () => {};

onBeforeMount(() => {
  axios
    .get("http://localhost:8081/Ch09/user2")
    .then((response) => {
      stats.users = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<style scoped></style>
