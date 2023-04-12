<template>
  <h4>Rest 실습</h4>
  <h5>GET</h5>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>휴대폰</th>
      <th>나이</th>
    </tr>
    <tr v-for="user in users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
    </tr>
  </table>

  <h5>POST</h5>
  <form v-on:submit.prevent="registerUser">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" /></td>
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

  <h5>PUT</h5>
  <input type="text" v-model="inputText" />
  <button @click="btnGetUser">수정 데이터 출력</button>
  <form v-on:submit.prevent="modifyUser">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" readonly /></td>
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
          <input type="submit" value="수정" />
        </td>
      </tr>
    </table>
  </form>

  <h5>DELETE</h5>
  <input type="text" v-model="inputText" />&nbsp;
  <button @click="btnDeleteUser">User 삭제</button>
</template>

<script setup>
import axios from "axios";
import { onBeforeMount, ref, reactive } from "vue";

const inputText = ref(null);
const users = ref([]);
const user = reactive({
  uid: "",
  pass: "",
  name: "",
  hp: "",
  age: 0,
});

const btnGetUser = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8081/Ch09/user1/${inputText.value}`
    );

    const data = response.data;
    user.uid = data.uid;
    user.name = data.name;
    user.hp = data.hp;
    user.age = data.age;
  } catch (error) {
    console.log(error);
  }
};

const registerUser = () => {
  axios
    .post("http://localhost:8081/Ch09/user1", user)
    .then((response) => {
      console.log(response.data);
      const data = response.data;

      if (data.result > 0) {
        alert("등록 완료!");
        users.value.push(user);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const modifyUser = () => {
  axios
    .put("http://localhost:8081/Ch09/user1", user)
    .then((response) => {
      console.log(response.data);
      const data = response.data;

      if (data.result > 0) {
        alert("수정 완료!");
        const modifyUser = users.value.find((element) => {
          if (element.uid == user.uid) return true;
        });
        modifyUser.name = user.name;
        modifyUser.hp = user.hp;
        modifyUser.age = user.age;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const btnDeleteUser = () => {
  axios
    .delete(`http://localhost:8081/Ch09/user1/${inputText.value}`)
    .then((response) => {
      console.log(response);
      const data = response.data;

      if (data.result > 0) {
        alert("삭제 완료!");
        users.value.find((element, index) => {
          if (element.uid == inputText.value) {
            users.value.splice(index, 1);
            return;
          }
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

onBeforeMount(() => {
  axios
    .get("http://localhost:8081/Ch09/user1")
    .then((response) => {
      users.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<style scoped></style>
