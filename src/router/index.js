import { createWebHashHistory, createRouter } from 'vue-router'

import AvatarGenerate from '../components/AvatarGenerate.vue'
import AvatarFavorites from '../components/AvatarFavorites.vue'

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/', component: AvatarGenerate, alias: '/' },
		{ path: '/favorites', component: AvatarFavorites },
	],
})
