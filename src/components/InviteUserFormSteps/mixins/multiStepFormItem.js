export const multiStepFormItem = {
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

  methods: {
    setOpenCompany(index) {
      this.openCompany = this.openCompany === index + 1 ? null : index + 1;
    }
  }
}