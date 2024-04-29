<template>
  <div class="avatar__favorites">
    <div class="favorites__place">
      <div class="place__item" v-for="item in store.state.favorites" :key="item.id">
        <img :src="item.background" class="avatar__background">
        <img :src="item.body" class="avatar__body">
        <img :src="item.pet" class="avatar__pet">
        <img src="../assets/images/head/head.png" class="avatar__head">
        <img :src="item.mouth" class="avatar__mouth">
        <img :src="item.eyes" class="avatar__eyes">
        <img :src="item.glasses" class="avatar__glasses">
        <img :src="item.eyebrows" class="avatar__eyebrows">
        <img :src="item.top" class="avatar__top">
        <button class="item__btn" @click="removeFromFavorites(item.id)">
          Удалить
          <img src="../assets/icons/trash.svg">
        </button>
      </div>
    </div>
    <RouterLink to="/" class="page__link">На главную</RouterLink>
  </div>
</template>

<script setup>
import store from '../store/index';

function removeFromFavorites(avatarId) {
  store.dispatch('removeFromFavorites', avatarId)
}
</script>

<style lang="scss" scoped>
.avatar__favorites {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 50px;
  min-height: 100vh;

  .favorites__place {
    display: grid;
    grid-template-columns: repeat(4, auto);

    @media (max-width: 1050px) {
      grid-template-columns: repeat(3, auto);
    }

    @media (max-width: 800px) {
      grid-template-columns: repeat(2, auto);
    }

    @media (max-width: 550px) {
      display: flex;
      flex-direction: column;
    }

    .place__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 220px;
      height: 220px;
      border: 2px solid #fbff00;
      border-radius: 6px;
      position: relative;
      overflow: hidden;
      margin: 20px;

      .avatar__background {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
      }

      .avatar__body {
        position: absolute;
        bottom: -30px;
        z-index: 1;
        width: 155px;
        height: 116px;
      }

      .avatar__pet {
        position: absolute;
        bottom: -80px;
        z-index: 4;
        left: -110px;
        transform: rotate(-20deg) scale(0.5);
      }

      .avatar__head {
        position: absolute;
        top: 47px;
        z-index: 0;
        width: 83px;
        height: 95px;
      }
    
      .avatar__mouth {
        position: absolute;
        top: 90px;
        z-index: 1;
        transform: scale(0.5);
      }

      .avatar__eyes {
        position: absolute;
        top: 75px;
        z-index: 1;
        transform: scale(0.5);
      }

      .avatar__glasses {
        position: absolute;
        top: 70px;
        z-index: 2;
        transform: scale(0.5);
      }

      .avatar__eyebrows {
        position: absolute;
        top: 65px;
        z-index: 3;
        transform: scale(0.5);
      }

      .avatar__top {
        position: absolute;
        top: -45px;
        z-index: 3;
        transform: scale(0.5);
      }
      
      .item__btn {
        position: absolute;
        cursor: pointer;
        border-radius: 4px;
        display: flex;
        align-items: center;
        padding: 5.5px 12px 6.5px 12px;
        width: 50%;
        color: #fff;
        font-size: 16px;
        gap: 5px;
        background: #000;
        border: 1px solid #fff;
        bottom: 10px;
        z-index: 999;

        img {
          width: 20px;
          height: 20px;
        }

        @media (hover:hover) {
          &:hover {
            box-shadow: 1px 1px 10px 1px #fff;
            transition: .3s;
          }
        }

        @media (hover:none) {
          &:active {
            box-shadow: 1px 1px 10px 1px #fff;
            transition: .3s;
          }
        }
      }
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