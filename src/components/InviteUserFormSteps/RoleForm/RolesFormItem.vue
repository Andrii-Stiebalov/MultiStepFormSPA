<template >
  <div>
    <Colapse 
      :index="index"
      :title="company"
      :openCompany="openCompany"
      :setOpenCompany="setOpenCompany"
      :countOfSelected="categoryOfSelected"
      :selectedValues="categoryOfSelected"
    >
    <div v-show="openCompany === index + 1" class="roleFormContainer">
      <div class="roleFormSectionContainer"> 
        <label for="inputForm">
          <div class="rolesCheckboxContainer rolesCheckboxContainer--topTitle">
            <h4 class="inputFormTitle inputFormTitle--someBig checkboxContainerItem">Access to:</h4>
            <h4 class="inputFormTitle inputFormTitle--someBig">View only</h4>
            <h4 class="inputFormTitle inputFormTitle--someBig">Create</h4>
            <h4 class="inputFormTitle inputFormTitle--someBig">Approve</h4>
            <h4 class="inputFormTitle inputFormTitle--someBig">Pay</h4>
          </div>
          </label>
          <label for="inputForm">
          <div class="rolesCheckboxContainer">
            <span class="mainText checkboxContainerItem">All below</span>
            <input 
              v-for="category in categories" 
              :key="category" :value="category" 
              class="checkboxForm" type="checkbox" 
              v-model="allBelowAccessTo"
              @input="onAllBelowRoles(category)"
            >
          </div>
          </label>
          <label 
            v-for="role in roles" 
            :key="role.name" 
            for="input" 
            class="rolesCheckboxContainer"
          >
            <span class="mainText checkboxContainerItem">{{role.name}}</span>
            <input 
              v-for="category in categories" 
              :key="category" :value="category" 
              class="checkboxForm" type="checkbox" 
              v-model="role.value"
              v-bind:hidden="category === 'Pay' && !payAble.includes(role.name)"
            >
          </label>
        </div>
        <div class="rolesSideBar">
          <h4 class="inputFormTitle inputFormTitle--someBig rolesSideBar--title">Management:</h4>
          <div class="rolesSideBar__itemContainer">
            <label class="rolesSideBar__item">
            <input 
              class="checkboxForm" type="checkbox" 
              v-model="allBelowMenegment" 
              >
            <span class="mainText checkboxContainerItem">All Below</span>
            </label>
          </div>
          <div v-for="data in managmentData" :key="data.name" class="rolesSideBar__itemContainer">
            <label class="rolesSideBar__item">
            <input 
              :value="data.name" 
              class="checkboxForm" type="checkbox" 
              v-model="data.value" 
              >
            <span class="mainText checkboxContainerItem">{{data.name}}</span>
            </label>
          </div>
        </div>
        <div class="warningMesage">
          <div class="warningIcon" ></div>
          <span class="warningText">The user becomes a <a class="warningLink">Power user</a> if at least ONE of the following roles is selected: Approve, View only, Configuration, Suppliers and Items, Budgets, Warehouse manager.</span>
      </div>
      </div>
    </Colapse>
  </div>
</template>

<script> 
import Colapse from '../../Colapse/Colapse';

export default {
  name: 'RoleFormItem',
  data () {
    return {
      categoryOfSelected: [],
      payAble: ['Expenses', 'Invoices', 'All bellow'],
      managmentData:[
        {name: 'Configuration', value:''},
        {name: 'Suppliers and items', value:''},
        {name: 'Budgets', value:''},
        {name: 'Warehouse manager', value:''},
        {name: 'Reports', value:''},
        {name: 'Admin (Full access)', value:''},
      ],
      roles: [
        {name: 'Warehouse requests', value:[]},
        {name: 'Purchase requests', value:[]},
        {name: 'Request for proposals', value:[]},
        {name: 'Purchase orders', value:[]},
        {name: 'Receipts', value:[]},
        {name: 'Invoices', value:[]},
        {name: 'Expenses', value:[]},
      ],
      categories: ['View only', 'Create', 'Aprove', 'Pay'],
      allBelowAccessTo: [],
      allBelowMenegment: false,
    }
  },
  props: {
    index: Number,
    company: String,
    openCompany: Number,
    setOpenCompany: Function,
  },
  components: {
    Colapse
  },
  watch: {
  roles : {
      handler: function() {
        const originalSelectValues = [];
        this.roles.forEach(role => {
          role.value.forEach(val => {
            if (!originalSelectValues.includes(val)) {
              originalSelectValues.push(val)
          }
          })
        })
        this.categoryOfSelected = originalSelectValues
        console.log(this.categoryOfSelected)
      },
      deep: true,
    },
    allBelowAccessTo(value, oldValue) {
      let deleteValue;
      if(oldValue.length > value.length) {
        deleteValue = oldValue.find(val => !value.includes(val))
        this.onAllBelowRolesOff(deleteValue)
        console.log(deleteValue)
        return
      }

      const newValue = value.find(val => !oldValue.includes(val))

      this.onAllBelowRolesOn(newValue);
    },
    allBelowMenegment(val) {
      this.managmentData = this.managmentData.map(data => {
        return { ...data, value: val }
      } )
    }
  },
  methods: {
    setCategorySelected(category) {
      this.categoryOfSelected = [...  this.category, category]
    },
    onAllBelowRolesOn(category) {
      let changedRole;
        changedRole = this.roles
        .map(role => { 
          return role.value.includes(category) ?  role : {...role, value: [...role.value, category]}});

      this.roles = changedRole
    },
    onAllBelowRolesOff(category) {
      let changedRole;
        changedRole = this.roles
        .map(role => { 
          const filteredValue = role.value.filter(val => val != category)
          return  {...role, value: filteredValue}});
      this.roles = changedRole
    },

  },
}
</script>

<style lang="scss">
@import '../../../assets/scss/index.scss';

.rolesCheckboxContainer {
  display: grid;
  grid-template-columns: 200px 75px 52px 65px 29px;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  gap: 16px;

  margin-bottom: 16px;
  max-width: 470px;

  &--topTitle {
    margin-bottom: 21px;
  }
}


.warningLink {
  color: $secondaryColor;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}

.warningMesage {
  background: rgba(244, 244, 255, 0.5);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 10px 10px 14px;
  max-width: 636px;

  margin-top: 27px;
}

.warningText {
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: rgba(29, 36, 82, 0.5);

}

.warningIcon {
  background-image: url(../../../assets/icons/info.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 0 10px;
  opacity: 0.5;
  width: 20px;
  height: 20px;
}

.rolesSideBar {
  padding-left: 31px;

  &__itemContainer{
    &:last-child {
      margin-top: 57px;
      position: relative;
      &::after {
        content: '';
        background-image: url(../../../assets/icons/warning.svg);
        @extend %afterIcon;
      
        width: 22px;
        height: 20px;
        right: -38px ;
        top: 3px;
      }
    }
  }

  &--title {
    margin-bottom: 21px;
    position: relative;

      &::after {
      content: '';
      background-image: url(../../../assets/icons/info.svg);
      @extend %afterIcon;
      
      height: 19.5px;
      width: 19.5px;

      margin-top: -1px;

      right: 60px;
      top: 0;
      opacity: 0.5;
      transition: opacity 0.3s
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 16px;

    margin-bottom: 16px;
  }
}


.checkboxContainerItem {
  justify-self: start;
}

.roleFormContainer {
  display: flex;
  flex-wrap: wrap;
  
}

.roleFormSectionContainer {
  border-right: 1px solid #0000001a;
  padding-right: 40px;
  margin: 0;
}


</style>
