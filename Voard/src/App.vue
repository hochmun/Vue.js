<template>
  <router-view></router-view>
</template>

<script setup>
import { onBeforeMount } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

onBeforeMount(() => {
  const accessToken = localStorage.getItem("accessToken");

  // 토큰이 없을 경우 로그인 페이지 이동
  if (accessToken == null) {
    router.push("/user/login");
    return;
  }

  axios
    .get("/user", {
      headers: { "X-AUTH-TOKEN": accessToken },
    })
    .then((response) => {
      console.log(response);
      store.dispatch("setUser", response.data);
      router.push("/list");
    })
    .catch((error) => {
      console.log(error);
      router.push("/user/login");
      return;
    });
});
</script>
