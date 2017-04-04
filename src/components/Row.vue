<template>
  <div :class="[classes, gutters]">
    <slot></slot>
  </div>
</template>

<script>
import gutter from '../mixins/gutter'

export default {
  name: 'row',
  mixins: [gutter],
  props: {
    justify: String,
    vertical: Boolean,
    gutterless: Boolean
  },
  computed: {
    classes () {
      return {
        [this.$style.row]: true,
        [this.row.common]: true,
        [this.row.vertical]: this.vertical,
        [this.$style.marginHorisontalNone]: this.gutterless,
        [this.row[`justify-${this.justify}`]]: this.justify
      }
    }
  }
}
</script>

<style module src="../css/common.css"></style>

<style module="row">
.common {
  min-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.gutterless {
  margin-left: 0;
  margin-right: 0;
}
.vertical {
  flex-direction: column;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-space-between {
  justify-content: space-between;
}
</style>
