<template>
  <div class="avatar__favorites">
    <div class="favorites__place">
      <div class="place__item" v-for="item in store.state.favorites" :key="item.id">
        <button class="item__btn">
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
</script>

<style lang="scss" scoped>
.avatar__favorites {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
  gap: 30px;
  width: 100%;
  height: 100%;

  .favorites__place {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 40px;

    .place__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 220px;
      height: 220px;
      border: 2px solid #fbff00;
      border-radius: 6px;
      
      .item__btn {
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
        margin-top: auto;
        border: 1px solid #fff;
        margin-bottom: 20px;

        img {
          width: 20px;
          height: 20px;
        }

        &:hover {
          opacity: 0.7;
          transition: .3s;
        }
      }
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