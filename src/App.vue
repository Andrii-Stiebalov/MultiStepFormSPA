<template>
  <div id="app">
    <button 
      class="formButton InviteUserButton"  
      @click="setIsOpenInviteUser(true)"
    >Invite User</button>
    <transition name="fadeSPA">
      <InviteUser 
        :setIsOpenInviteUser="setIsOpenInviteUser"
        v-show="isOpenInviteUser"
      />
  </transition>
  </div>
</template>

<script>
import InviteUser from './components/InviteUserMultiStepForm.vue'

export default {
  name: 'App',
  components: {
    InviteUser
  },
  data() {
    return {
        isOpenInviteUser: false,
    }
  },
  methods: {
    setIsOpenInviteUser(val) {
      this.isOpenInviteUser = val;
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';

@font-face {
  font-family: "Inter";
  src: local("Inter"),
   url(./assets/fonts/Inter-VariableFont_slnt\,wght.ttf) format("truetype");
}

body {
  font-family: 'Inter';
  font-weight: 400;
  margin: 0;
  background-color: rgb(163, 163, 163);
}

.InviteUserButton {
  background: $secondaryColor;
  @extend %mainText;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}

.fadeSPA-enter-active, .fadeSPA-leave-active {
  transition: 0.2s;
  overflow-y: hidden;

  max-height: 500px;
}
.fadeSPA-enter, .fadeSPA-leave-to  {
  opacity: 0;
  max-height: 0px
}
</style>
