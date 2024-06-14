<template>
    <q-page class="q-pa-md flex-center">
      <q-card class="q-pa-md task-card">
        <q-card-section>
          <h1>Pilih Tugas</h1>
          <q-select
            v-model="selectedTask"
            :options="taskOptions"
            label="Pilih Tugas"
            outlined
            @change="openTaskInNewTab"
          />
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedTask: null,
        taskOptions: [
          { label: 'Tugas 1', value: 'https://zaky-project-cv.netlify.app/' },
          { label: 'Tugas 2', value: 'https://zaky-project-tugas2.vercel.app/' },
          { label: 'Tugas 3', value: 'https://zaky-223510366-tugas3.vercel.app/' },
          { label: 'Tugas 4', value: 'https://zakykurniawan-223510366-4a-tugas4.vercel.app/' },
          { label: 'Tugas 5', value: 'https://zakykurniawan-223510366-tugas5.vercel.app/' },
          { label: 'Tugas 6', value: 'https://zakykurniawan-223510366-tugas6.vercel.app/' },
          { label: 'Tugas 7', value: 'https://zaky-kurniawan-223510366-tugas7.vercel.app/' },
        ]
      }
    },
    methods: {
      openTaskInNewTab(taskUrl) {
        if (taskUrl) {
          window.open(taskUrl, '_blank');
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .task-card {
    max-width: 400px;
    width: 100%;
  }
  </style>
  