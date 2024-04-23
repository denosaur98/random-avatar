import { createWebHistory, createRouter } from 'vue-router'

import AvatarGenerate from '../components/AvatarGenerate.vue'
import AvatarFavorites from '../components/AvatarFavorites.vue'

export default createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: AvatarGenerate, alias: '/' },
		{ path: '/favorites', component: AvatarFavorites },
	],
})
