<template>
  <div :class="[classes, gutters]">
    <slot></slot>
  </div>
</template>

<script>
import gutter from '../mixins/gutter'
export default {
  mixins: [gutter],
  props: {
    fluid: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        [this.$style.container]: true,
        [this.container.maxWidth]: !this.fluid
      }
    }
  }
}
</script>

<style module src="../css/common.css"></style>

<style module="container">
.maxWidth {
  margin-left: auto;
  margin-right: auto;
}
</style>
