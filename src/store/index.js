import { createStore } from 'vuex'

import boom from '../assets/images/background/Boom.svg'
import bricks from '../assets/images/background/Bricks.svg'
import solid from '../assets/images/background/Solid.svg'
import muscle from '../assets/images/body/MuscleShirt.svg'
import necklace from '../assets/images/body/Necklace.svg'
import plain from '../assets/images/body/Plain.svg'
import print from '../assets/images/body/Print.svg'
import hero from '../assets/images/body/SuperHero.svg'
import sweater from '../assets/images/body/Sweater.svg'
import angry from '../assets/images/eyebrows/Angry.svg'
import formed from '../assets/images/eyebrows/Formed.svg'
import round from '../assets/images/eyebrows/Round.svg'
import thick from '../assets/images/eyebrows/Thick.svg'
import thin from '../assets/images/eyebrows/Thin.svg'
import unsure from '../assets/images/eyebrows/Unsure.svg'
import lashes from '../assets/images/eyes/Lashes.svg'
import nice from '../assets/images/eyes/Nice.svg'
import normal from '../assets/images/eyes/Normal.svg'
import original from '../assets/images/eyes/Original.svg'
import tired from '../assets/images/eyes/Tired.svg'
import plainGlass from '../assets/images/glasses/Plain.svg'
import reading from '../assets/images/glasses/Reading.svg'
import sunnies from '../assets/images/glasses/Sunnies.svg'
import beard from '../assets/images/mouth/Beard.svg'
import beardTwo from '../assets/images/mouth/Beard2.svg'
import line from '../assets/images/mouth/Line.svg'
import lips from '../assets/images/mouth/Lips.svg'
import openSmile from '../assets/images/mouth/OpenSmile.svg'
import originalMouth from '../assets/images/mouth/Original.svg'
import smile from '../assets/images/mouth/Smile.svg'
import cat from '../assets/images/pet/Cat.svg'
import dog from '../assets/images/pet/Dog.svg'
import fish from '../assets/images/pet/Fish.svg'
import raptor from '../assets/images/pet/Raptor.svg'
import bun from '../assets/images/top/Bun.svg'
import cap from '../assets/images/top/Cap.svg'
import crazy from '../assets/images/top/Crazy.svg'
import curly from '../assets/images/top/Curly.svg'
import long from '../assets/images/top/Long.svg'
import mohawk from '../assets/images/top/Mohawk.svg'
import mullet from '../assets/images/top/Mullet.svg'
import ninja from '../assets/images/top/Ninja.svg'
import ponytail from '../assets/images/top/Ponytail.svg'
import smooth from '../assets/images/top/Smooth.svg'
import styled from '../assets/images/top/Styled.svg'

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
		removeFromFavorites({ commit }, avatarId) {
			commit('REMOVE_FROM_FAVORITES', avatarId)
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
			state.favorites.push(avatar)
		},
		REMOVE_FROM_FAVORITES(state, avatarId) {
			const index = state.favorites.findIndex(avatar => avatar.id === avatarId)
			if (index !== -1) {
				state.favorites.splice(index, 1)
			}
		},
	},
})
