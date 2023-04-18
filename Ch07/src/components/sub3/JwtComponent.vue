<template>
  <h4>Jwt 실습</h4>

  <router-view></router-view>
</template>

<script setup>
import { onBeforeMount } from "vue";
import axios from "axios";
import { useStore } from "vuex";

const store = useStore();

onBeforeMount(async () => {
  const token = localStorage.getItem("accessToken");

  axios
    .get("http://localhost:8080/Voard/user", {
      headers: { "X-AUTH-TOKEN": token },
    })
    .then((response) => {
      console.log(response);
      store.dispatch("setUser", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<style scoped></style>
