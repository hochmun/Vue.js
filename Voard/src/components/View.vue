<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글 보기</v-app-bar-title>
      <v-btn @click="btnLogout">로그아웃</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet class="mx-auto" max-width="800">
          <v-text-field
            label="제목"
            variant="outlined"
            readonly="true"
          ></v-text-field>

          <v-textarea
            label="내용"
            variant="outlined"
            readonly="true"
          ></v-textarea>

          <v-text-field
            label="파일 목록"
            variant="outlined"
            readonly="true"
          ></v-text-field>

          <v-sheet class="text-right pt-2 mr-2">
            <v-btn class="mr-2" @click="btnUndo">뒤로가기</v-btn>
            <v-btn class="mr-2" color="success" @click="btnModify"
              >글수정</v-btn
            >
            <v-btn class="mr-2" color="error" @click="btnDelete">글삭제</v-btn>
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

const btnUndo = () => {
  router.push("/list");
};

const btnModify = () => {
  router.push("/modify");
};

const btnDelete = () => {
  router.push("/list");
};
</script>

<style scoped></style>
