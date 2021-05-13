import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)


import { shallowMount, mount } from '@vue/test-utils'
import Button from "../../src/button"
import Vue from 'vue'


describe('demo.vue', () => {
  it('存在.', () => {
    expect(Button).to.exist
  })
  // 测试属性（使用wrapper）
  it("可以设置icon.", () => {
    const wrapper = mount(Button, {
      propsData:{
        icon: 'search'
      }
    })
    const useElement = wrapper.find("use");
    expect(useElement.attributes()['href']).to.equal("#i-search");
  });
  // 测试属性（没有使用wrapper）
  it("可以设置loading.", () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: "settings",
        loading: true,
      },
    }).$mount();
    const useElements = vm.$el.querySelectorAll("use");
    expect(useElements.length).to.equal(1);
    expect(useElements[0].getAttribute("xlink:href")).to.equal("#i-loading");
    vm.$destroy();
  });
  // 测试css
  it("icon 默认的 order 是 1", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: "settings",
      },
    }).$mount(div);
    const icon = vm.$el.querySelector("svg");
    expect(getComputedStyle(icon).order).to.eq("1");
    vm.$el.remove();
    vm.$destroy();
  });
  // 测试事件
  it("点击 button 触发 click 事件", () => {
    const wrapper = mount(Button, {
      propsData:{
        icon: 'search'
      }
    })
    const vm = wrapper.vm
    const callback = sinon.fake();
    vm.$on("click", callback);
    vm.$el.click();
    expect(callback).to.have.been.called;
  });
})
