<template >
  <div v-if="availableCompanies.length">
    <RoleFormItem
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
import RoleFormItem from './RolesFormItem.vue';
import { multiStepFormItem } from '../mixins/multiStepFormItem'

export default {
  name: 'RoleForm',
  mixins: [multiStepFormItem],

  components: {
    RoleFormItem,
  },
}
</script>