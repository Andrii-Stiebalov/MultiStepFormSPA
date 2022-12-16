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
        <label for="input" class="checkboxContainer checkboxContainer__lonely">
          <input class="checkboxForm" type="checkbox" v-model="isSelectAllColumns" >
          <span class="mainText">Select All Document Custom Fields</span>
        </label>
        <div class="AvailableDocument">
          <h4 class="inputFormTitle inputFormTitle--someBig">Available Document Custom Fields</h4>
          <div class="availableDocumentSlectGroup">
            <AvailableDocumentDeepSelectColumn 
              v-for="documentGroup in documents"
              :isSelectAllColumns="isSelectAllColumns"
              :key="documentGroup.title" 
              :documentGroup="documentGroup"
              :changeCountOfSelected="changeCountOfSelected"
            />
          </div> 
        </div> 
      </div>
    </Colapse>
  </div>
</template>


<script> 
import Colapse from '../../Colapse/Colapse.vue';
import AvailableDocumentDeepSelectColumn from './AvailableDocumentDeepSelectColumn.vue';

export default {
  name: 'AvailableDocumentItem',
  data () {
    return {
      // I chose the method of counting selected checkboxes 
      // using a counter, because the recursive function 
      // is much more demanding I hope 🤓

      countOfSelected: 0,
      isSelectAllColumns: false,
      documents: [
        {
          title: 'Classes',
          options: [{
            title: 'Class 1',
            value: '',
            options: [{
              title: 'subDevs',
              values: '',
              options: [{title: 'subDevs', value: ''}]
            }]
          }, 
          {
            title: 'Class 2',
            value: '',
            options: [{
              title: 'sub Devs',
              values: '',
              options: [{title: 'sub Devs', value: ''}]
            }]
          },
          {
            title: 'Class 3',
            value: '',
          },
          {
            title: 'Class 4',
            value: '',
          },]
        },
        {
          title: 'Departments',
          options: [{
            title: 'Developers',
            value: '',
            options: [{
              title: 'subDevs',
              values: '',
              options: [
                {
                title: '2nd Sub-Developers', 
                value: '', 
                options: [
                  {
                    title: '3nd Sub-Developers',
                     value: '',
                     options: [{
                      title: 'IOS and Android Devs',
                      value: ''
                     }]
                  },
                  {
                    title: '4th Sub-Developers',
                     value: ''
                  },
                ]
              }]
              }]
            }, 
          {
            title: 'Class 3',
            value: '',
          },
          {
            title: 'Class 4',
            value: '',
          },]
        },
        {
          title: 'DCF 3',
          options: [{
            title: 'Class 1',
            value: '',
            options: [{
              title: 'subDevs',
              values: '',
              options: [{title: 'subDevs', value: ''}]
            }]
          }, 
          {
            title: 'Class 2',
            value: '',
            options: [{
              title: 'sub Devs',
              values: '',
              options: [{title: 'sub Devs', value: ''}]
            }]
          },
          {
            title: 'Class 3',
            value: '',
          },
          {
            title: 'Class 4',
            value: '',
          },]
        },
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
    Colapse,
    AvailableDocumentDeepSelectColumn
  },
  methods: {
    changeCountOfSelected(value) {
      if(value) {
        this.countOfSelected++;
        return;
      }
      this.countOfSelected--
    }
  },
};

</script>

<style lang="scss">
@import '../../../assets/scss/index.scss';

.availableDocumentSlectGroup {
  display: flex;
  margin: 8px 0 40px;
  gap: 48px;
}

.fade-enter-active, .fade-leave-active {
  transition: 0.2s;
  overflow-y: hidden;

  max-height: 300px;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  max-height: 0px
}

.availableDocumentSelectItem {
  min-width: 200px;

  &__wraper {
    &:last-child {
    margin-left: 28px;
    }
  }
}

.selectAll {
  margin: 16px 0;
}

</style>