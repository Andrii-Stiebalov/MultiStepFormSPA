<template>
  <div class="colapseHeader">
    <h3 class="sectionTitle sectionTitle--info" @click="setOpenCompany(index)">{{title}}</h3>
    <div class="colapseHeader__info">
      <span v-if="!selectedValues">{{`${countOfSelected || 'Not'} selected`}}</span>
      <span v-if="selectedValues">{{`${countOfSelected}`}}</span>
      <button 
        @click="setOpenCompany(index)" 
        class="colapseHeader__button"
        :class="{
          'colapseHeader__button--isActive': openCompany === index + 1,
        }"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'colapseHeader',
  props: {
    index: Number,
    title: String,
    openCompany: [Number, Array],
    countOfSelected: [Number, Array],
    selectedValues: Array,
    setOpenCompany: Function,
  },
}
</script>

<style lang="scss">
@import "../../assets/scss/index.scss";

.colapseHeader {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;

  &__info {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;

    color: $mainColor;
    opacity: 0.4;
    display: flex;
  }

  &__button {
    mask-image: url(../../assets/icons/openArrow.svg);
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
    margin-left: 22px;
    margin-left: 22px;
    padding: 5px;
    width: 12px;
    height: 7px;
    transition: transform 0.3s;
    background-color: #80828b;
;

    &--isActive {
      transform: matrix(1, 0, 0, -1, 0, 0);
      transition: transform 0.3s;
    }
  }
}
</style>