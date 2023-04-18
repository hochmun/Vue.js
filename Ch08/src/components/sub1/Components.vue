<template>
  <h4>Vuetify Components 실습</h4>

  <div>
    <h5>Icons</h5>
    <v-icon color="info" icon="mdi-alert-circle" size="x-small"></v-icon>
    <hr />

    <h5>Images</h5>
    <v-img
      :width="300"
      aspect-ratio="16/9"
      cover
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
    <hr />

    <h5>Buttons</h5>
    <v-btn variant="outlined" rounded="xl" color="blue"> Button </v-btn>
    <hr />

    <h5>Cards</h5>
    <v-card :width="400" color="#fff0f5" class="border my-2">
      <v-img
        height="200"
        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        cover
        class="text-white"
      >
        <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
          <v-card-item>
            <v-card-title>제목</v-card-title>
            <v-card-subtitle>부 제목</v-card-subtitle>
          </v-card-item>
        </v-toolbar>
      </v-img>

      <v-card-text> 내용 </v-card-text>

      <v-card-actions>
        <v-btn variant="outlined" color="blue">확인</v-btn>
      </v-card-actions>
    </v-card>
    <hr />
  </div>
</template>

<script setup></script>

<style scoped></style>
