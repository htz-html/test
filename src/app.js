import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";
import { expect } from "chai";


Vue.component("g-button", Button);
Vue.component("g-icon", Icon);

new Vue({
  el: "#app",
  data() {
    return {
      loading1: true,
    };
  },
});



import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)



try {
  

// 单元测试
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'delete'
    }
  })
  vm.$mount("#test")
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-delete')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'delete',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'delete',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'delete',
    }
  })
  vm.$mount()
  let spy = chai.spy(function(){})
  vm.$on('click', spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}
} catch (error) {
  window.errors= [error]
} finally {
  window.errors && window.errors.forEach((error)=>{
    console.error(error.message)
  })
}
