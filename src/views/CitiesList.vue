<template>
    <div>
      <h1>Liste des Villes</h1>
      <div v-for="city in cities" :key="city.id" class="city-container">
        <city
          :name="city.name"
          :weather="city.weather"
          :temperature="city.temperature"
          :updated-at="city.updatedAt"
        ></city>
      </div>
    </div>
  </template>
  
  <script>
  import City from '../components/City.vue';
  
  export default {
    components: {
      City
    },
    data() {
      return {
        cities: [
          {
            id: 1,
            name: 'Ville 1',
            weather: 'Ensoleillé',
            temperature: 22.0,
            updatedAt: new Date()
          },
          {
            id: 2,
            name: 'Ville 2',
            weather: 'Peu nuageux',
            temperature: 19.5,
            updatedAt: new Date()
          }
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  .city-container {
    margin-bottom: 20px;
  }
  </style>