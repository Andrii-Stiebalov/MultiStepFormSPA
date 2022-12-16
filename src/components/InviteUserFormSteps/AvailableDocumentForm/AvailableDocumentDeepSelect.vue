<template> 
  <div>
    <div class="deepSelectHeader" >
      <div for="input" class="deepSelectCheckboxConatiner">
        <input class="checkboxForm checkboxForm--select" type="checkbox" v-model="value" >
        <div class="deepSelectCheckboxConatiner deepSelectCheckboxConatiner--children">
        <h3 
          class="colapseSelectHeader__title"
        >{{document.title}}</h3>
      
        <button 
          v-if="document?.options"
          @click="setOpenSelects(document.title)" 
          class="colapseSelectHeader__button"
          :class="{
            'colapseSelectHeader__button--isActive': openSelects.includes(document.title),
          }"
        ></button>
      </div>
    </div>
    </div>
      <Colapse 
        v-if="document?.options"
        :isSelect="true"
        :title="document.title"
        :setOpenCompany="setOpenSelects"
        :openCompany="openSelects"
      >
        <DeepSelect 
          class='deepSelectChildrenElem'
          v-show="openSelects.includes(document.title)"
          v-for="subdocuments in document.options"
          :document="subdocuments" 
          :isSelectAll="isSelectAll"
          :key="subdocuments.title"
          :changeCountOfSelected="changeCountOfSelected"
        />
      </Colapse>
  </div>
</template>

<script>
import Colapse from '../../Colapse/Colapse.vue'
export default {
  name: 'DeepSelect',
    data () {
      return {
        openSelects: [],
        value: false
      }
  },
  props: { 
    document: Object,
    isSelectAll: Boolean,
    changeCountOfSelected: Function
  },
  components: {
    Colapse
  },
  methods: {
    setOpenSelects(title) {
      if (this.openSelects.includes(title)) {
        this.openSelects = this.openSelects
          .filter(openSelect => openSelect != title)
          return;
      }

      this.openSelects = [...this.openSelects, title]; 
    }
  },
  watch: {
    isSelectAll() {
      this.value = this.isSelectAll
    },
    value() {
      console.log(this.value)
      this.changeCountOfSelected(this.value);
    }
  }
}
</script>

<style lang="scss">

@import "../../../assets/scss/index.scss";
  .deepSelectCheckboxConatiner {
    display: flex;
    justify-content: space-between;

    width: 100%;
    gap: 8px;
    padding: 9px 0 0;
    align-items: center;

    &--children {
      padding-bottom: 9px;
      border-bottom: 1px solid #0000001a;
    }
  }

  .checkboxForm--select {
    margin-top: 2px;
    width: 18px;
    height: 18px;
  }

  .deepSelectHeader {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .availableDocumentSelectItem__list {
    &:last-child 
    .deepSelectHeader 
    .deepSelectCheckboxConatiner--children {
      border: none;
    }
  }

  .deepSelectChildrenElem {
    padding-left: 5px;
  }

  .colapseSelectHeader__button--select {
    margin-left: 36px;
  }

  .colapseSelectHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    opacity: 1;

  &__info {
    display: flex;
    justify-content: center;
    align-self: center;
    opacity: 1;
  }

  &__title {
    font-family: 'Inter';
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;

    color: $mainColor;

    display: flex;
    opacity: 1;
  }

  &__button {
    mask-image: url(../../../assets/icons/openArrow.svg);
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
    margin-left: 22px;
    padding: 5px;
    width: 12px;
    height: 7px;
    transition: all 0.3s;
    opacity: 1;

    background-color: $mainColor;

    &--isActive {
      transform: matrix(1, 0, 0, -1, 0, 0);
      transition: all 0.3s;
      background-color: $secondaryColor;
    }
  }
}
</style>