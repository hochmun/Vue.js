<template>
  <h3>Ch05.Router 실습</h3>

  <h4>1)Router 기본</h4>
  <router-link to="/hello">hello</router-link> /
  <router-link to="/welcome">welcome</router-link> /
  <router-link to="/greeting">greeting</router-link>
  <hr />

  <h4>2)Nested Router</h4>
  <router-link to="/parent">Parent</router-link>
  <hr />

  <h4>3)Named view</h4>
  <router-link to="/main1">main1</router-link> /
  <router-link to="/main2">main2</router-link> /
  <router-link to="/main3">main3</router-link>
  <hr />

  <h4>4)Router 데이터 전송</h4>
  <router-link
    v-bind:to="{
      name: 'Query',
      query: {
        uid: 'a101',
        name: '홍길동',
        age: 21,
      },
    }"
    >Query</router-link
  >
  /
  <router-link
    v-bind:to="{
      name: 'Param',
      params: {
        uid: 'a101',
        name: '홍길동',
        age: 21,
      },
    }"
    >Param</router-link
  >
  /
  <router-link to="/form1">Form1</router-link> /
  <router-link to="/form2">Form2</router-link>
  <hr />

  <h4>라우팅 컴포넌트 출력</h4>
  <router-view name="header"></router-view>
  <router-view></router-view>
  <router-view name="footer"></router-view>
</template>

<script setup></script>

<style scoped></style>
