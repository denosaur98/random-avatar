<template>
  <div class="generate__page-wrapper">
    <div class="generate__avatar">
      <img :src="currentBackground">
      <img :src="currentBody" class="avatar__body">
      <img :src="currentPet" class="avatar__pet">
      <img src="../assets/images/head/head.png" class="avatar__head">
      <img :src="currentMouth" class="avatar__mouth">
      <img :src="currentEyes" class="avatar__eyes">
      <img :src="currentGlasses" class="avatar__glasses">
      <img :src="currentEyebrows" class="avatar__eyebrows">
      <img :src="currentTop" class="avatar__top">
      <div class="avatar__buttons">
        <button class="buttons__btn update" @click="createAvatar">
          Обновить
          <img src="../assets/icons/update.svg">
        </button>
        <button class="buttons__btn favorite" :style="{ opacity: isFavorite ? 0.5 : 1 }" :disabled="isFavorite" @click="saveAvatar">
          В избранное
          <img src="../assets/icons/like.svg">
        </button>
      </div>
    </div>
    <RouterLink to="/favorites" class="page__link">Перейти в избранное</RouterLink>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store/index';

const isFavorite = ref(false)
const currentBackground = computed(() => store.state.currentBackground)
const currentBody = computed(() => store.state.currentBody)
const currentPet = computed(() => store.state.currentPet)
const currentMouth = computed(() => store.state.currentMouth)
const currentEyes = computed(() => store.state.currentEyes)
const currentGlasses = computed(() => store.state.currentGlasses)
const currentEyebrows = computed(() => store.state.currentEyebrows)
const currentTop = computed(() => store.state.currentTop)

function createAvatar() {
  store.dispatch('createAvatar')
  isFavorite.value = false
}
onMounted(() => {
  store.dispatch('createAvatar')
})

function saveAvatar() {
  const avatar = {
    id: store.state.favorites.length + 1,
    background: currentBackground.value,
    body: currentBody.value,
    pet: currentPet.value,
    mouth: currentMouth.value,
    eyes: currentEyes.value,
    glasses: currentGlasses.value,
    eyebrows: currentEyebrows.value,
    top: currentTop.value
  }
  store.dispatch('saveAvatar', avatar)
  isFavorite.value = true
}
</script>

<style lang="scss" scoped>
.generate__page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #000;
  gap: 30px;
  min-height: 100vh;

  .generate__avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 440px;
    height: 440px;
    border: 2px solid #fbff00;
    border-radius: 6px;
    position: relative;
    overflow: hidden;

    @media (max-width: 500px) {
      transform: scale(0.7);
    }

    .avatar__background {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .avatar__body {
      position: absolute;
      bottom: -60px;
      z-index: 1;
    }

    .avatar__pet {
      position: absolute;
      bottom: -60px;
      z-index: 4;
      left: -70px;
      transform: rotate(-20deg);
    }

    .avatar__head {
      position: absolute;
      top: 110px;
      z-index: 0;
    }
  
    .avatar__mouth {
      position: absolute;
      top: 210px;
      z-index: 1;
    }

    .avatar__eyes {
      position: absolute;
      top: 180px;
      z-index: 1;
    }

    .avatar__glasses {
      position: absolute;
      top: 170px;
      z-index: 2;
    }

    .avatar__eyebrows {
      position: absolute;
      top: 156px;
      z-index: 3;
    }

    .avatar__top {
      position: absolute;
      top: 40px;
      z-index: 3;
    }
    
    .avatar__buttons {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: auto;
      bottom: 20px;
      z-index: 999;
      position: absolute;

      .buttons__btn {
        cursor: pointer;
        border-radius: 4px;
        border: none;
        display: flex;
        align-items: center;
        padding: 5.5px 12px 6.5px 12px;
        color: #fff;
        font-size: 16px;
        gap: 5px;

        @media (hover:hover) {
          &:hover {
            box-shadow: 1px 1px 10px 1px #fff;
            transition: .3s;
          }
          &:disabled:hover {
            box-shadow: 0px 0px 0px 0px;
          }
        }

        @media (hover:none) {
          &:active {
            box-shadow: 1px 1px 10px 1px #fff;
            transition: .3s;
          }
        }
      }

      .update {background: rgb(253, 72, 32);}
      .favorite {background: #000; border: 1px solid #fff;}
    }
  }

  .page__link {
    text-decoration: none;
    color: #fff;
    font-size: 20px;

    @media (hover:hover) {
      &:hover {
        transition: .3s;
        color: #9c9c9c;
      }
    }

    @media (hover:none) {
      &:active {
        transition: .3s;
        color: #9c9c9c;
      }
    }
  }
}
</style>