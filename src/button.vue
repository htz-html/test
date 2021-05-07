<template>
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: true }">
    <g-icon class="icon" v-if="icon" :name="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./icon";
export default {
  components:{
    'g-icon': Icon
  },
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        //属性检查器，检查传过来的值是否正确
        return !(value !== "left" && value !== "right");
      },
    },
  },
};
</script>
<style lang='scss' scoped>
.g-button {
  padding: 0 1em;
  height: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
    }
  }
}
</style>