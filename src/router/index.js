import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CitiesList from '../views/CitiesList.vue'; 
import City from '../components/City.vue';
import CitiesMap from '../views/CitiesMap.vue';  // Importez le composant depuis views

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cities',
      name: 'cities',
      component: CitiesList
    },
    {
      path: '/ville',
      name: 'City',
      component: City
    },
    {
      path: '/carte',
      name: 'CitiesMap',
      component: CitiesMap,  // Utilisez la vue CitiesMap
    },
  ]
})

export default router