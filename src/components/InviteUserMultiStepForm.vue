<template>
  <div class="MultiStepFormContainer" id="MultiStepForm">
    <div class="title">Invite User</div>
    <div class="stepFormNav">
      <div 
        class="stepFormNavItem"
        :class="{
          'stepFormNavItem--isActive': curentStep === index + 1,
          'stepFormNavItem--complited': complitedSteps.includes(index + 1),
        }"
        v-for="(value, index) in steps"
        :key="value"
        @click="goToStep(index + 1)"
      >
        <div class="stepFormNavItemStatus">
          {{ index + 1 }}
        </div>
        <a class="stepFormNavItemText">
          {{ value }}
        </a>
      </div>
    </div> 
    <div class="hr"></div>
    <div class="stepFormMain"> 
      <transition name="fadeStep">
        <MainInfoFormStep
          v-show="checkIndexOpenCompany('Main Info')"
          :isDeseabledMultiseelct="isDeseabledMultiseelct"
          @selecte="setAvailableCompanies"
        />
      </transition>
      <transition name="fadeStep">
        <AvailableLocationsFormStep 
          v-show="checkIndexOpenCompany('Available Locations')" 
          :goToStep="goToStep"
          :availableCompanies="availableCompanies"
          :isDeseabledMultiseelct="isDeseabledMultiseelct"
        />
      </transition>
      <transition name="fadeStep">
        <AvailableDocumentForm 
          v-show="checkIndexOpenCompany('Available Documents Custom Fields')" 
          :availableCompanies="availableCompanies"
        />
      </transition>
      <transition name="fadeStep">
        <RoleForm 
          v-show="checkIndexOpenCompany('Roles')" 
          :availableCompanies="availableCompanies"
        />
      </transition>
    </div>
    <div class="hr"></div>
    <div class="footer">
      <button class="formButton" v-if='curentStep !== steps.length' @click="nextStep()">Next Step</button>
      <button class="formButton" v-if='curentStep === steps.length' @click="inviteUser()">Invite User</button>
      <button class="formButton" v-if='isUserWasInvited' @click="addChanges()">Add changes</button>
      <div class="toggler" v-show="curentStep === 1">
        <el-switch v-model="activeinAll" />
        <label 
          for="el-switch" 
          class="toggler__label" 
        >Active in all companies</label>
      </div>
    </div>
    <button type="submit" class="close" @click="setIsOpenInviteUser(false)"></button>
  </div>
</template>

<script>
import InviteUserFormSteps from '../assets/data/InviteUserFormSteps.json';
import MainInfoFormStep from './InviteUserFormSteps/MainInfoFormStep.vue';
import AvailableLocationsFormStep from './InviteUserFormSteps/AvailableLocationsForm/AvailableLocationsFormStep.vue';
import AvailableDocumentForm from './InviteUserFormSteps/AvailableDocumentForm/AvailableDocumentForm.vue';
import RoleForm from './InviteUserFormSteps/RoleForm/RolesForm.vue';

import { toggleAbledInputs } from '../assets/helpers/toggleAbledInputs'

