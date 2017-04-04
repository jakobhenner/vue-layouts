<template>
  <div :class="[gutters]">
    <slot></slot>
  </div>
</template>

<script>
import gutter from './gutter'

export default {
  mixins: [gutter]
}
</script>

<style module src="../css/grid.css">
