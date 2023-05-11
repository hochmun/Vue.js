<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글 목록</v-app-bar-title>
      <p>
        {{ user?.nick }} 님 반갑습니다.
        <v-btn @click="btnLogout">로그아웃</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="border mx-auto">
          <v-table>
            <thead>
              <tr>
                <th class="text-center" width="80">번호</th>
                <th class="text-center" width="auto">제목</th>
                <th class="text-center" width="120">글쓴이</th>
                <th class="text-center" width="90">조회수</th>
                <th class="text-center" width="120">등록일</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(vo, index) in state.data.vos">
                <td class="text-center">
                  {{ state.data.dto.pageStartNum - index }}
                </td>
                <td class="text-left">
                  <a @click="goView">{{ vo.title }}</a>
                </td>
                <td class="text-center">
                  {{ vo.nick == null ? "탈퇴한 유저" : vo.nick }}
                </td>
                <td class="text-center">{{ vo.hit }}</td>
                <td class="text-center">{{ vo.rdate }}</td>
              </tr>
            </tbody>
          </v-table>

          <v-sheet class="text-right pt-2 mr-2">
            <v-btn color="success" @click="btnWrite">글쓰기</v-btn>
          </v-sheet>

          <div class="text-center">
            <v-pagination
              :length="state.data.dto?.lastPage"
              v-model="page"
              rounded="circle"
              :total-visible="7"
              @click="pageClickHandler"
            ></v-pagination>
          </div>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import axios from "axios";
import { reactive, computed, onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const user = computed(() => store.getters.user);

const state = reactive({
  data: {},
});
const page = ref(1);

const btnLogout = () => {
  localStorage.removeItem("accessToken");
  router.push("/user/login");
};

const btnWrite = () => {
  router.push("/write");
};

const goView = () => {
  router.push("/view");
};

const pageClickHandler = async () => {
  //alert("click" + page.value);
  await getArticles(page.value);
};

onBeforeMount(() => {
  getArticles(page.value);
});

const getArticles = async (pg) => {
  axios
    .get("/list", {
      params: { pg: pg },
    })
    .then((response) => {
      console.log(response);
      state.data = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style scoped></style>
