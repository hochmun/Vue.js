<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글 쓰기</v-app-bar-title>
      <v-btn @click="btnLogout">로그아웃</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet class="mx-auto" max-width="800">
          <v-text-field
            v-model="article.title"
            label="제목"
            variant="outlined"
          ></v-text-field>

          <v-textarea
            v-model="article.content"
            label="내용"
            variant="outlined"
          ></v-textarea>

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

          <v-dialog v-model="dialog.btn" width="auto">
            <v-card>
              <v-card-text>{{ dialog.content }}</v-card-text>
              <v-card-actions>
                <v-btn color="primary" block @click="dialog.btn = false"
                  >닫기</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import axios from "axios";

const router = useRouter();
const store = useStore();
const article = reactive({
  title: null,
  content: null,
  uid: store.getters.user?.uid,
});
const dialog = reactive({
  btn: false,
  content: null,
});

const btnLogout = () => {
  router.push("/user/login");
};

const btnCancle = () => {
  router.push("/list");
};

const btnWrite = () => {
  axios
    .put("http://localhost:8080/Voard/write", article)
    .then((response) => {
      const result = response.data;

      if (result > 0) {
        // 작성 성공
        router.push("/list");
      } else if (result == -1) {
        // uid값 없음 오류
        router.push("/user/login");
      } else if (result == -2) {
        // content 값 없음 오류
        dialog.content = "내용을 입력 하여 주십시오.";
        dialog.btn = true;
      } else if (result == -3) {
        // title 값 없음
        dialog.content = "제목을 입력 하여 주십시오.";
        dialog.btn = true;
      } else {
        // 작성 이상?
        dialog.content = "게시글이 작성 되지 않았습니다.";
        dialog.btn = true;
      }
    })
    .catch((error) => {
      console.log(error);
      // 알수 없는 오류 / 체크 되지 않는 오류
      alert("작성 오류 입니다.");
    });
};
</script>

<style scoped></style>
