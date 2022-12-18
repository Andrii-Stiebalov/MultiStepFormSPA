<template>
  <div>
    <div v-if="!availableCompanies.length" class="mesage">
    <h3>You have not selected any company😅</h3>
    <button class="mesage__button formButton" @click="goToStep(1)">GO TO STEP 1</button>
  </div>
    <div v-if="availableCompanies.length">
      <AvailableLocationsFormBody 
      class="available"
      v-for="(company, index) in availableCompanies" 
        :key="company" 
        :index="index"
        :company="company"
        :openCompany="openCompany"
        :setOpenCompany="setOpenCompany"
        :isDeseabledMultiseelct="isDeseabledMultiseelct"
      />
    </div>
  </div>
</template>

<script> 
import AvailableLocationsFormBody from './AvailableLocationsFormItem.vue';
import { multiStepFormItem } from '../mixins/multiStepFormItem'

export default {
  name: 'LocationForm',
  
  mixins: [multiStepFormItem],

  props: {
    goToStep: Function,
    isDeseabledMultiseelct: Boolean
  },
  
  components: {
    AvailableLocationsFormBody,
  },
}
</script>

<style lang="scss">
@import '../../../assets/scss/index.scss';

.AvailableLocations {
  &__checkBoxsGroup {
    display: grid;
    grid-template-columns: 200px 1fr;
    margin: 10px 0 31px;
    gap: 8px;
  }
}

.available {
  border-top: 1px solid #0000001A;
  &:first-child {
    border: none;
  }
  &:last-child {
    margin-bottom: 24px;
  }
}

.sectionTitle {
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;

  color: $mainColor;
}

.inputFormTitle--someBig {
  font-size: 16px;
  margin-top: 17px;
}

.inputFormTitle--info {

  &::after {
    content: ' *';
    color: $warningColor;
    font-size: 11px;
  }
}

.checkboxContainer {
  display: flex;
  align-items: center;
  gap: 8px;

  &__lonely {
    margin-top: 20px;
  }
}

.mesage {
  color: $mainColor;
  font-size: 24px;
  line-height: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px
}

.checkboxForm {
  height: 16px;
  width: 16px;
  border-radius: 4px;
  border: 1px solid #C6C8D4;
  outline: none;
  padding: 4.5px 3.5px;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
   appearance: none;

  cursor: pointer;

  position: relative;

  &:checked {
    background-color: $secondaryColor;
    border: 1px solid #415ADA;

      &::before {
        content: '';
        background-image: url('../../../assets/icons/checkboxArrow.svg');
        @extend %afterIcon;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 9px;
        height: 7px;
        display: block;
        text-align: center;
      }
    }
  }

</style>