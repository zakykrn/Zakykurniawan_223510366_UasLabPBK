<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-secondary text-white">
      <q-toolbar>
        <q-toolbar-title>
          WEATHER By Zaky Kurniawan
        </q-toolbar-title>
        <q-btn-dropdown
          flat
          dense
          label="KUMPULAN TUGAS ZAKY"
          color="white"
        >
          <q-list>
            <q-item clickable v-for="task in tasks" :key="task.id" @click="goToTask(task.url)">
              <q-item-section>{{ task.name }}</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { id: 1, name: 'Tugas 1', url: 'https://zaky-project-cv.netlify.app/' },
        { id: 2, name: 'Tugas 2', url: 'https://zaky-project-tugas2.vercel.app/' },
        { id: 3, name: 'Tugas 3', url: 'https://zaky-223510366-tugas3.vercel.app/' },
        { id: 4, name: 'Tugas 4', url: 'https://zakykurniawan-223510366-4a-tugas4.vercel.app/' },
        { id: 5, name: 'Tugas 5', url: 'https://zakykurniawan-223510366-tugas5.vercel.app/' },
        { id: 6, name: 'Tugas 6', url: 'https://zakykurniawan-223510366-tugas6.vercel.app/' },
        { id: 7, name: 'Tugas 7', url: 'https://zaky-kurniawan-223510366-tugas7.vercel.app/' },
      ]
    };
  },
  methods: {
    goToTask(url) {
      window.open(url, '_blank');
    },
  }
}
</script>

<style>
.bg-dark {
  background-color:rgb(12, 233, 214)3;
}
body {
  background-image: url(https://wallpapercave.com/wp/wp5446506.jpg);
  background-size: cover;
  font-family: 'Courier New', Courier, monospace;
}
</style>
