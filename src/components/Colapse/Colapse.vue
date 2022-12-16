<template >
  <div>
    <ColapseHeader 
      v-if="!isSelect"
      :index="index"
      :title="title"
      :openCompany="openCompany"
      :setOpenCompany="setOpenCompany"
      :countOfSelected="countOfSelected"
      :selectedValues="selectedValues"
    />
    <transition name="fade">
      <slot></slot>
    </transition>
  </div>
</template>
<script> 
import ColapseHeader from './ColapseHeader.vue';

export default {
  name: 'ColapseComponent',
  props: {
    index: Number,
    title: String,
    openCompany: [Number, Array],
    setOpenCompany: Function,
    countOfSelected: [Number, Array],
    selectedValues: Array,
    isSelect: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ColapseHeader,
  },
  
  methods: {
    selectAllLocations(e) {
      console.log(e.target)
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/scss/index.scss';

.fade-enter-active, .fade-leave-active {
  transition: 0.2s;
  overflow-y: hidden;

  max-height: 300px;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  max-height: 0px
}

</style>