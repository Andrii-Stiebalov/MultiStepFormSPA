<template >
  <div v-if="availableCompanies.length">
    <AvailableDocumentItem 
    class="available"
      v-for="(company, index) in availableCompanies" 
        :key="company" 
        :index="index"
        :company="company"
        :openCompany="openCompany"
        :setOpenCompany="setOpenCompany"
      />
  </div>
</template>

<script> 
import AvailableDocumentItem from './AvailableDocumentItem.vue';
import { multiStepFormItem } from '../mixins/multiStepFormItem'

export default {
  name: 'AvailableDocument',
  
  mixins: [multiStepFormItem],

  components: {
    AvailableDocumentItem,
  },

}
</script>