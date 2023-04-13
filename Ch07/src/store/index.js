/**
 * Vuex 전역스토어 인스턴스 생성
 */
import { createStore } from "vuex";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

export const store = createStore({
  // state
  state: {
    user: null,
  },
  // mutations
  mutations: {
    SET_USER: (state, data) => {
      state.user = data;
    },
  },
  // actions
  actions: {
    setUser: (context, data) => {
      context.commit("SET_USER", data);
    },
    login: async (context, user) =>
      await axios
        .post("http://localhost:8080/Voard/user/login", user)
        .then((response) => {
          console.log(response);
          const token = response.data.accessToken;
          const user = response.data.user;

          localStorage.setItem("accessToken", token);
          context.commit("SET_USER", user);

          return "/jwt/loginSuccess";
          //router.push("/jwt/loginSuccess");
        })
        .catch((error) => {
          console.log(error);
          return "/jwt/loginFail";
        }),
  },
  // getters
  getters: {
    getUser: (state) => state.user,
  },
});
