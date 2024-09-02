<template>

    <div>
        <h2>{{ name }}</h2>
        <p>Météo actuelle : {{ weather }}</p>
        <p>Température : {{ temperature }}</p>
        <p>Dernière mise a jour : {{ updatedAt.toLocaleString() }}</p>

    </div>
</template>

<script>
export default {
    name: 'City',
    props:{
        name: String,
        weather: String,
        temperature: Number,
        updatedAt: Date
    }
}



</script>