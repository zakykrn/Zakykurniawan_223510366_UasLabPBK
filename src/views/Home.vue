<template>
    <q-page class="q-pa-md flex-center">
      <q-card class="q-pa-md weather-card">
        <q-card-section>
          <div class="text-h3">Info Cuaca</div>
          <div v-if="weather">
            <div class="q-mt-md">Lokasi: {{ city }}</div>
            <div>Temperatur: {{ weather.main.temp }}°C</div>
            <div>Cuaca: {{ weather.weather[0].description }}</div>
            <div>Kelembapan: {{ weather.main.humidity }}%</div>
          </div>
          <q-input v-model="city" placeholder="Masukkan Lokasi" class="q-mt-md" @keydown.enter="fetchWeather" />
          <q-btn @click="fetchWeather" class="q-mt-md bg-primary text-white">Cari</q-btn>
          <div v-if="loading" class="q-mt-md">Loading data...</div>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        city: '',
        weather: null,
        loading: false,
        apiKey: 'd298c515fe18c45c2707834b3439d31d'
      };
    },
    methods: {
      async fetchWeather() {
        if (!this.city) return;
        this.loading = true;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`Error: ${response.statusText}`);
          const data = await response.json();
          this.weather = data;
        } catch (error) {
          console.error('Error fetching weather data:', error);
        } finally {
          this.loading = false;
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
  .weather-card {
    max-width: 400px;
    width: 100%;
  }
  </style>
  