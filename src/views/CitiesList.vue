<template>
<h1>Méteo - Liste des villes</h1>
<div>
    <city
        :name="cityName"
        :weather="cityWeather"
        :temperature="cityTemperature"
        :updated-at="cityUpdatedAt"

    ></city>
</div>
</template>

<script>
import City from "../components/City.vue"
export default {
    
    components:{
        City
    },
    data(){
        return {
            cityName: "Ma ville",
            cityWeather: "Peu nuageux",
            cityTemperature: 20.55,
            cityUpdatedAt: new Date()
        };
    }
}


</script>