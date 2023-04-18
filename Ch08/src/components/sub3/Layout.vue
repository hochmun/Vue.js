<template>
  <h4>Vuetify Layout 실습</h4>

  <v-app>
    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>헤더 영역</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-heart"></v-btn>
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>메인 영역</v-container>
    </v-main>
    <v-footer app color="blue">푸터 영역</v-footer>
  </v-app>
</template>

<script setup></script>

<style scoped></style>
