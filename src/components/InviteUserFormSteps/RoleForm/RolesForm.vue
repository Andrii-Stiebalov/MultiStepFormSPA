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

export default {
  name: 'RoleForm',
  data () {
    return {
      openCompany: 1,
    }
  },
  props: {
    availableCompanies: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    RoleFormItem,
  },
  methods: {
    setOpenCompany(index) {
      this.openCompany = this.openCompany === index + 1 ? null : index + 1;
    }
  }
}
</script>