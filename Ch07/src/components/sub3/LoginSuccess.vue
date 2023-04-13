<template>
  <h4>로그인 성공</h4>
  <p>
    {{ user.name }} 님 반갑습니다.<br />
    <a href="#" @click.prevent="logout">로그아웃</a>
  </p>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const user = store.getters.getUser;

const logout = () => {
  localStorage.removeItem("accessToken");
  store.dispatch("setUser", null);
  router.push("/jwt/login");
};
</script>

<style scoped></style>
