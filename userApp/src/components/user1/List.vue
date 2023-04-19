<template>
  <h5>User1 목록</h5>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>휴대폰</th>
      <th>나이</th>
      <th>관리</th>
    </tr>
    <tr v-for="item in user.items">
      <td>{{ item.uid }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.hp }}</td>
      <td>{{ item.age }}</td>
      <td>
        <a href="javascript:;" @click.prevent="modifyUser1(item)">수정</a> /
        <a href="javascript:;" @click.prevent="deleteUser1(item)">삭제</a>
      </td>
    </tr>
  </table>
</template>

<script setup>
import axios from "axios";
import { onBeforeMount, ref, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const user = reactive({
  items: [],
});

const modifyUser1 = (user) => {
  router.push({ name: "User1Modify", params: user });
};

const deleteUser1 = (user) => {
  if (!confirm("정말 삭제?")) return;

  axios
    .delete(`http://localhost:8081/Ch09/user1/${user.uid}`)
    .then((response) => {
      console.log(response);
      alert("삭제 완료");

      router.go(0);
    })
    .catch((error) => {
      console.log(error);
    });
};

onBeforeMount(() => {
  axios
    .get("http://localhost:8081/Ch09/user1")
    .then((response) => {
      user.items = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<style scoped></style>
