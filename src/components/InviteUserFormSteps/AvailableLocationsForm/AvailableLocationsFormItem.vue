<template >
  <div>
    <Colapse 
      :index="index"
      :title="company"
      :openCompany="openCompany"
      :setOpenCompany="setOpenCompany"
      :countOfSelected="countOfSelected"
    >
    <div v-show="openCompany === index + 1">
        <label for="inputForm">
        <h4 class="inputFormTitle inputFormTitle--info">Main Location</h4>
        <multiselect 
          v-model="mainLocation" 
          :options="options" 
          placeholder=""
          deselectLabel=""
          selectLabel=""
        >
          <template 
            slot="singleLabel" 
            slot-scope="">
          </template>
        </multiselect>
        </label>
        <label for="input" class="checkboxContainer checkboxContainer__lonely">
          <input class="checkboxForm" type="checkbox" v-model="isSelectAllLocations" >
          <span class="mainText" >Select All Locations</span>
        </label>
        <div class="AvailableLocations">
          <h4 class="inputFormTitle inputFormTitle--someBig">Available Locations</h4>
          <div class="AvailableLocations__checkBoxsGroup">
            <label 
              for="input" 
              class="checkboxContainer" 
              v-for="location in locations"
              :key="location.id"
            >
              <input class="checkboxForm" type="checkbox" v-model="location.value">
              <span class="mainText">{{location.name}}</span>
            </label>
          </div>
        </div>
      </div>
    </Colapse>
  </div>
</template>


<script> 
import Multiselect from 'vue-multiselect';
import Colapse from '../../Colapse/Colapse';

export default {
  name: 'LocationFormBody',
  data () {
    return {
      mainLocation: '',
      countOfSelected: 0,
      isSelectAllLocations: '',

      // it is meant to take data according to 
      // the selected companies and copy them into 
      // a new array with the addition of a property "value" 🐥

      options: ['Main Precoro US', 'Precoro', 'US'],
      locations: [
        {name: 'Berlin', id: 'berlin', value:''},
        {name: 'Poland Office', id:'poland', value:''},
        {name: 'Venice Office', id:'venice', value:''},
        {name: 'USA Office', id:'USA', value:''},
        {name: 'Canada', id:'canada', value:''},
        {name: 'Ukraine Kiyv Lukivska 7 Main Office', id:'Kiyv', value:''},
        {name: 'Mexico', id:'mexico', value:''}
      ]
    }
  },
  props: {
    index: Number,
    company: String,
    openCompany: Number,
    setOpenCompany: Function,
  },
  components: {
    Multiselect,
    Colapse
  },
  watch: {
    locations : {
      handler: function(locations) {
        this.countOfSelected = locations
          .filter(location => location.value)
          .length;
      },
      deep: true,
    },
    isSelectAllLocations(value) {
      const selectedLocations = this.locations.map(location => { 
        return {
        ...location,
        value
        }
        });
      this.locations = selectedLocations;
      console.log(selectedLocations);
    },
  },
  methods: {
    selectAllLocations(e) {
      console.log(e.target)
    }
  },
}
</script>

<style lang="scss">
@import '../../../assets/scss/index.scss';

.fade-enter-active, .fade-leave-active {
  transition: 0.2s;
  overflow-y: hidden;

  max-height: 300px;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  max-height: 0px
}

</style>