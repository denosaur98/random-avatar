<template>
  <div class="generate__page-wrapper">
    <div class="avatar__generate">
      <div class="generate__buttons">
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

  .avatar__generate {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 440px;
    height: 440px;
    border: 2px solid #fbff00;
    border-radius: 6px;
  
    .generate__buttons {
      display: flex;
      align-items: center;
      margin-bottom: auto;
      gap: 12px;
      margin-top: auto;
      margin-bottom: 20px;

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