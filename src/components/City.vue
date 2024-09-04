<template>

    <div class="city">
        <h2>{{ name }}</h2>
        <p>Météo actuelle : {{ weather }}</p>
        <p>Température : {{ temperature }}</p>
        <p>Dernière mise a jour : {{ updatedAt }}</p>

    </div>
</template>

<script>
export default {
    name: 'City',
    props:{
        name: String,
        weather: String,
        temperature: Number,
        updatedAt: String
    }
}



</script>

<style scoped>
.city {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}
</style>