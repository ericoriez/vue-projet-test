<template>
  <div>
    <h1>Liste des Villes</h1>
    <div v-for="city in cities" :key="city.id" class="city-container">
      <city :name="city.name" :weather="city.weather" :temperature="city.temperature"
        :updated-at="formatDate(city.updatedAt)"></city>
    </div>
  </div>
</template>

<script>
import City from '../components/City.vue';
import { format } from 'timeago.js';


export default {
  components: {
    City
  },
  data() {
    return {
      cities: []
    };
  },
  mounted() {
    this.fetchWeatherData(); // Appeler l'API OpenWeather dès que le composant est monté
  },
  methods: {
    async fetchWeatherData() {
      const apiKey = '4ab62ab3052584ec3b77394081a0ca65';
      const apiUrl = `https://api.openweathermap.org/data/2.5/find?lat=45.758&lon=4.765&cnt=20&cluster=yes&lang=fr&units=metric&APPID=${apiKey}`;


      const response = await fetch(apiUrl);
      const data = await response.json();

      this.cities = data.list.map(city => ({
        id: city.id,
        name: city.name,
        weather: city.weather[0].description,
        temperature: city.main.temp,
        updatedAt: new Date(city.dt * 1000)
      }));
    },


    formatDate(time) {
      return format(time, 'fr_FR');
    }
  }

}
</script>

<style scoped>
.city-container {
  margin-bottom: 20px;
}
</style>