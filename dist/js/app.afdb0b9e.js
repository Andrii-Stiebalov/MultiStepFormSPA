(function(){"use strict";var e={4272:function(e,t,a){var n=a(7754),l=a.n(n),s=a(6369),o=a(4193),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("button",{staticClass:"formButton InviteUserButton",on:{click:function(t){return e.setIsOpenInviteUser(!0)}}},[e._v("Invite User")]),t("transition",{attrs:{name:"fadeSPA"}},[t("InviteUser",{directives:[{name:"show",rawName:"v-show",value:e.isOpenInviteUser,expression:"isOpenInviteUser"}],attrs:{setIsOpenInviteUser:e.setIsOpenInviteUser}})],1)],1)},c=[],r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"MultiStepFormContainer"},[t("div",{staticClass:"title"},[e._v("Invite User")]),t("div",{staticClass:"stepFormNav"},e._l(e.InviteUserFormSteps.steps,(function(a,n){return t("div",{key:a,staticClass:"stepFormNavItem",class:{"stepFormNavItem--isActive":e.curentStep===n+1,"stepFormNavItem--complited":e.complitedSteps.includes(n+1)},on:{click:function(t){e.curentStep=n+1}}},[t("div",{staticClass:"stepFormNavItemStatus"},[e._v(" "+e._s(n+1)+" ")]),t("a",{staticClass:"stepFormNavItemText"},[e._v(" "+e._s(a)+" ")])])})),0),t("div",{staticClass:"hr"}),t("div",{staticClass:"stepFormMain"},[t("transition",{attrs:{name:"fadeStep"}},[t("MainInfoFormStep",{directives:[{name:"show",rawName:"v-show",value:e.checkIndexOpenCompany("Main Info"),expression:"checkIndexOpenCompany('Main Info')"}],on:{selecte:e.setAvailableCompanies}})],1),t("transition",{attrs:{name:"fadeStep"}},[t("AvailableLocationsFormStep",{directives:[{name:"show",rawName:"v-show",value:e.checkIndexOpenCompany("Available Locations"),expression:"checkIndexOpenCompany('Available Locations')"}],attrs:{goToStep:e.goToStep,availableCompanies:e.availableCompanies}})],1),t("transition",{attrs:{name:"fadeStep"}},[t("AvailableDocumentForm",{directives:[{name:"show",rawName:"v-show",value:e.checkIndexOpenCompany("Available Documents Custom Fields"),expression:"checkIndexOpenCompany('Available Documents Custom Fields')"}],attrs:{availableCompanies:e.availableCompanies}})],1),t("transition",{attrs:{name:"fadeStep"}},[t("RoleForm",{directives:[{name:"show",rawName:"v-show",value:e.checkIndexOpenCompany("Roles"),expression:"checkIndexOpenCompany('Roles')"}],attrs:{availableCompanies:e.availableCompanies}})],1)],1),t("div",{staticClass:"hr"}),t("div",{staticClass:"footer"},[t("button",{staticClass:"formButton",on:{click:function(t){return e.nextStep()}}},[e._v(e._s(e.curentStep!==e.InviteUserFormSteps.steps.length?"Next Step":"Invite User"))]),t("div",{directives:[{name:"show",rawName:"v-show",value:1===e.curentStep,expression:"curentStep === 1"}],staticClass:"toggler"},[t("el-switch",{model:{value:e.activeinAll,callback:function(t){e.activeinAll=t},expression:"activeinAll"}}),t("label",{staticClass:"toggler__label",attrs:{for:"el-switch"}},[e._v("Active in all companies")])],1)]),t("button",{staticClass:"close",attrs:{type:"submit"},on:{click:function(t){return e.setIsOpenInviteUser(!1)}}})])},u=[],p=(a(7658),JSON.parse('{"steps":["Main Info","Available Locations","Available Documents Custom Fields","Roles"]}')),m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"MainInfo"},[e._l(e.mainInfoFields,(function(a){return t("label",{key:a.name,staticClass:"mainLabel",attrs:{for:a.name}},[t("h4",{staticClass:"inputFormTitle"},[e._v(e._s(a.label))]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"field.value"}],staticClass:"inputForm",attrs:{type:"text",name:a.name,id:a.name},domProps:{value:a.value},on:{input:function(t){t.target.composing||e.$set(a,"value",t.target.value)}}})])})),t("label",{staticClass:"mainLabel",attrs:{for:"phone"}},[t("h4",{staticClass:"inputFormTitle"},[e._v("Phone Number")]),t("input",{staticClass:"inputForm",attrs:{type:"tel",name:"phone"},domProps:{value:e.phone},on:{keydown:e.phoneValidator}})]),t("label",{staticClass:"mainLabel",attrs:{for:"avai"}},[t("h4",{staticClass:"inputFormTitle"},[e._v("Available Companies")]),t("multiselect",{attrs:{options:e.options,multiple:!0,"close-on-select":!1,"clear-on-select":!1,"preserve-search":!0,limit:2,limitText:e.limitText,placeholder:"",deselectLabel:"",selectLabel:""},on:{input:e.onAvailableCompaniesSelecte},model:{value:e.availableCompanies,callback:function(t){e.availableCompanies=t},expression:"availableCompanies"}},[t("template",{slot:"singleLabel"})],2)],1)],2)},v=[],d=a(396),C=a.n(d),h={name:"MainInfo",data(){return{mainInfoFields:[{name:"firstName",label:"First Name",value:""},{name:"lastName",label:"Last Name",value:""},{name:"email",label:"Email Address",value:""},{name:"position",label:"Position",value:""}],options:["Precoro","Precoro Development","Procurement","Flex Logistic"],phone:"",availableCompanies:[]}},components:{Multiselect:C()},methods:{phoneValidator(e){let t=e.target.value;const a=t.length,n=[3,7,11,14];t.includes("+")||(t="+"+t),n.includes(a)&&"Backspace"!==e.key&&(t+=" "),a>17&&(t=t.slice(0,16)),this.phone=t,console.log(this.mainInfoFields)},limitText(e){return`+${e}`},onAvailableCompaniesSelecte(e){this.$emit("selecte",{availableCompanies:e})}}},f=h,y=a(1001),b=(0,y.Z)(f,m,v,!1,null,null,null),S=b.exports,A=function(){var e=this,t=e._self._c;return t("div",[e.availableCompanies.length?e._e():t("div",{staticClass:"mesage"},[t("h3",[e._v("You have not selected any company😅")]),t("button",{staticClass:"mesage__button formButton",on:{click:function(t){return e.goToStep(1)}}},[e._v("GO TO STEP 1")])]),e.availableCompanies.length?t("div",e._l(e.availableCompanies,(function(a,n){return t("AvailableLocationsFormBody",{key:a,staticClass:"available",attrs:{index:n,company:a,openCompany:e.openCompany,setOpenCompany:e.setOpenCompany}})})),1):e._e()])},_=[],x=function(){var e=this,t=e._self._c;return t("div",[t("Colapse",{attrs:{index:e.index,title:e.company,openCompany:e.openCompany,setOpenCompany:e.setOpenCompany,countOfSelected:e.countOfSelected}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.openCompany===e.index+1,expression:"openCompany === index + 1"}]},[t("label",{attrs:{for:"inputForm"}},[t("h4",{staticClass:"inputFormTitle inputFormTitle--info"},[e._v("Main Location")]),t("multiselect",{attrs:{options:e.options,placeholder:"",deselectLabel:"",selectLabel:""},model:{value:e.mainLocation,callback:function(t){e.mainLocation=t},expression:"mainLocation"}},[t("template",{slot:"singleLabel"})],2)],1),t("label",{staticClass:"checkboxContainer checkboxContainer__lonely",attrs:{for:"input"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isSelectAllLocations,expression:"isSelectAllLocations"}],staticClass:"checkboxForm",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isSelectAllLocations)?e._i(e.isSelectAllLocations,null)>-1:e.isSelectAllLocations},on:{change:function(t){var a=e.isSelectAllLocations,n=t.target,l=!!n.checked;if(Array.isArray(a)){var s=null,o=e._i(a,s);n.checked?o<0&&(e.isSelectAllLocations=a.concat([s])):o>-1&&(e.isSelectAllLocations=a.slice(0,o).concat(a.slice(o+1)))}else e.isSelectAllLocations=l}}}),t("span",{staticClass:"mainText"},[e._v("Select All Locations")])]),t("div",{staticClass:"AvailableLocations"},[t("h4",{staticClass:"inputFormTitle inputFormTitle--someBig"},[e._v("Available Locations")]),t("div",{staticClass:"AvailableLocations__checkBoxsGroup"},e._l(e.locations,(function(a){return t("label",{key:a.id,staticClass:"checkboxContainer",attrs:{for:"input"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"location.value"}],staticClass:"checkboxForm",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.value)?e._i(a.value,null)>-1:a.value},on:{change:function(t){var n=a.value,l=t.target,s=!!l.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);l.checked?i<0&&e.$set(a,"value",n.concat([o])):i>-1&&e.$set(a,"value",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(a,"value",s)}}}),t("span",{staticClass:"mainText"},[e._v(e._s(a.name))])])})),0)])])])],1)},g=[],k=function(){var e=this,t=e._self._c;return t("div",[e.isSelect?e._e():t("ColapseHeader",{attrs:{index:e.index,title:e.title,openCompany:e.openCompany,setOpenCompany:e.setOpenCompany,countOfSelected:e.countOfSelected,selectedValues:e.selectedValues}}),t("transition",{attrs:{name:"fade"}},[e._t("default")],2)],1)},O=[],w=function(){var e=this,t=e._self._c;return t("div",{staticClass:"colapseHeader"},[t("h3",{staticClass:"sectionTitle sectionTitle--info",on:{click:function(t){return e.setOpenCompany(e.index)}}},[e._v(e._s(e.title))]),t("div",{staticClass:"colapseHeader__info"},[e.selectedValues?e._e():t("span",[e._v(e._s(`${e.countOfSelected||"Not"} selected`))]),e.selectedValues?t("span",[e._v(e._s(`${e.countOfSelected}`))]):e._e(),t("button",{staticClass:"colapseHeader__button",class:{"colapseHeader__button--isActive":e.openCompany===e.index+1},on:{click:function(t){return e.setOpenCompany(e.index)}}})])])},F=[],I={name:"colapseHeader",props:{index:Number,title:String,openCompany:[Number,Array],countOfSelected:[Number,Array],selectedValues:Array,setOpenCompany:Function}},T=I,B=(0,y.Z)(T,w,F,!1,null,null,null),N=B.exports,D={name:"ColapseComponent",props:{index:Number,title:String,openCompany:[Number,Array],setOpenCompany:Function,countOfSelected:[Number,Array],selectedValues:Array,isSelect:{type:Boolean,default:!1}},components:{ColapseHeader:N},methods:{selectAllLocations(e){console.log(e.target)}}},L=D,M=(0,y.Z)(L,k,O,!1,null,null,null),P=M.exports,U={name:"LocationFormBody",data(){return{mainLocation:"",countOfSelected:0,isSelectAllLocations:"",options:["Main Precoro US","Precoro","US"],locations:[{name:"Berlin",id:"berlin",value:""},{name:"Poland Office",id:"poland",value:""},{name:"Venice Office",id:"venice",value:""},{name:"USA Office",id:"USA",value:""},{name:"Canada",id:"canada",value:""},{name:"Ukraine Kiyv Lukivska 7 Main Office",id:"Kiyv",value:""},{name:"Mexico",id:"mexico",value:""}]}},props:{index:Number,company:String,openCompany:Number,setOpenCompany:Function},components:{Multiselect:C(),Colapse:P},watch:{locations:{handler:function(e){this.countOfSelected=e.filter((e=>e.value)).length},deep:!0},isSelectAllLocations(e){const t=this.locations.map((t=>({...t,value:e})));this.locations=t,console.log(t)}},methods:{selectAllLocations(e){console.log(e.target)}}},R=U,$=(0,y.Z)(R,x,g,!1,null,null,null),Z=$.exports,V={name:"LocationForm",data(){return{openCompany:1}},props:{availableCompanies:{type:Array,default(){return[]}},goToStep:Function},components:{AvailableLocationsFormBody:Z},methods:{setOpenCompany(e){this.openCompany=this.openCompany===e+1?null:e+1}}},E=V,H=(0,y.Z)(E,A,_,!1,null,null,null),j=H.exports,G=function(){var e=this,t=e._self._c;return e.availableCompanies.length?t("div",e._l(e.availableCompanies,(function(a,n){return t("AvailableDocumentItem",{key:a,staticClass:"available",attrs:{index:n,company:a,openCompany:e.openCompany,setOpenCompany:e.setOpenCompany}})})),1):e._e()},q=[],W=function(){var e=this,t=e._self._c;return t("div",[t("Colapse",{attrs:{index:e.index,title:e.company,openCompany:e.openCompany,setOpenCompany:e.setOpenCompany,countOfSelected:e.countOfSelected}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.openCompany===e.index+1,expression:"openCompany === index + 1"}]},[t("label",{staticClass:"checkboxContainer checkboxContainer__lonely",attrs:{for:"input"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isSelectAllColumns,expression:"isSelectAllColumns"}],staticClass:"checkboxForm",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isSelectAllColumns)?e._i(e.isSelectAllColumns,null)>-1:e.isSelectAllColumns},on:{change:function(t){var a=e.isSelectAllColumns,n=t.target,l=!!n.checked;if(Array.isArray(a)){var s=null,o=e._i(a,s);n.checked?o<0&&(e.isSelectAllColumns=a.concat([s])):o>-1&&(e.isSelectAllColumns=a.slice(0,o).concat(a.slice(o+1)))}else e.isSelectAllColumns=l}}}),t("span",{staticClass:"mainText"},[e._v("Select All Document Custom Fields")])]),t("div",{staticClass:"AvailableDocument"},[t("h4",{staticClass:"inputFormTitle inputFormTitle--someBig"},[e._v("Available Document Custom Fields")]),t("div",{staticClass:"availableDocumentSlectGroup"},e._l(e.documents,(function(a){return t("AvailableDocumentDeepSelectColumn",{key:a.title,attrs:{isSelectAllColumns:e.isSelectAllColumns,documentGroup:a,changeCountOfSelected:e.changeCountOfSelected}})})),1)])])])],1)},K=[],J=function(){var e=this,t=e._self._c;return t("div",{staticClass:"availableDocumentSelectItem__wraper"},[t("div",{staticClass:"availableDocumentSelectItem"},[t("div",{staticClass:"sectionTitle sectionTitle--info"},[e._v(e._s(e.documentGroup.title))]),t("label",{staticClass:"checkboxContainer checkboxContainer__lonely selectAll",attrs:{for:"input"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isSelectAll,expression:"isSelectAll"}],staticClass:"checkboxForm",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isSelectAll)?e._i(e.isSelectAll,null)>-1:e.isSelectAll},on:{change:function(t){var a=e.isSelectAll,n=t.target,l=!!n.checked;if(Array.isArray(a)){var s=null,o=e._i(a,s);n.checked?o<0&&(e.isSelectAll=a.concat([s])):o>-1&&(e.isSelectAll=a.slice(0,o).concat(a.slice(o+1)))}else e.isSelectAll=l}}}),t("span",{staticClass:"mainText"},[e._v("Select All")])]),e._l(e.documentGroup.options,(function(a){return t("DeepSelect",{key:a.title,staticClass:"availableDocumentSelectItem__list",attrs:{isSelectAll:e.isSelectAll,document:a,changeCountOfSelected:e.changeCountOfSelected}})}))],2)])},Y=[],z=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"deepSelectHeader"},[t("div",{staticClass:"deepSelectCheckboxConatiner",attrs:{for:"input"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"checkboxForm checkboxForm--select",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{change:function(t){var a=e.value,n=t.target,l=!!n.checked;if(Array.isArray(a)){var s=null,o=e._i(a,s);n.checked?o<0&&(e.value=a.concat([s])):o>-1&&(e.value=a.slice(0,o).concat(a.slice(o+1)))}else e.value=l}}}),t("div",{staticClass:"deepSelectCheckboxConatiner deepSelectCheckboxConatiner--children"},[t("h3",{staticClass:"colapseSelectHeader__title"},[e._v(e._s(e.document.title))]),e.document?.options?t("button",{staticClass:"colapseSelectHeader__button",class:{"colapseSelectHeader__button--isActive":e.openSelects.includes(e.document.title)},on:{click:function(t){return e.setOpenSelects(e.document.title)}}}):e._e()])])]),e.document?.options?t("Colapse",{attrs:{isSelect:!0,title:e.document.title,setOpenCompany:e.setOpenSelects,openCompany:e.openSelects}},e._l(e.document.options,(function(a){return t("DeepSelect",{directives:[{name:"show",rawName:"v-show",value:e.openSelects.includes(e.document.title),expression:"openSelects.includes(document.title)"}],key:a.title,staticClass:"deepSelectChildrenElem",attrs:{document:a,isSelectAll:e.isSelectAll,changeCountOfSelected:e.changeCountOfSelected}})})),1):e._e()],1)},Q=[],X={name:"DeepSelect",data(){return{openSelects:[],value:!1}},props:{document:Object,isSelectAll:Boolean,changeCountOfSelected:Function},components:{Colapse:P},methods:{setOpenSelects(e){this.openSelects.includes(e)?this.openSelects=this.openSelects.filter((t=>t!=e)):this.openSelects=[...this.openSelects,e]}},watch:{isSelectAll(){this.value=this.isSelectAll},value(){console.log(this.value),this.changeCountOfSelected(this.value)}}},ee=X,te=(0,y.Z)(ee,z,Q,!1,null,null,null),ae=te.exports,ne={data(){return{isSelectAll:!1}},props:{documentGroup:{type:Object},isSelectAllColumns:Boolean,changeCountOfSelected:Function},components:{DeepSelect:ae},watch:{isSelectAllColumns(e){console.log(e,"Select"),this.isSelectAll=this.isSelectAllColumns}}},le=ne,se=(0,y.Z)(le,J,Y,!1,null,null,null),oe=se.exports,ie={name:"AvailableDocumentItem",data(){return{countOfSelected:0,isSelectAllColumns:!1,documents:[{title:"Classes",options:[{title:"Class 1",value:"",options:[{title:"subDevs",values:"",options:[{title:"subDevs",value:""}]}]},{title:"Class 2",value:"",options:[{title:"sub Devs",values:"",options:[{title:"sub Devs",value:""}]}]},{title:"Class 3",value:""},{title:"Class 4",value:""}]},{title:"Departments",options:[{title:"Developers",value:"",options:[{title:"subDevs",values:"",options:[{title:"2nd Sub-Developers",value:"",options:[{title:"3nd Sub-Developers",value:"",options:[{title:"IOS and Android Devs",value:""}]},{title:"4th Sub-Developers",value:""}]}]}]},{title:"Class 3",value:""},{title:"Class 4",value:""}]},{title:"DCF 3",options:[{title:"Class 1",value:"",options:[{title:"subDevs",values:"",options:[{title:"subDevs",value:""}]}]},{title:"Class 2",value:"",options:[{title:"sub Devs",values:"",options:[{title:"sub Devs",value:""}]}]},{title:"Class 3",value:""},{title:"Class 4",value:""}]}]}},props:{index:Number,company:String,openCompany:Number,setOpenCompany:Function},components:{Colapse:P,AvailableDocumentDeepSelectColumn:oe},methods:{changeCountOfSelected(e){e?this.countOfSelected++:this.countOfSelected--}}},ce=ie,re=(0,y.Z)(ce,W,K,!1,null,null,null),ue=re.exports,pe={name:"AvailableDocument",data(){return{openCompany:1}},props:{availableCompanies:{type:Array,default(){return[]}}},components:{AvailableDocumentItem:ue},methods:{setOpenCompany(e){this.openCompany=this.openCompany===e+1?null:e+1}}},me=pe,ve=(0,y.Z)(me,G,q,!1,null,null,null),de=ve.exports,Ce=function(){var e=this,t=e._self._c;return e.availableCompanies.length?t("div",e._l(e.availableCompanies,(function(a,n){return t("RoleFormItem",{key:a,staticClass:"available",attrs:{index:n,company:a,openCompany:e.openCompany,setOpenCompany:e.setOpenCompany}})})),1):e._e()},he=[],fe=function(){var e=this,t=e._self._c;return t("div",[t("Colapse",{attrs:{index:e.index,title:e.company,openCompany:e.openCompany,setOpenCompany:e.setOpenCompany,countOfSelected:e.categoryOfSelected,selectedValues:e.categoryOfSelected}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.openCompany===e.index+1,expression:"openCompany === index + 1"}],staticClass:"roleFormContainer"},[t("div",{staticClass:"roleFormSectionContainer"},[t("label",{attrs:{for:"inputForm"}},[t("div",{staticClass:"rolesCheckboxContainer rolesCheckboxContainer--topTitle"},[t("h4",{staticClass:"inputFormTitle inputFormTitle--someBig checkboxContainerItem"},[e._v("Access to:")]),t("h4",{staticClass:"inputFormTitle inputFormTitle--someBig"},[e._v("View only")]),t("h4",{staticClass:"inputFormTitle inputFormTitle--someBig"},[e._v("Create")]),t("h4",{staticClass:"inputFormTitle inputFormTitle--someBig"},[e._v("Approve")]),t("h4",{staticClass:"inputFormTitle inputFormTitle--someBig"},[e._v("Pay")])])]),t("label",{attrs:{for:"inputForm"}},[t("div",{staticClass:"rolesCheckboxContainer"},[t("span",{staticClass:"mainText checkboxContainerItem"},[e._v("All below")]),e._l(e.categories,(function(a){return t("input",{directives:[{name:"model",rawName:"v-model",value:e.allBelowAccessTo,expression:"allBelowAccessTo"}],key:a,staticClass:"checkboxForm",attrs:{type:"checkbox"},domProps:{value:a,checked:Array.isArray(e.allBelowAccessTo)?e._i(e.allBelowAccessTo,a)>-1:e.allBelowAccessTo},on:{input:function(t){return e.onAllBelowRoles(a)},change:function(t){var n=e.allBelowAccessTo,l=t.target,s=!!l.checked;if(Array.isArray(n)){var o=a,i=e._i(n,o);l.checked?i<0&&(e.allBelowAccessTo=n.concat([o])):i>-1&&(e.allBelowAccessTo=n.slice(0,i).concat(n.slice(i+1)))}else e.allBelowAccessTo=s}}})}))],2)]),e._l(e.roles,(function(a){return t("label",{key:a.name,staticClass:"rolesCheckboxContainer",attrs:{for:"input"}},[t("span",{staticClass:"mainText checkboxContainerItem"},[e._v(e._s(a.name))]),e._l(e.categories,(function(n){return t("input",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"role.value"}],key:n,staticClass:"checkboxForm",attrs:{type:"checkbox",hidden:"Pay"===n&&!e.payAble.includes(a.name)},domProps:{value:n,checked:Array.isArray(a.value)?e._i(a.value,n)>-1:a.value},on:{change:function(t){var l=a.value,s=t.target,o=!!s.checked;if(Array.isArray(l)){var i=n,c=e._i(l,i);s.checked?c<0&&e.$set(a,"value",l.concat([i])):c>-1&&e.$set(a,"value",l.slice(0,c).concat(l.slice(c+1)))}else e.$set(a,"value",o)}}})}))],2)}))],2),t("div",{staticClass:"rolesSideBar"},[t("h4",{staticClass:"inputFormTitle inputFormTitle--someBig rolesSideBar--title"},[e._v("Management:")]),t("div",{staticClass:"rolesSideBar__itemContainer"},[t("label",{staticClass:"rolesSideBar__item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.allBelowMenegment,expression:"allBelowMenegment"}],staticClass:"checkboxForm",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.allBelowMenegment)?e._i(e.allBelowMenegment,null)>-1:e.allBelowMenegment},on:{change:function(t){var a=e.allBelowMenegment,n=t.target,l=!!n.checked;if(Array.isArray(a)){var s=null,o=e._i(a,s);n.checked?o<0&&(e.allBelowMenegment=a.concat([s])):o>-1&&(e.allBelowMenegment=a.slice(0,o).concat(a.slice(o+1)))}else e.allBelowMenegment=l}}}),t("span",{staticClass:"mainText checkboxContainerItem"},[e._v("All Below")])])]),e._l(e.managmentData,(function(a){return t("div",{key:a.name,staticClass:"rolesSideBar__itemContainer"},[t("label",{staticClass:"rolesSideBar__item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"data.value"}],staticClass:"checkboxForm",attrs:{type:"checkbox"},domProps:{value:a.name,checked:Array.isArray(a.value)?e._i(a.value,a.name)>-1:a.value},on:{change:function(t){var n=a.value,l=t.target,s=!!l.checked;if(Array.isArray(n)){var o=a.name,i=e._i(n,o);l.checked?i<0&&e.$set(a,"value",n.concat([o])):i>-1&&e.$set(a,"value",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(a,"value",s)}}}),t("span",{staticClass:"mainText checkboxContainerItem"},[e._v(e._s(a.name))])])])}))],2),t("div",{staticClass:"warningMesage"},[t("div",{staticClass:"warningIcon"}),t("span",{staticClass:"warningText"},[e._v("The user becomes a "),t("a",{staticClass:"warningLink"},[e._v("Power user")]),e._v(" if at least ONE of the following roles is selected: Approve, View only, Configuration, Suppliers and Items, Budgets, Warehouse manager.")])])])])],1)},ye=[],be={name:"RoleFormItem",data(){return{categoryOfSelected:[],payAble:["Expenses","Invoices","All bellow"],managmentData:[{name:"Configuration",value:""},{name:"Suppliers and items",value:""},{name:"Budgets",value:""},{name:"Warehouse manager",value:""},{name:"Reports",value:""},{name:"Admin (Full access)",value:""}],roles:[{name:"Warehouse requests",value:[]},{name:"Purchase requests",value:[]},{name:"Request for proposals",value:[]},{name:"Purchase orders",value:[]},{name:"Receipts",value:[]},{name:"Invoices",value:[]},{name:"Expenses",value:[]}],categories:["View only","Create","Aprove","Pay"],allBelowAccessTo:[],allBelowMenegment:!1}},props:{index:Number,company:String,openCompany:Number,setOpenCompany:Function},components:{Colapse:P},watch:{roles:{handler:function(){const e=[];this.roles.forEach((t=>{t.value.forEach((t=>{e.includes(t)||e.push(t)}))})),this.categoryOfSelected=e,console.log(this.categoryOfSelected)},deep:!0},allBelowAccessTo(e,t){let a;if(t.length>e.length)return a=t.find((t=>!e.includes(t))),this.onAllBelowRolesOff(a),void console.log(a);const n=e.find((e=>!t.includes(e)));this.onAllBelowRolesOn(n)},allBelowMenegment(e){this.managmentData=this.managmentData.map((t=>({...t,value:e})))}},methods:{setCategorySelected(e){this.categoryOfSelected=[...this.category,e]},onAllBelowRolesOn(e){let t;t=this.roles.map((t=>t.value.includes(e)?t:{...t,value:[...t.value,e]})),this.roles=t},onAllBelowRolesOff(e){let t;t=this.roles.map((t=>{const a=t.value.filter((t=>t!=e));return{...t,value:a}})),this.roles=t}}},Se=be,Ae=(0,y.Z)(Se,fe,ye,!1,null,null,null),_e=Ae.exports,xe={name:"RoleForm",data(){return{openCompany:1}},props:{availableCompanies:{type:Array,default(){return[]}}},components:{RoleFormItem:_e},methods:{setOpenCompany(e){this.openCompany=this.openCompany===e+1?null:e+1}}},ge=xe,ke=(0,y.Z)(ge,Ce,he,!1,null,null,null),Oe=ke.exports,we={name:"MultiStepForm",data(){return{InviteUserFormSteps:p,curentStep:1,complitedSteps:[],activeinAll:"false",availableCompanies:[]}},props:{setIsOpenInviteUser:Function},methods:{nextStep(){this.complitedSteps.push(this.curentStep),this.curentStep!=p.steps.length?this.curentStep++:this.setIsOpenInviteUser(!1)},keydownNextStep(e){if(9===e.keyCode){if(e.preventDefault(),this.curentStep===p.steps.length)return void(this.curentStep=1);this.curentStep++}},goToStep(e){this.curentStep=e},setAvailableCompanies(e){this.availableCompanies=e.availableCompanies,console.log(e)},checkIndexOpenCompany(e){return console.log(this.InviteUserFormSteps.steps.indexOf(e)+1===this.curentStep),this.InviteUserFormSteps.steps.indexOf(e)+1===this.curentStep}},mounted(){window.addEventListener("keydown",this.keydownNextStep)},unmounted(){window.removeEventListener("keydown",this.keydownNextStep)},components:{MainInfoFormStep:S,AvailableLocationsFormStep:j,AvailableDocumentForm:de,RoleForm:Oe}},Fe=we,Ie=(0,y.Z)(Fe,r,u,!1,null,null,null),Te=Ie.exports,Be={name:"App",components:{InviteUser:Te},data(){return{isOpenInviteUser:!1}},methods:{setIsOpenInviteUser(e){this.isOpenInviteUser=e}}},Ne=Be,De=(0,y.Z)(Ne,i,c,!1,null,null,null),Le=De.exports;s["default"].config.productionTip=!1,s["default"].use(l(),{locale:o.Z}),new s["default"]({render:e=>e(Le)}).$mount("#app")}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,n,l,s){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],s=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(i=!1,s<o&&(o=s));if(i){e.splice(u--,1);var r=l();void 0!==r&&(t=r)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,l,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,s,o=n[0],i=n[1],c=n[2],r=0;if(o.some((function(t){return 0!==e[t]}))){for(l in i)a.o(i,l)&&(a.m[l]=i[l]);if(c)var u=c(a)}for(t&&t(n);r<o.length;r++)s=o[r],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},n=self["webpackChunkinvite_user_spa"]=self["webpackChunkinvite_user_spa"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(4272)}));n=a.O(n)})();
//# sourceMappingURL=app.afdb0b9e.js.map