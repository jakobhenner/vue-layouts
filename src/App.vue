<template>
  <div id="app">
    <container margin-top>
      <row gutter-vertical="x-large">
        <column :size="6" :sizes="{xs: 12}">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </column>
        <column :offset="2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </column>
      </row>
    </container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Container from '@/components/Container';
import Row from '@/components/Row';
import Column from '@/components/Column';

export default {
  name: 'app',
  components: {
    Container,
    Row,
    Column
  },
  methods: {
    ...mapActions([
      'breakpoints/setViewport'
    ]),
    onResize () {
      this['breakpoints/setViewport']({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
  },
  created () {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  }
};
</script>

<style>
:root {
  --grid-gutter-base: 1.25em;
  --grid-gutter-multiplier-x-large: 4.5;
  --grid-gutter-multiplier-large: 2;
  --grid-gutter-multiplier-small: 0.25;
}

#app {
  font-family: -apple-system, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
