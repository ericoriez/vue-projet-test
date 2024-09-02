<template>
  <div id="app">
    <h1>Bienvenue sur notre application météo</h1>
    <button @click="onListClick">Voir les données météo</button>
    <CitiesList></CitiesList>
  </div>

</template>

<script>
import CitiesList from './views/CitiesList.vue'
export default {
  name: "App",
  methods:{
    onListClick(){
      alert("Liste des données méteo !")
    }
  },

  components: {
    CitiesList
  }
}

</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>