<template>
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: true }" @click="$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon v-if="loading" class="icon loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./icon";
export default {
  components: {
    "g-icon": Icon,
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
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
@keyframes spin {
  0%{transform: rotate(0deg);}
  100%{transform: rotate(360deg);}
}
.g-button {
  padding: 0 1em;
  height: 44px;
  font-size: 18px;
  background: #fff;
  border: 1px solid #aaa;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: .3em;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: .3em;
    }
  }
  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>
