<template>
  <div class="availableDocumentSelectItem__wraper">
    <div class="availableDocumentSelectItem">
      <div class="sectionTitle sectionTitle--info">{{documentGroup.title}}</div>
      <label for="input" class="checkboxContainer checkboxContainer__lonely selectAll">
        <input class="checkboxForm" type="checkbox" v-model="isSelectAll" >
        <span class="mainText">Select All</span>
      </label>
      <DeepSelect 
        class="availableDocumentSelectItem__list"
        v-for="document in documentGroup.options"
        :isSelectAll="isSelectAll"
        :document="document" 
        :key="document.title"
        :changeCountOfSelected="changeCountOfSelected"
      />
    </div>
  </div>
</template>

<script>
import DeepSelect from './AvailableDocumentDeepSelect.vue'
export default {
  data () {
    return {
      isSelectAll: false,
    }
  },
  props: {
    documentGroup: {
      type: Object,
    },
    isSelectAllColumns: Boolean,
    changeCountOfSelected: Function
  },
  components: {
    DeepSelect,
  },
  watch: {
    isSelectAllColumns(val) {
      console.log(val, 'Select')
      this.isSelectAll = this.isSelectAllColumns;
    }
  }
}

</script>
