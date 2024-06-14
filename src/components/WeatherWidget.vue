<template>
    <div class="container">
      <div class="weather-widget">
        <h2>Cuaca</h2>
        <q-input v-model="city" placeholder="Masukkan Lokasi" />
        <q-btn @click="fetchWeather">Cari</q-btn>
        <div v-if="loading" class="loading">Loading data...</div>
        <div v-if="weather">
          <div>Temperature: {{ weather.main.temp }}°C</div>
          <div>Weather: {{ weather.weather[0].description }}</div>
          <div>Humidity: {{ weather.main.humidity }}%</div>
        </div>
        <div v-if="error" class="error">{{ error }}</div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Home',
    setup() {
      const city = ref('');
      const weather = ref(null);
      const loading = ref(false);
      const error = ref('');
      const apiKey = 'd298c515fe18c45c2707834b3439d31d';
  
      const fetchWeather = async () => {
        if (!city.value) {
          error.value = 'Please enter a location';
          return;
        }
        loading.value = true;
        error.value = '';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          const data = await response.json();
          weather.value = data;
        } catch (err) {
          error.value = err.message;
        } finally {
          loading.value = false;
        }
      };
  
      return {
        city,
        weather,
        loading,
        error,
        fetchWeather,
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
  }
  .weather-widget {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  .loading {
    margin-top: 10px;
    font-size: 14px;
    color: #888;
  }
  .error {
    margin-top: 10px;
    font-size: 14px;
    color: red;
  }
  </style>
  