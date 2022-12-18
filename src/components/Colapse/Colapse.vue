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
