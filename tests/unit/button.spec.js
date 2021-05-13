import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)


import { shallowMount } from '@vue/test-utils'
import Button from "../../src/button"
import Vue from 'vue'


describe('demo.vue', () => {
  it('存在.', () => {
    expect(Button).to.exist
  })
  it("可以设置icon.", () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: "settings",
      },
    }).$mount();
    const useElement = vm.$el.querySelector("use");
    expect(useElement.getAttribute("xlink:href")).to.equal("#i-settings");
    vm.$destroy();
  });
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
  it("点击 button 触发 click 事件", () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: "settings",
      },
    }).$mount();

    const callback = sinon.fake();
    vm.$on("click", callback);
    vm.$el.click();
    expect(callback).to.have.been.called;
  });
})
