<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글 쓰기</v-app-bar-title>
      <v-btn @click="btnLogout">로그아웃</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet class="mx-auto" max-width="800">
          <v-text-field label="제목" variant="outlined"></v-text-field>

          <v-textarea label="내용" variant="outlined"></v-textarea>

          <v-file-input
            label="파일 첨부"
            chips
            multiple
            show-size
            counter
          ></v-file-input>

          <v-sheet class="text-right pt-2 mr-2">
            <v-btn class="mr-2" @click="btnCancle">취소</v-btn>
            <v-btn class="mr-2" color="success" @click="btnWrite">글쓰기</v-btn>
          </v-sheet>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const btnLogout = () => {
  router.push("/user/login");
};

const btnCancle = () => {
  router.push("/list");
};

const btnWrite = () => {
  router.push("/list");
};
</script>

<style scoped></style>
