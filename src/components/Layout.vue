<template>
  <div :class="[gutters]">
    <slot></slot>
  </div>
</template>

<script>
import gutter from '../mixins/gutter'

export default {
  mixins: [gutter]
}
</script>

<style module src="../css/common.css"></style>
