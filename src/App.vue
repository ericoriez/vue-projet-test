<template>
  <div id="app">
    <h1>Navigation dans l'application Vue</h1>
    <router-link to="/">Accueil</router-link>
    <router-link to="/cities"> Liste des Villes</router-link>
    <router-view></router-view>
  </div>

</template>

<script>


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