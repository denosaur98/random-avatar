<template>
  <div class="generate__page-wrapper">
    <div class="generate__avatar">
      <img src="../assets/images/background/Boom.png">
      <img src="../assets/images/body/Muscle_shirt.png" class="avatar__body">
      <img src="../assets/images/pet/Cat.png" class="avatar__pet">
      <img src="../assets/images/head/head.png" class="avatar__head">
      <img src="../assets/images/mouth/OpenSmile.png" class="avatar__mouth">
      <img src="../assets/images/eyes/Normal.png" class="avatar__eyes">
      <img src="../assets/images/glasses/Sunnies.png" class="avatar__glasses">
      <img src="../assets/images/eyebrows/Formed.png" class="avatar__eyebrows">
      <img src="../assets/images/top/Ninja.png" class="avatar__top">
      <div class="avatar__buttons">
        <button class="buttons__btn update">
          Обновить
          <img src="../assets/icons/update.svg">
        </button>
        <button class="buttons__btn favorite">
          В избранное
          <img src="../assets/icons/like.svg">
        </button>
      </div>
    </div>
    <RouterLink to="/favorites" class="page__link">Перейти в избранное</RouterLink>
  </div>
</template>

<script setup>

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
      z-index: 2;
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

        &:hover {
          opacity: 0.7;
          transition: .3s;
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

    &:hover {
      transition: .3s;
      color: #9c9c9c;
    }
  }
}
</style>