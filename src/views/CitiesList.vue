<template>
  <div>
    <h1>Liste des Villes</h1>
    <div v-for="city in cities" :key="city.id" class="city-container">
      <city
        :name="city.name"
        :weather="city.weather"
        :temperature="city.temperature"
        :updated-at="formatDate(city.updatedAt)"
      ></city>
    </div>
  </div>
</template>

<script>
import City from '../components/City.vue';
import { format, register } from 'timeago.js';
import fr from 'timeago.js/lib/lang/fr';

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
          updatedAt: new Date('2023-06-12')
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
  },
  methods: {
    formatDate(time) {
      return format(time, 'fr_FR');
    }
  },
  mounted() {
    register('fr_FR', fr); 
  }

}
</script>

<style scoped>
.city-container {
  margin-bottom: 20px;
}
</style>