export default {
  name: 'MultiStepForm',
  data() {
    return {
      steps: InviteUserFormSteps.steps,
      curentStep: 1,
      complitedSteps: ['Main Info', 'Available Locations', 'Available Documents Custom Fields', 'Roles'],
      activeinAll: 'false',
      availableCompanies: [],
      isDeseabledMultiseelct: false,
      isUserWasInvited: false,
    };
  },
  props: { 
    setIsOpenInviteUser: Function,
  },

  methods: {
    nextStep() {
      this.complitedSteps.push(this.curentStep);
      this.curentStep++;
    },

    goToStep(index) {
      this.curentStep = index;
    },

    inviteUser() {
      if (this.isUserWasInvited) {
        return;
      }
      
      this.$notify.success({
          title: 'Success',
          message: 'User was invited! 🎉',
          showClose: false
      })

      this.complitedSteps = this.steps
      .map((step, index) => index + 1);

      toggleAbledInputs(true);

      this.isDeseabledMultiseelct = true;
      this.isUserWasInvited = true;
    },

    addChanges() {
      toggleAbledInputs(false)

      this.isUserWasInvited = false;
      this.isDeseabledMultiseelct = false;
    },

    keydownNextStep(event) {
      if(event.keyCode === 9) {
        event.preventDefault();
        if (this.curentStep === this.steps.length) {
          this.curentStep = 1;
          return;
        }

      this.curentStep++;
      }
    },

    setAvailableCompanies(companies) {
      this.availableCompanies = companies.availableCompanies;
      console.log(companies)
    },

    checkIndexOpenCompany(nameIndex) {
      return this.steps.indexOf(nameIndex) + 1 === this.curentStep;
    }
  },

  mounted() {
    window.addEventListener("keydown", this.keydownNextStep)
  },

  unmounted() {
    window.removeEventListener("keydown", this.keydownNextStep)
  },

  components: {
    MainInfoFormStep,
    AvailableLocationsFormStep,
    AvailableDocumentForm,
    RoleForm
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';


.MultiStepFormContainer {
  background: #FFFFFF;
  box-shadow: 0px 8px 16px rgba(54, 62, 113, 0.24);
  border-radius: 16px;
  position: relative;

  width: 867px;

  padding: 24px;
  padding-bottom: 0;
  margin: auto;

  position: absolute;
  margin: 100px 0;
  top: 50px;
  left: 50%;
  transform: translate(-50%);
}

.footer {
  height: 84px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
}

.stepFormNav {
  display: flex;
  margin-top: 16px;

  cursor: pointer;
}

.stepFormNavItem {
  display: flex;
  align-items: center;

  margin-right: 16px;
  padding-bottom: 16px;
  border-bottom: solid 2px transparent;

  &:last-child {
    margin-right: 0;
  }

  &--isActive {
    border-bottom-color: $secondaryColor;

    & .stepFormNavItemStatus {
      color: $secondaryColor;
    }
    & .stepFormNavItemText {
      color: $secondaryColor;
    }
  }

  &--complited {
    & .stepFormNavItemStatus{
      background-color: $secondaryColor;
      color: $secondaryColor;
      position: relative;
      &::after {
        content: '';
        transform: translate(-50%, -50%) scale(1);
        transition: all 0.3s;
      }
    }
  }
}

.stepFormNavItemStatus {
  font-size: 14px;
  font-weight: 600; ;
  line-height: 30px;
  text-align: center;

  width: 30px;
  height: 30px;
  margin-right: 8px;

  background-color: $statusesColor;
  color: $statusesTextColor;
  border-radius: 50%;

  &::after {
    content: '';
    background-image: url(../assets/icons/statusCheck.svg);
    height: 10px;
    width: 10px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s;
  }
}

.stepFormNavItemText {
  font-size: 16px;
  line-height: 144%;
  font-weight: 500;
  color: $subtitleColor;
}

.stepFormMain {
  padding-top: 4px 0 0;
}

.toggler__text {
  @extend %mainText;
}

.toggler__label {
  @extend %mainText;

  color: $mainColor;
  font-weight: 500;
  margin-left: 10px;
  position: relative;

  &::after {
    content: '';
    background-image: url(../assets/icons/info.svg);

    @extend %afterIcon;
    height: 19.5px;
    width:  19.5px;

    margin-top: 2px;

    right: -28.2px;
    top: 0;
    opacity: 0.5;
    transition: opacity 0.3s
  }

  &:hover::after {
    opacity: 1;
  }
}

.is-checked {
  .el-switch__core {
    background-color: $secondaryColor !important;
    border-color: $secondaryColor !important;

    &::after {
      margin-left: -21px !important;
    }
  }
}

.formButton {
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;

  padding: 10.5px 16px;
  border-radius: 20px;

  border: none;
  background-color: $mainColor;

  cursor: pointer;
}

</style>