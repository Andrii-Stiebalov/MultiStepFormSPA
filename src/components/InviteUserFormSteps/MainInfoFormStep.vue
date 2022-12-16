<template >
  <div class="MainInfo">
    <label 
      v-for="field in mainInfoFields" 
      class="mainLabel"
      :for="field.name" 
      :key="field.name"
    >
      <h4 class="inputFormTitle">{{field.label}}</h4>
      <input 
        type="text"
        :name="field.name" 
        class="inputForm"
        v-model="field.value"
        :id="field.name"
      />
    </label>
    <label for="phone" class="mainLabel">
      <h4 class="inputFormTitle">Phone Number</h4>
      <input 
        type="tel" 
        name="phone" 
        class="inputForm"
        :value="phone"
        v-on:keydown="phoneValidator"
      >
    </label>
    <label for="avai" class="mainLabel">
      <h4 class="inputFormTitle">Available Companies</h4>
      <multiselect 
        v-model="availableCompanies" 
        :options="options" 
        :multiple="true" 
        :close-on-select="false" 
        :clear-on-select="false" 
        :preserve-search="true" 
        :limit="2"
        :limitText="limitText"
        placeholder=""
        deselectLabel=""
        selectLabel=""
        @input="onAvailableCompaniesSelecte"
      >
        <template 
          slot="singleLabel" 
          slot-scope="">
        </template>
      </multiselect>
    </label>
  </div>
</template>

<script> 
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.min.css';

export default {
  name: 'MainInfo',
  data () { 
    return {
      mainInfoFields: [
        {
          name: 'firstName',
          label: 'First Name',
          value: ''
        },
        {
          name: 'lastName',
          label: 'Last Name',
          value: ''
        },
        {
          name: 'email',
          label: 'Email Address',
          value: ''
        },
        {
          name: 'position',
          label: 'Position',
          value: ''
        }
      ],
      options: ['Precoro', 'Precoro Development', 'Procurement', 'Flex Logistic' ],
      phone: '',
      availableCompanies: [],
    }
  },

  components: {
    Multiselect,
  },

  methods: {
    phoneValidator(e) {
      let phoneData = e.target.value;
      const phoneLength = phoneData.length;
    
      const phoneFormats = [3, 7, 11, 14];

      if (!phoneData.includes('+')) {
        phoneData = '+' + phoneData;
      }

      if (phoneFormats.includes(phoneLength) && e.key !== 'Backspace') {
        phoneData += ' '
      }

      if (phoneLength > 17) {
        phoneData = phoneData.slice(0, 16);
      }

      this.phone = phoneData;
      console.log(this.mainInfoFields)
    },

    limitText(count) {
    return `+${count}`
    },

    onAvailableCompaniesSelecte(e) {
      this.$emit('selecte', {
        availableCompanies: e,
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/index.scss';

.MainInfo {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  margin: 20px 0 30px;
}

.mainLabel{
  &:nth-child(3) {
    order: 1;
  }
  &:last-child {
    order: 2;
  }
}

.multiselect { 
  max-width: 345px;
  &__single {
    @extend %mainText;
  }
  &__tags {
    @extend %inputForm;

    padding: 8px 40px 0 7px;
    color: $mainColor;
  }

  &__tag {
    background-color: #F4F4FF;
    max-width: 121px;

    color: $mainColor;
    font-family: "Inter";
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;

    &-icon {
      &:hover {
        background-color: $mainColor;
      }

      &:after {
        color: #1D245240;
        font-size: 16px;
        line-height: 16px;
      }
    }
  }

  &__strong {
    color: $mainColor;
    font-weight: 600;
    font-size: 12px;
    background-color: #F4F4FF;
    padding: 3px 8px;
    border-radius: 8px;
  }

  &__option--highlight {
    background: $mainColor;
    font-family: inherit;
  }
}

</style>