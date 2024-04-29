import { createStore } from 'vuex'

import boom from '../assets/images/background/Boom.png'
import bricks from '../assets/images/background/Bricks.png'
import solid from '../assets/images/background/Solid.png'
import muscle from '../assets/images/body/Muscle_shirt.png'
import necklace from '../assets/images/body/Necklace.png'
import plain from '../assets/images/body/Plain.png'
import print from '../assets/images/body/Print.png'
import hero from '../assets/images/body/Super_hero.png'
import sweater from '../assets/images/body/Sweater.png'
import angry from '../assets/images/eyebrows/Angry.png'
import formed from '../assets/images/eyebrows/Formed.png'
import round from '../assets/images/eyebrows/Round.png'
import thick from '../assets/images/eyebrows/Thick.png'
import thin from '../assets/images/eyebrows/Thin.png'
import unsure from '../assets/images/eyebrows/Unsure.png'
import lashes from '../assets/images/eyes/Lashes.png'
import nice from '../assets/images/eyes/Nice.png'
import normal from '../assets/images/eyes/Normal.png'
import original from '../assets/images/eyes/Original.png'
import tired from '../assets/images/eyes/Tired.png'
import plainGlass from '../assets/images/glasses/Plain.png'
import reading from '../assets/images/glasses/Reading.png'
import sunnies from '../assets/images/glasses/Sunnies.png'
import beard from '../assets/images/mouth/Beard.png'
import beardTwo from '../assets/images/mouth/Beard2.png'
import line from '../assets/images/mouth/Line.png'
import lips from '../assets/images/mouth/Lips.png'
import openSmile from '../assets/images/mouth/OpenSmile.png'
import originalMouth from '../assets/images/mouth/Original.png'
import smile from '../assets/images/mouth/Smile.png'
import cat from '../assets/images/pet/Cat.png'
import dog from '../assets/images/pet/Dog.png'
import fish from '../assets/images/pet/Fish.png'
import raptor from '../assets/images/pet/Raptor.png'
import bun from '../assets/images/top/Bun.png'
import cap from '../assets/images/top/Cap.png'
import crazy from '../assets/images/top/Crazy.png'
import curly from '../assets/images/top/Curly.png'
import long from '../assets/images/top/Long.png'
import mohawk from '../assets/images/top/Mohawk.png'
import mullet from '../assets/images/top/Mullet.png'
import ninja from '../assets/images/top/Ninja.png'
import ponytail from '../assets/images/top/Ponytail.png'
import smooth from '../assets/images/top/Smooth.png'
import styled from '../assets/images/top/Styled.png'

export default createStore({
	state() {
		return {
			background: [boom, bricks, solid],
			body: [hero, muscle, necklace, plain, print, sweater],
			eyebrows: [formed, angry, round, thick, thin, unsure],
			eyes: [normal, lashes, nice, original, tired],
			glasses: [sunnies, plainGlass, reading],
			mouth: [openSmile, beard, beardTwo, line, lips, originalMouth, smile],
			pet: [raptor, cat, dog, fish],
			top: [ninja, bun, cap, crazy, curly, long, mohawk, mullet, ponytail, smooth, styled],
			favorites: [],
			currentBackground: null,
			currentBody: null,
			currentPet: null,
			currentMouth: null,
			currentEyes: null,
			currentGlasses: null,
			currentEyebrows: null,
			currentTop: null,
		}
	},
	actions: {
		createAvatar({ commit }) {
			const randomIndex = arr => Math.floor(Math.random() * arr.length)
			commit('SET_CURRENT_BACKGROUND', this.state.background[randomIndex(this.state.background)])
			commit('SET_CURRENT_BODY', this.state.body[randomIndex(this.state.body)])
			commit('SET_CURRENT_PET', this.state.pet[randomIndex(this.state.pet)])
			commit('SET_CURRENT_MOUTH', this.state.mouth[randomIndex(this.state.mouth)])
			commit('SET_CURRENT_EYES', this.state.eyes[randomIndex(this.state.eyes)])
			commit('SET_CURRENT_GLASSES', this.state.glasses[randomIndex(this.state.glasses)])
			commit('SET_CURRENT_EYEBROWS', this.state.eyebrows[randomIndex(this.state.eyebrows)])
			commit('SET_CURRENT_TOP', this.state.top[randomIndex(this.state.top)])
		},
		saveAvatar({ commit }, avatar) {
			commit('SAVE_AVATAR', avatar)
		},
	},
	mutations: {
		SET_CURRENT_BACKGROUND(state, background) {
			state.currentBackground = background
		},
		SET_CURRENT_BODY(state, body) {
			state.currentBody = body
		},
		SET_CURRENT_PET(state, pet) {
			state.currentPet = pet
		},
		SET_CURRENT_MOUTH(state, mouth) {
			state.currentMouth = mouth
		},
		SET_CURRENT_EYES(state, eyes) {
			state.currentEyes = eyes
		},
		SET_CURRENT_GLASSES(state, glasses) {
			state.currentGlasses = glasses
		},
		SET_CURRENT_EYEBROWS(state, eyebrows) {
			state.currentEyebrows = eyebrows
		},
		SET_CURRENT_TOP(state, top) {
			state.currentTop = top
		},
		SAVE_AVATAR(state, avatar) {
			state.favorites.unshift(avatar)
		},
		REMOVE_FROM_FAVORITES(state, avatarId) {
			state.favorites = state.favorites.filter(avatar => avatar.id !== avatarId)
		},
	},
})
