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
export default {
  name: 'AvailableDocument',
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
    AvailableDocumentItem,
  },
  methods: {
    setOpenCompany(index) {
      this.openCompany = this.openCompany === index + 1 ? null : index + 1;
    }
  }
}
</script>